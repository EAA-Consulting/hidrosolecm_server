import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type IGetProductRepository } from '../../../Domain/repositories/product/getProductRepository'
import { type IGetProduct } from '../interfaces/getProduct'

export class GetProductApplication implements IGetProduct {
  constructor (private readonly repository: IGetProductRepository) {}
  async handle (): Promise<ProductModel[]> {
    return await this.repository.handle()
  }
}
