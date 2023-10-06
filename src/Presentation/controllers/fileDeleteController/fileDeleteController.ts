import { type IFileDeleteApp } from '../../../Application/use-cases/interfaces/fileDeleteInterface'
import { MissingParamError } from '../../errors'
import { badRequest, success } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../interfaces/http'

export class FileDeleteController implements Controller {
  constructor (private readonly fileDeleteApp: IFileDeleteApp) {}
  async handle (request: HttpRequest): Promise<HttpResponse> {
    const { fileName } = request.params
    if (!fileName) {
      return badRequest(new MissingParamError('File name must be provided'))
    }
    const response = await this.fileDeleteApp.handle(fileName)
    return success(response)
  }
}
