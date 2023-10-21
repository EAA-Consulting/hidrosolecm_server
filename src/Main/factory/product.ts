import { DeleteProductApplication } from '../../Application/use-cases/product/deleteProductApp'
import { GetProductApplication } from '../../Application/use-cases/product/getProductApp'
import { ProductApplication } from '../../Application/use-cases/product/productApp'
import { UpdateProductApp } from '../../Application/use-cases/product/updateProductApp'
import { LogRepository } from '../../Infrastructure/firebirdDatabase/logRepository'
import { DeleteProductRepository } from '../../Infrastructure/firebirdDatabase/product/deleteProductRepository'
import { GetProductRepository } from '../../Infrastructure/firebirdDatabase/product/getProductRepository'
import { ProductRepository } from '../../Infrastructure/firebirdDatabase/product/productRepository'
import { UpdateProductRepository } from '../../Infrastructure/firebirdDatabase/product/updateProductRepository'
import { AddProductController } from '../../Presentation/controllers/product/addProductController'
import { DeleteProductController } from '../../Presentation/controllers/product/deleteProductController'
import { GetProductController } from '../../Presentation/controllers/product/getProductController'
import { UpdateProductController } from '../../Presentation/controllers/product/updateProductController'
import { type Controller } from '../../Presentation/interfaces/controller'
import { LogDecoratorController } from '../decorators/logDecoratorController'

export const makeAddProductController = (): Controller => {
  const productRepository = new ProductRepository()
  const productApplication = new ProductApplication(productRepository)

  const addProductController = new AddProductController(productApplication)
  const logRepository = new LogRepository()
  return new LogDecoratorController(addProductController, logRepository)
}

export const makeGetProductController = (): Controller => {
  const getProductRepository = new GetProductRepository()
  const getProductApplication = new GetProductApplication(getProductRepository)
  const getProductController = new GetProductController(getProductApplication)
  const logRepository = new LogRepository()
  return new LogDecoratorController(getProductController, logRepository)
}

export const makeDeleteProductController = (): Controller => {
  const deleteProductRepository = new DeleteProductRepository()
  const deleteProductApplication = new DeleteProductApplication(deleteProductRepository)
  const deleteProductController = new DeleteProductController(deleteProductApplication)
  const logRepository = new LogRepository()
  return new LogDecoratorController(deleteProductController, logRepository)
}

export const makeUpdateProductController = (): Controller => {
  const productRepository = new UpdateProductRepository()
  const productApplication = new UpdateProductApp(productRepository)
  const updateProductController = new UpdateProductController(productApplication)
  const logRepository = new LogRepository()
  return new LogDecoratorController(updateProductController, logRepository)
}
