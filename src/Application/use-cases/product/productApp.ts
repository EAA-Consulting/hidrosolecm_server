import { type ProductDTO } from '../../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type IProductRepository } from '../../../Domain/repositories/product/productRepository'
import { type IProductApplication } from '../interfaces/productInterface'

export class ProductApplication implements IProductApplication {
  constructor (private readonly productRepository: IProductRepository) {

  }

  async handle (productDTO: ProductDTO): Promise<ProductModel> {
    return await this.productRepository.handle(productDTO)
  }
}
