import { type Controller } from '../../protocols/controller'
import { type HttpResponse, type HttpRequest } from '../../protocols/http'

const makeSut = (): Controller => {
  class SignUpController implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
      if (!httpRequest.body.name) {
        return await new Promise(resolve => { resolve({ statusCode: 400, body: null }) })
      }
      return await new Promise(resolve => { resolve({ statusCode: 200, body: null }) })
    }
  }

  return new SignUpController()
}

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const sut = makeSut()
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
    const sut = makeSut()
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
})
