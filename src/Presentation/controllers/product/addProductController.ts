import { type IProductApplication } from '../../../Application/use-cases/interfaces/productInterface'
import { serverError, success } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../interfaces/http'

export class AddProductController implements Controller {
  constructor (private readonly productApplication: IProductApplication) {
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const productDTO = httpRequest.body
      const requiredFields = ['description', 'altText', 'imagePath', 'storeCode', 'category']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return {
            statusCode: 400,
            body: new Error(`Missing param: ${field}`)
          }
        }
      }
      const product = await this.productApplication.handle(productDTO)
      return success(product)
    } catch (error) {
      return serverError(error)
    }
  }
}
