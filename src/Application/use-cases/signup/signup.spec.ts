import { type AccountModel } from '../../../Domain/model/AccountModel'
import { type AddAccountData, type AddAccountServices } from '../../../Domain/services/interfaces/addAccount'
import { type EmailValidator } from '../../../Presentation/interfaces/emailValidator'
import { type SignUpApplication } from '../interfaces/signupInterface'
import { Signup } from './signup'

interface SutTypes {
  sut: SignUpApplication
  emailValidatorStub: EmailValidator
}

describe('Signup Services', () => {
  const makeAddAccountService = (): AddAccountServices => {
    class AddAccountStub implements AddAccountServices {
      async add (accountData: AddAccountData): Promise<AccountModel> {
        return await new Promise(resolve => {
          resolve({
            id: 1,
            name: 'any_name',
            email: 'any_email',
            password: 'any_password'
          })
        })
      }
    }

    return new AddAccountStub()
  }
  const makeSut = (): SutTypes => {
    class EmailValidatorStub {
      isValid (email: string): boolean {
        return true
      }
    }
    const emailValidatorStub = new EmailValidatorStub()
    const accountService = makeAddAccountService()
    const signupApplication = new Signup(emailValidatorStub, accountService)

    return {
      emailValidatorStub,
      sut: signupApplication
    }
  }

  test('Ensure SignupService calls EmailValidator with correct email', async () => {
    const { sut, emailValidatorStub } = makeSut()
    const name = 'any_name'
    const email = 'any_email'
    const password = 'any_password'
    const spyEmail = jest.spyOn(emailValidatorStub, 'isValid')
    await sut.handle(name, email, password)

    expect(spyEmail).toHaveBeenCalledWith(email)
  })

  test('Ensure a valid email is sent to the signup', async () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(true)

    const name = 'any_name'
    const email = 'edi@gmail.com'
    const password = 'any_password'

    const response = await sut.handle(name, email, password)

    expect(response).toBeTruthy()
  })
  test('Ensure SignupApplication returns null if EmailValidator returns false', async () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)

    const name = 'any_name'
    const email = 'asdfasdf'
    const password = 'any_password'
    await expect(sut.handle(name, email, password)).rejects.toThrow()
  })
})
