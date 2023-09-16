import { type EmailValidator } from '../../../presentation/interfaces/emailValidator'
import { type SignUpApplication } from '../interfaces/signupInterface'
import { Signup } from './signup'

interface SutTypes {
  sut: SignUpApplication
  emailValidatorStub: EmailValidator
}

describe('Signup Services', () => {
  const makeSut = (): SutTypes => {
    class EmailValidatorStub {
      isValid (email: string): boolean {
        return true
      }
    }
    const emailValidatorStub = new EmailValidatorStub()
    const signupApplication = new Signup(emailValidatorStub)

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
    const passwordConfirmation = 'any_password'
    const spyEmail = jest.spyOn(emailValidatorStub, 'isValid')
    await sut.handle(name, email, password, passwordConfirmation)

    expect(spyEmail).toHaveBeenCalledWith(email)
  })

  test('Ensure a valid email is sent to the signup', async () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(true)

    const name = 'any_name'
    const email = 'edi@gmail.com'
    const password = 'any_password'
    const passwordConfirmation = 'any_password'

    const response = await sut.handle(name, email, password, passwordConfirmation)

    expect(response).toBeTruthy()
  })
  test('Ensure SignupApplication returns null if EmailValidator returns false', async () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)

    const name = 'any_name'
    const email = 'asdfasdf'
    const password = 'any_password'
    const passwordConfirmation = 'any_password'
    await expect(sut.handle(name, email, password, passwordConfirmation)).rejects.toThrow()
  })
})
