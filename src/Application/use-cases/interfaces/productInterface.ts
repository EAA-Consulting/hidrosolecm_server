import { type ProductDTO } from '../../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../../Domain/model/ProductModel'

export interface IProductApplication {
  handle: (productDTO: ProductDTO) => Promise<ProductModel>
}
