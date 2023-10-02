import { MySqlHelper } from '../../helpers/database/mysqlHelper'
import { DeleteProductRepository } from './deleteProductRepository'
import { GetProductRepository } from './getProductRepository'
import { ProductRepository } from './productRepository'
describe('Product - Delete', () => {
  beforeAll(() => {
    MySqlHelper.openConnection()
  })
  afterAll(() => {
    MySqlHelper.closeConnection()
  })
  test('Ensure I can delete a product by id', async () => {
    const addProductRepository = new ProductRepository()
    const getProductRepository = new GetProductRepository()
    const insertedProduct = await addProductRepository.handle({
      description: 'any_description',
      altText: 'any_altText',
      imagePath: 'any_imagePath',
      storeCode: '23514',
      name: 'any_name',
      category: 'jardim'
    })

    const sut = new DeleteProductRepository()

    expect(insertedProduct.id).toBeTruthy()
    let result = await getProductRepository.handle()
    expect(result.find(product => product.id === insertedProduct.id)).toBeTruthy()
    await sut.handle(insertedProduct.id)
    result = await getProductRepository.handle()
    expect(result.find(product => product.id === insertedProduct.id)).toBeFalsy()
  })
})
