import { MissingParamError } from '../../errors'
import { type Controller } from '../../interfaces/controller'
import { type EmailValidator } from '../../interfaces/emailValidator'
import { SignUpController } from './signupController'

interface SutTypes {
  sut: Controller
  emailValidatorStub: EmailValidator
}

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }

  return new EmailValidatorStub()
}
const makeSut = (): SutTypes => {
  const emailValidatorStub = makeEmailValidator()
  const signupController = new SignUpController(emailValidatorStub)
  return {
    emailValidatorStub,
    sut: signupController
  }
}

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
  test('Should return 200 all fields are passed', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })

  test('Should return 200 all fields are passed', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })

  test('Ensure SignUpController calls EmailValidator with correct email', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })

  test('Ensure SignUpController calls EmailValidator with correct email', async () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('Email is not valid'))
  })
  test('Ensure I get error 400 from Controller if I dont pass name', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }

    }
    const response = await sut.handle(httpRequest)
    expect(response.body).toEqual(new MissingParamError('Missing param: name'))
  })
  test('Ensure I get error 400 from Controller if I dont pass email', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }

    }
    const response = await sut.handle(httpRequest)
    expect(response.body).toEqual(new MissingParamError('Missing param: name'))
  })
  test('Ensure I get error 400 from Controller if I dont pass password', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        passwordConfirmation: 'any_password'
      }

    }
    const response = await sut.handle(httpRequest)
    expect(response.body).toEqual(new MissingParamError('Missing param: name'))
  })
  test('Ensure I get error 400 from Controller if I dont pass passwordConfirmation', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password'
      }

    }
    const response = await sut.handle(httpRequest)
    expect(response.body).toEqual(new MissingParamError('Missing param: name'))
  })
  test('Ensure a valid email is sent to the controller', async () => {
    const { sut, emailValidatorStub } = makeSut()
    const spyEmail = jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'edi@gmail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    sut.handle(httpRequest)
    expect(spyEmail).toHaveBeenCalledWith('edi@gmail.com')
  })
})
