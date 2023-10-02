import { type ProductDTO } from '../../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type IProductRepository } from '../../../Domain/repositories/product/productRepository'
import { type IProductApplication } from '../interfaces/productInterface'
import { ProductApplication } from './productApp'

interface SubTypes {
  sut: IProductApplication
  repositoryStub: IProductRepository
}
describe('Product App', () => {
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

  const makeSut = (): SubTypes => {
    const repositoryStub = makeRepositoryStub()
    const sut = new ProductApplication(repositoryStub)
    return {
      sut,
      repositoryStub
    }
  }
  test('Ensure I call the repository  with the correct params', async () => {
    const { repositoryStub, sut } = makeSut()
    const handleSpy = jest.spyOn(repositoryStub, 'handle')
    const productDto: ProductDTO = {
      description: 'any_description',
      altText: 'any_altText',
      imagePath: 'any_imagePath',
      storeCode: '23514',
      name: 'any_name',
      category: 'jardim'
    }
    await sut.handle(productDto)
    expect(handleSpy).toHaveBeenCalledWith(productDto)
  })
})
