import { type ProductModel } from '../../../Domain/model/ProductModel'

export interface IGetProduct {
  handle: () => Promise<ProductModel[]>

}
