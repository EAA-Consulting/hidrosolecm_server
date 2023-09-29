import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type IGetProductRepository } from '../../../Domain/repositories/product/getProductRepository'
import { MySqlHelper } from '../../helpers/database/mysqlHelper'
export class GetProductRepository implements IGetProductRepository {
  async handle (): Promise<ProductModel[]> {
    return await new Promise((resolve, reject) => {
      let products: ProductModel[] = []
      const pool = MySqlHelper.pool
      pool.getConnection((err, connection) => {
        if (err) {
          reject(new Error('Error on getting connection'))
          return
        }
        const sqlSelect = 'SELECT * FROM PRODUCT'
        connection.query(sqlSelect, [], (err, result) => {
          if (err) {
            connection.release()
            reject(new Error('Error to execute query'))
            return
          }
          connection.release()
          products = result as ProductModel[]
          resolve(products)
        })
      })
    })
  }
}
