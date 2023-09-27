import { type ProductDTO } from '../../DTOs/ProductDTO'
import { type ProductModel } from '../../model/ProductModel'
export interface IProductRepository {
  handle: (product: ProductDTO) => Promise<ProductModel>
}
