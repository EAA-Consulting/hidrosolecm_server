import { type SignInApplication } from '../../../Application/use-cases/interfaces/signInInterface'
import { type AuthenticatedUser } from '../../../Application/use-cases/signin/value_objects/authenticatedUser'
import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { SignInController } from './signInController'

interface SubTypes {
  sut: Controller
  signupAppSub: SignInApplication

}
describe('SignIn Controller', () => {
  const makeSignInApp = (): SignInApplication => {
    class SignInAppSub implements SignInApplication {
      async handle (email: string, password: string): Promise<AuthenticatedUser> {
        return await new Promise(resolve => { resolve({ token: '21341w341234', user: { email: 'any_email', id: 1, name: 'any_name', password: 'any_password' } }) })
      }
    }
    return new SignInAppSub()
  }
  const makeSut = (): SubTypes => {
    const signupAppSub = makeSignInApp()
    const signInController = new SignInController(signupAppSub)
    return {
      sut: signInController,
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

  it('Should return 400 in case email is not send', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
  it('Should return 400 in case password is not send', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        email: 'email'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
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
})
