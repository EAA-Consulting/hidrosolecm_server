import { type SignUpApplication } from '../../../Application/use-cases/interfaces/signupInterface'
import { type AccountModel } from '../../../Domain/model/AccountModel'
import { InvalidParamError, MissingParamError, ServerError } from '../../errors'
import { type Validation } from '../../helpers/validation/Validation'
import { type Controller } from '../../interfaces/controller'
import { SignUpController } from './signupController'

interface SutTypes {
  signupApplicationStub: SignUpApplication
  validationStub: Validation
  sut: Controller

}

const makeSignUpApplication = (): SignUpApplication => {
  class SignupAppMock implements SignUpApplication {
    async handle (name: string, email: string, password: string): Promise<AccountModel> {
      return await new Promise(resolve => {
        resolve({
          id: 1,
          name,
          email,
          password,
          admin: false
        })
      })
    }
  }
  return new SignupAppMock()
}

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error | null {
      return null
    }
  }
  return new ValidationStub()
}

const makeSut = (): SutTypes => {
  const signupApplication = makeSignUpApplication()
  const validationStub = makeValidation()
  const signupController = new SignUpController(signupApplication, validationStub)
  return {
    signupApplicationStub: signupApplication,
    validationStub,
    sut: signupController
  }
}

describe('SignUp Controller', () => {
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

  test('Should return 200 and get account returned', async () => {
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
    expect(httpRequest.body).toEqual({
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    })
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

  test('Ensure SignupApplication is called with correct params', async () => {
    const { sut, signupApplicationStub } = makeSut()
    const spySignup = jest.spyOn(signupApplicationStub, 'handle')

    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }

    }
    await sut.handle(httpRequest)
    expect(spySignup).toHaveBeenCalledWith('any_name', 'any_email', 'any_password')
  })

  test('Should sut throws if signupApplication throws', async () => {
    const { sut, signupApplicationStub } = makeSut()
    jest.spyOn(signupApplicationStub, 'handle').mockRejectedValueOnce(new InvalidParamError('Email is not valid'))
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
    expect(response.body).toEqual(new InvalidParamError('Email is not valid'))
  })

  test('Ensure if server throws error I get error 500 from Controller', async () => {
    const { sut, signupApplicationStub } = makeSut()
    jest.spyOn(signupApplicationStub, 'handle').mockImplementation(() => { throw new Error() })
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })
  test('Ensure the user is created', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'edi@gmail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(200)
  })

  test("Ensure I get error 400 and user already exists if I try to create a user with an email that's already in use", async () => {
    const { sut, signupApplicationStub } = makeSut()
    jest.spyOn(signupApplicationStub, 'handle').mockImplementationOnce(() => { throw new InvalidParamError('User already exists') })

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
    expect(response.body).toEqual(new InvalidParamError('User already exists'))
  })
  test('Ensure call validation with correct values', async () => {
    const { sut, validationStub } = makeSut()
    const validationSpec = jest.spyOn(validationStub, 'validate')

    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    await sut.handle(httpRequest)
    expect(validationSpec).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Ensure I get error 400 if I dont pass a field to the controller', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
    const httpRequest = {
      body: {
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('any_field'))
  })
})
