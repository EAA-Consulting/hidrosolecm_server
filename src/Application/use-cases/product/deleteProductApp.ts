import { type IDeleteProduct } from '../../../Domain/repositories/product/deleteProductRepository'
import { type IDeleteProductApp } from '../interfaces/deleteProductInterface'

export class DeleteProductApplication implements IDeleteProductApp {
  constructor (private readonly deleteProductRepository: IDeleteProduct) {
  }

  async handle (productId: number): Promise<void> {
    await this.deleteProductRepository.handle(productId)
  }
}
