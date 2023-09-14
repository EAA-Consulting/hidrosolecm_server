import { type SignUpApplication } from '../../../application/use-cases/interfaces/signupInterface'
import { InvalidParamError, MissingParamError } from '../../errors'
import { type Controller } from '../../interfaces/controller'
import { SignUpController } from './signupController'

interface SutTypes {
  signupApplicationStub: SignUpApplication
  sut: Controller

}

const makeSignUpApplication = (): SignUpApplication => {
  class SignupAppMock implements SignUpApplication {
    async handle (name: string, email: string, password: string, passwordConfirmation: string): Promise<boolean> {
      return await new Promise(resolve => { resolve(true) })
    }
  }
  return new SignupAppMock()
}

const makeSut = (): SutTypes => {
  const signupApplication = makeSignUpApplication()
  const signupController = new SignUpController(signupApplication)
  return {
    signupApplicationStub: signupApplication,
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
    expect(spySignup).toHaveBeenCalledWith('any_name', 'any_email', 'any_password', 'any_password')
  })

  test("Ensure I get error 400 from Controller if I don't pass a valid email", async () => {
    const { sut, signupApplicationStub } = makeSut()
    jest.spyOn(signupApplicationStub, 'handle').mockReturnValueOnce(new Promise(resolve => { resolve(false) }))

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
})