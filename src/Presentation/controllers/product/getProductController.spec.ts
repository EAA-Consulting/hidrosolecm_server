import { type IGetProduct } from '../../../Application/use-cases/interfaces/getProduct'
import { GetProductApplication } from '../../../Application/use-cases/product/getProductApp'
import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type IGetProductRepository } from '../../../Domain/repositories/product/getProductRepository'
import { type Controller } from '../../interfaces/controller'
import { GetProductController } from './getProductController'

describe('Get product controller', () => {
  test('Ensure I can get a product', async () => {
    interface SubTypes {
      sut: Controller
      applicationStub: IGetProduct
      repositoryStub: IGetProductRepository
    }
    const makeRepositoryStub = (): IGetProductRepository => {
      class RepositoryStub implements IGetProductRepository {
        async handle (): Promise<ProductModel[]> {
          return await new Promise(resolve => {
            resolve([{
              id: 1,
              description: 'any_description',
              altText: 'any_altText',
              imagePath: 'any_imagePath',
              storeCode: 'any_storeCode',
              name: 'any_name',
              category: 'any_category'
            }])
          })
        }
      }
      return new RepositoryStub()
    }

    const makeApplicationStub = (): IGetProduct => {
      const application = new GetProductApplication(makeRepositoryStub())
      return application
    }

    const makeSut = (): SubTypes => {
      const repositoryStub = makeRepositoryStub()
      const application = makeApplicationStub()
      const sut = new GetProductController(application)
      return {
        sut,
        repositoryStub,
        applicationStub: application
      }
    }

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
  })
})
