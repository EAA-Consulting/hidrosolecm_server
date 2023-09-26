import { type ProductDTO } from '../../DTOs/ProductDTO'
import { type ProductModel } from '../../model/ProductModel'
export interface ProductRepositoryInterface {
  handle: (product: ProductDTO) => Promise<ProductModel>
}
