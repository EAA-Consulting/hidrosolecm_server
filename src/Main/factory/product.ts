import { DeleteProductApplication } from '../../Application/use-cases/product/deleteProductApp'
import { GetProductApplication } from '../../Application/use-cases/product/getProductApp'
import { ProductApplication } from '../../Application/use-cases/product/productApp'
import { UpdateProductApp } from '../../Application/use-cases/product/updateProductApp'
import { DeleteProductRepository } from '../../Infrastructure/mySqlDatabase/product/deleteProductRepository'
import { GetProductRepository } from '../../Infrastructure/mySqlDatabase/product/getProductRepository'
import { ProductRepository } from '../../Infrastructure/mySqlDatabase/product/productRepository'
import { UpdateProductRepository } from '../../Infrastructure/mySqlDatabase/product/updateProductRepository'
import { AddProductController } from '../../Presentation/controllers/product/addProductController'
import { DeleteProductController } from '../../Presentation/controllers/product/deleteProductController'
import { GetProductController } from '../../Presentation/controllers/product/getProductController'
import { UpdateProductController } from '../../Presentation/controllers/product/updateProductController'
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

export const makeDeleteProductController = (): Controller => {
  const deleteProductRepository = new DeleteProductRepository()
  const deleteProductApplication = new DeleteProductApplication(deleteProductRepository)

  return new DeleteProductController(deleteProductApplication)
}

export const makeUpdateProductController = (): Controller => {
  const productRepository = new UpdateProductRepository()
  const productApplication = new UpdateProductApp(productRepository)

  return new UpdateProductController(productApplication)
}
