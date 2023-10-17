import { type ILogErrorRepository } from '../../Domain/repositories/logError/LogErrorRepositoryInterface'
import { type Controller } from '../../Presentation/interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../Presentation/interfaces/http'

export class LogDecoratorController implements Controller {
  constructor (private readonly controller: Controller, private readonly logRepository: ILogErrorRepository) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500 || httpResponse.statusCode === 400) {
      await this.logRepository.log(httpResponse.body.stack, httpResponse.body.message)
    }
    return httpResponse
  }
}
