import { GetProductApplication } from '../../Application/use-cases/product/getProductApp'
import { ProductApplication } from '../../Application/use-cases/product/productApp'
import { GetProductRepository } from '../../Infrastructure/product/getProductRepository'
import { ProductRepository } from '../../Infrastructure/product/productRepository'
import { AddProductController } from '../../Presentation/controllers/product/addProductController'
import { GetProductController } from '../../Presentation/controllers/product/getProductController'
import { type Controller } from '../../Presentation/interfaces/controller'

export const makeAddProductController = (): Controller => {
  const productRepository = new ProductRepository()
  const productApplication = new ProductApplication(productRepository)

  return new AddProductController(productApplication)
}

export const makeGetProductController = (): Controller => {
  const getProductRepository = new GetProductRepository()
  const getProductApplication = new GetProductApplication(getProductRepository)

  return new GetProductController(getProductApplication)
}
