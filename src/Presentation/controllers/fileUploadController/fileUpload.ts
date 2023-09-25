import { MissingParamError } from '../../errors'
import { badRequest, success } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../interfaces/http'
export class FileUploadController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const file = httpRequest.file
    if (!file) {
      return badRequest(new MissingParamError('There is not file associated with the request'))
    }
    return success()
  }
}
