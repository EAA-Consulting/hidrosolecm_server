import { type ProductUpdateDTO } from '../../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type UpdateProductRepository } from '../../../Infrastructure/mySqlDatabase/product/updateProductRepository'
import { type IUpdateProductApp } from '../interfaces/updateProductInterface'

export class UpdateProductApp implements IUpdateProductApp {
  constructor (private readonly updateProductRepository: UpdateProductRepository) {

  }

  async handle (product: ProductUpdateDTO): Promise<ProductModel> {
    return await this.updateProductRepository.handle(product)
  }
}
