import { type Controller } from '../../protocols/controller'
import { badRequest, successRequest, type HttpRequest, type HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.name) {
      return badRequest(new Error('Missing param: name'))
    }
    return successRequest({})
  }
}
