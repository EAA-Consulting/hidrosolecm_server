import { type IUpdateProductApp } from '../../../Application/use-cases/interfaces/updateProductInterface'
import { type ProductUpdateDTO } from '../../../Domain/DTOs/ProductDTO'
import { success } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../interfaces/http'

export class UpdateProductController implements Controller {
  constructor (private readonly updateProductApp: IUpdateProductApp) {

  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { productId, storeCode, description, altText, imagePath, name, category } = httpRequest.body
    const requiredFields = ['productId', 'description', 'altText', 'imagePath', 'name', 'category']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new Error(`Missing param: ${field}`)
        }
      }
    }
    const product: ProductUpdateDTO = {
      productId,
      storeCode,
      description,
      altText,
      imagePath,
      name,
      category
    }
    const result = await this.updateProductApp.handle(product)
    return success(result)
  }
}
