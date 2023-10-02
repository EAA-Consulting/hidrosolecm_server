import { type IGetProduct } from '../../../Application/use-cases/interfaces/getProductInterface'
import { serverError, success } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../interfaces/http'

export class GetProductController implements Controller {
  constructor (private readonly getProductApplication: IGetProduct) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const product = await this.getProductApplication.handle()
      return success(product)
    } catch (error) {
      return serverError()
    }
  }
}
