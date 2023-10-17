import { type Controller } from '../../Presentation/interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../Presentation/interfaces/http'
import { LogDecoratorController } from './logDecoratorController'

interface SubTypes {
  sut: LogDecoratorController
  controllerStub: Controller
}
describe('Log Decorator Controller', () => {
  const makeController = (): Controller => {
    class ControllerStub {
      async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        const httpResponse: HttpResponse = {
          statusCode: 200,
          body: {
            name: 'any_name'
          }
        }
        return await new Promise(resolve => { resolve(httpResponse) })
      }
    }
    return new ControllerStub()
  }
  const makeSut = (): SubTypes => {
    const controllerStub = makeController()
    const sut = new LogDecoratorController(controllerStub)
    return {
      sut,
      controllerStub
    }
  }
  test('Should call controller handle', async () => {
    const { sut, controllerStub } = makeSut()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }

    }
    await sut.handle(httpRequest)
    expect(handleSpy).toHaveBeenCalledWith(httpRequest)
  })
})
