import { type FileUpload } from '../../../Application/use-cases/interfaces/fileUploadInterface'
import { MissingParamError } from '../../errors'
import { badRequest, success } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../interfaces/http'
export class FileUploadController implements Controller {
  constructor (private readonly fileUploadApplication: FileUpload) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const file = httpRequest.file
    if (!file) {
      return badRequest(new MissingParamError('There is not file associated with the request'))
    }

    const fileUpload = await this.fileUploadApplication.handle(file.originalname, file.buffer)
    return success(fileUpload)
  }
}
