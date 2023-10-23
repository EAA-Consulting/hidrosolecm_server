import { DeleteProductRepository } from './deleteProductRepository'
describe('Product - Delete', () => {
  test('Ensure I can delete a product by id', async () => {
    const sut = new DeleteProductRepository()

    await expect(sut.handle(1)).resolves.toBeUndefined()
  })
})
