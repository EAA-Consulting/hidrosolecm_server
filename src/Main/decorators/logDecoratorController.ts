import { type Controller } from '../../Presentation/interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../Presentation/interfaces/http'

export class LogDecoratorController implements Controller {
  constructor (private readonly controller: Controller) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      console.log(httpResponse.body)
    }
    return httpResponse
  }
}
