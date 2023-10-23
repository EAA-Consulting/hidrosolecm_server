import { type IProductRepository } from '../../../Domain/repositories/product/productRepository'
import { ProductRepository } from './productRepository'
describe('Product Repository', () => {
  const makeProductRepository = (): IProductRepository => {
    return new ProductRepository()
  }
  test('Ensure I can save a product in the database', async () => {
    const sut = makeProductRepository()

    const productDto = {
      description: 'any_description',
      altText: 'any_altText',
      imagePath: 'any_imagePath',
      storeCode: '23514',
      name: 'any_name',
      category: 'jardim'

    }
    const result = await sut.handle(productDto)

    expect(result.id).toBeTruthy()
  })
})
