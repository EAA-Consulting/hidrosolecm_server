import { ProductApplication } from '../../Application/use-cases/product/productApp'
import { ProductRepository } from '../../Infrastructure/product/productRepository'
import { AddProductController } from '../../Presentation/controllers/product/addProductController'
import { type Controller } from '../../Presentation/interfaces/controller'

export const makeAddProductController = (): Controller => {
  const productRepository = new ProductRepository()
  const productApplication = new ProductApplication(productRepository)

  return new AddProductController(productApplication)
}
