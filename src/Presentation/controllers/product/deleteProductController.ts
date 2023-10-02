import { type IDeleteProductApp } from '../../../Application/use-cases/interfaces/deleteProductInterface'
import { badRequest, success } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../interfaces/http'

export class DeleteProductController implements Controller {
  constructor (private readonly deleteProductController: IDeleteProductApp) {
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { productId } = httpRequest.body

    if (!productId) {
      return badRequest(new Error('Missing param: productId'))
    }
    await this.deleteProductController.handle(httpRequest.body.productId)
    return success()
  }
}
