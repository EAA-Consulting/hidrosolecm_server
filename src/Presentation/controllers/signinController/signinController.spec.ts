import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { SigninController } from './signinController'

describe('Signin Controller', () => {
  const makeSut = (): Controller => {
    return new SigninController()
  }
  it('should return 400 if no email is provided', async () => {
    const sut = makeSut()
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
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })

  it('Should return 400 in case email is not send', async () => {
    const sut = makeSut()

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
    const sut = makeSut()

    const httpRequest = {
      body: {
        email: 'email'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})
