import firebird from 'node-firebird'
import { type IProductRepository } from '../../Domain/repositories/product/productRepository'
import { FirebirdOptions } from '../helpers/database/firebirdHelper'
import { ProductRepository } from './productRepository'
describe('Product Repository', () => {
  afterEach(() => {
    firebird.attach(FirebirdOptions, function (err, db) {
      if (err) {
        console.log(err)
        return
      }
      db.transaction(firebird.ISOLATION_READ_COMMITTED, function (err, transaction) {
        if (err) {
          console.log(err)
          return
        }
        const sqlDelete = 'DELETE FROM PRODUCT WHERE DESCRIPTION = ?'
        transaction.query(sqlDelete, ['any_description'], function (err, result) {
          if (err) {
            console.log(err)
            return
          }
          transaction.commit(function (err) {
            if (err) {
              console.log(err)
            }
          })
        })
      })
    })
  })
  const makeProductRepository = (): IProductRepository => {
    return new ProductRepository()
  }
  test.skip('Ensure I can save a product in the database', async () => {
    const sut = makeProductRepository()

    const productDto = {
      description: 'any_description',
      altText: 'any_altText',
      imagePath: 'any_imagePath',
      storeCode: '23514'

    }
    const result = await sut.handle(productDto)

    expect(result.id).toBeTruthy()
  })
})
