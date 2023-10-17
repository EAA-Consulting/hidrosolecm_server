import { type ILogErrorRepository } from '../../Domain/repositories/logError/LogErrorRepositoryInterface'
import { serverError } from '../../Presentation/helpers/httpHelpers'
import { type Controller } from '../../Presentation/interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../Presentation/interfaces/http'
import { LogDecoratorController } from './logDecoratorController'

interface SubTypes {
  sut: LogDecoratorController
  controllerStub: Controller
  logErrorRepositoryStub: ILogErrorRepository
}
describe('Log Decorator Controller', () => {
  const makeLogErrorRepository = (): ILogErrorRepository => {
    class LogErrorRepositoryStub implements ILogErrorRepository {
      async log (stack: string, message: string): Promise<void> {
        await new Promise(resolve => { resolve(null) })
      }
    }
    return new LogErrorRepositoryStub()
  }
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
    const logRepository = makeLogErrorRepository()
    const sut = new LogDecoratorController(controllerStub, logRepository)
    return {
      sut,
      controllerStub,
      logErrorRepositoryStub: logRepository
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

  test('Should return the same result of the controller', async () => {
    const { sut } = makeSut()
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }

    }

    const response = await sut.handle(httpRequest)
    expect(response).toEqual({
      statusCode: 200,
      body: {
        name: 'any_name'
      }
    })
  })

  test('Should call LogErrorRepository with correct error if controller returns a server error', async () => {
    const { sut, logErrorRepositoryStub, controllerStub } = makeSut()

    const fakeError = new Error()
    fakeError.stack = 'any_stack'
    fakeError.message = 'any_message'

    const error = serverError(fakeError)
    jest.spyOn(controllerStub, 'handle').mockReturnValueOnce(new Promise((resolve, reject) => { resolve(error) }))
    const logErrorSpy = jest.spyOn(logErrorRepositoryStub, 'log')
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }

    }
    await sut.handle(httpRequest)
    expect(logErrorSpy).toBeCalledWith('any_stack', 'any_message')
  })
})
