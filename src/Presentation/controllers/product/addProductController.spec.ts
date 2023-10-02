import { type IProductApplication } from '../../../Application/use-cases/interfaces/productInterface'
import { ProductApplication } from '../../../Application/use-cases/product/productApp'
import { type ProductDTO } from '../../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type IProductRepository } from '../../../Domain/repositories/product/productRepository'
import { type Controller } from '../../interfaces/controller'
import { AddProductController } from './addProductController'

describe('Add Product Controller', () => {
  interface SubTypes {
    sut: Controller
    applicationStub: IProductApplication
    repositoryStub: IProductRepository
  }
  const makeRepositoryStub = (): IProductRepository => {
    class RepositoryStub implements IProductRepository {
      async handle (product: ProductDTO): Promise<ProductModel> {
        return await new Promise(resolve => {
          resolve({
            id: 1,
            description: 'any_description',
            altText: 'any_altText',
            imagePath: 'any_imagePath',
            storeCode: 'any_storeCode',
            name: 'any_name',
            category: 'any_category'
          })
        })
      }
    }
    return new RepositoryStub()
  }

  const makeApplicationStub = (): IProductApplication => {
    const application = new ProductApplication(makeRepositoryStub())
    return application
  }

  const makeSut = (): SubTypes => {
    const repositoryStub = makeRepositoryStub()
    const application = makeApplicationStub()
    const sut = new AddProductController(application)
    return {
      sut,
      repositoryStub,
      applicationStub: application
    }
  }

  test('Ensure I can add a product', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        description: 'any_description',
        altText: 'any_altText',
        imagePath: 'any_imagePath',
        storeCode: '23514',
        name: 'any_name',
        category: 'jardim'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({
      id: 1,
      description: 'any_description',
      altText: 'any_altText',
      imagePath: 'any_imagePath',
      storeCode: 'any_storeCode',
      name: 'any_name',
      category: 'any_category'
    })
  })
})
