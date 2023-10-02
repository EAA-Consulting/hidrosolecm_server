import { type ProductUpdateDTO } from '../../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../../Domain/model/ProductModel'

export interface IUpdateProductApp {
  handle: (product: ProductUpdateDTO) => Promise<ProductModel>
}
