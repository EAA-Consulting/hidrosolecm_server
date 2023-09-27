import Firebird from 'node-firebird'
import { type ProductModel } from '../../Domain/model/ProductModel'
import { type IGetProductRepository } from '../../Domain/repositories/product/getProductRepository'
import { FirebirdOptions } from '../helpers/database/firebirdHelper'
export class GetProductRepository implements IGetProductRepository {
  async handle (): Promise<ProductModel[]> {
    return await new Promise((resolve, reject) => {
      let products: ProductModel[] = []

      Firebird.attach(FirebirdOptions, (err, db) => {
        if (err) {
          reject(err)
          return
        }
        const sql = 'SELECT * FROM PRODUCT'
        db.query(sql, [], (err: any, result: ProductModel[]) => {
          if (err) {
            reject(err)
            return
          }
          db.detach()
          products = result
          resolve(products)
        })
      })
    })
  }
}
