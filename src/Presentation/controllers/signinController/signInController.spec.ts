import { type SignInApplication } from '../../../Application/use-cases/interfaces/signInInterface'
import { type AuthenticatedUser } from '../../../Application/use-cases/signin/value_objects/authenticatedUser'
import { InvalidParamError, MissingParamError, ServerError } from '../../errors'
import { badRequest } from '../../helpers/httpHelpers'
import { type Validation } from '../../helpers/validation/Validation'
import { type Controller } from '../../interfaces/controller'
import { SignInController } from './signInController'

interface SubTypes {
  sut: Controller
  validationStub: Validation
  signupAppSub: SignInApplication

}
describe('SignIn Controller', () => {
  const makeValidation = (): Validation => {
    class ValidationStub implements Validation {
      validate (input: any): Error | null {
        return null
      }
    }
    return new ValidationStub()
  }
  const makeSignInApp = (): SignInApplication => {
    class SignInAppSub implements SignInApplication {
      async handle (email: string, password: string): Promise<AuthenticatedUser> {
        return await new Promise(resolve => { resolve({ token: '21341w341234' }) })
      }
    }
    return new SignInAppSub()
  }
  const makeSut = (): SubTypes => {
    const signupAppSub = makeSignInApp()
    const validation = makeValidation()
    const signInController = new SignInController(signupAppSub, validation)
    return {
      sut: signInController,
      validationStub: validation,
      signupAppSub
    }
  }
  it('should return 400 if no email is provided', async () => {
    const { sut } = makeSut()
    jest.spyOn(sut, 'handle').mockReturnValueOnce(new Promise(resolve => { resolve(badRequest(new MissingParamError('any_email'))) }))
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('any_email'))
  })
  it('Should return 200 and user account if correct credentials are provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body.token).toBeTruthy()
  })

  it("Should return 400 in case password doesn't match", async () => {
    const { sut, signupAppSub } = makeSut()
    jest.spyOn(signupAppSub, 'handle').mockImplementation(() => { throw new InvalidParamError('credentials') })
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password'
      }
    }

    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new InvalidParamError('credentials'))
  }
  )
  it('Should return 500 in case signup throws error', async () => {
    const { sut, signupAppSub } = makeSut()
    jest.spyOn(signupAppSub, 'handle').mockImplementation(() => { throw new Error() })
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password'
      }
    }

    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  }
  )

  it('Should return 400 if user not found', async () => {
    const { sut, signupAppSub } = makeSut()
    jest.spyOn(signupAppSub, 'handle').mockImplementation(() => { throw new InvalidParamError('User not found') })
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password'
      }
    }

    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new InvalidParamError('User not found'))
  })

  it('Should return 400 if email is not valid', async () => {
    const { sut, signupAppSub } = makeSut()
    jest.spyOn(signupAppSub, 'handle').mockImplementation(() => { throw new InvalidParamError('Email is not valid') })
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password'
      }
    }

    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new InvalidParamError('Email is not valid'))
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
