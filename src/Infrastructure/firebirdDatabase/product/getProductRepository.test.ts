import { type IGetProductRepository } from '../../../Domain/repositories/product/getProductRepository'
import { type IProductRepository } from '../../../Domain/repositories/product/productRepository'
import { GetProductRepository } from './getProductRepository'
import { ProductRepository } from './productRepository'

interface Subtypes {
  sut: IGetProductRepository
  productRepository: IProductRepository
}
describe('Get Product', () => {
  const makeSut = (): Subtypes => {
    const productRepository = makeProductRepository()
    return {
      sut: new GetProductRepository(),
      productRepository
    }
  }
  const makeProductRepository = (): IProductRepository => {
    return new ProductRepository()
  }
  test('Ensure I can get a product from the database', async () => {
    const { sut, productRepository } = makeSut()

    const productDto = {
      description: 'any_description',
      altText: 'any_altText',
      imagePath: 'any_imagePath',
      storeCode: '23514',
      name: 'any_name',
      category: 'jardim'

    }
    const result = await productRepository.handle(productDto)
    expect(result.id).toBeTruthy()

    const result2 = await sut.handle()
    expect(result2).toBeTruthy()
  })
})
