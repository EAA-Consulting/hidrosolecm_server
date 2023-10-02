import { type ProductUpdateDTO } from '../../DTOs/ProductDTO'
import { type ProductModel } from '../../model/ProductModel'

export interface IUpdateProductRepository {
  handle: (product: ProductUpdateDTO) => Promise<ProductModel>
}
