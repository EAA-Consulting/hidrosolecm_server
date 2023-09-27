import { type ProductModel } from '../../model/ProductModel'

export interface IGetProductRepository {
  handle: () => Promise<ProductModel[]>
}
