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
    const { sut } = makeSut()
    const name = 'any_name'
    const email = 'any_email'
    const password = 'any_password'
    const passwordConfirmation = 'any_password'

    const response = await sut.handle(name, email, password, passwordConfirmation)

    expect(response).toBe(true)
  })
  test('Ensure SignupApplication calls EmailValidator with correct email', async () => {
    const { sut } = makeSut()

    const name = 'any_name'
    const email = 'any_email'
    const password = 'any_password'
    const passwordConfirmation = 'any_password'

    const response = await sut.handle(name, email, password, passwordConfirmation)
    expect(response).toBe(true)
  })

  test('Ensure a valid email is sent to the signup', async () => {
    const { sut, emailValidatorStub } = makeSut()
    const spyEmail = jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)

    const name = 'any_name'
    const email = 'edi@gmail.com'
    const password = 'any_password'
    const passwordConfirmation = 'any_password'

    sut.handle(name, email, password, passwordConfirmation)

    expect(spyEmail).toHaveBeenCalledWith('edi@gmail.com')
  })
})

// if (!this.emailValidator.isValid(httpRequest.body.email)) {
//   return badRequest(new MissingParamError('Email is not valid'))
// }
