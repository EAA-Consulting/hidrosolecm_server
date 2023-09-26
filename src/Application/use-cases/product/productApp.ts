import { type ProductDTO } from '../../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type ProductRepositoryInterface } from '../../../Domain/repositories/product/productRepository'
import { type ProductApplicationInterface } from '../interfaces/productInterface'

export class ProductApplication implements ProductApplicationInterface {
  constructor (private readonly productRepository: ProductRepositoryInterface) {

  }

  async handle (productDTO: ProductDTO): Promise<ProductModel> {
    return await this.productRepository.handle(productDTO)
  }
}
