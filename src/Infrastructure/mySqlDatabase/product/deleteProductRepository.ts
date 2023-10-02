import { type IDeleteProduct } from '../../../Domain/repositories/product/deleteProductRepository'
import { MySqlHelper } from '../../helpers/database/mysqlHelper'

export class DeleteProductRepository implements IDeleteProduct {
  async handle (id: number): Promise<void> {
    await new Promise((resolve, reject) => {
      MySqlHelper.pool.getConnection((err, connection) => {
        if (err) {
          reject(new Error('Error on getting connection'))
          return
        }
        const sqlDelete = 'DELETE FROM product WHERE id = ?'
        connection.query(sqlDelete, [id], (err, result) => {
          if (err) {
            connection.release()
            reject(new Error('Error to execute query'))
            return
          }
          connection.release()
          resolve(null)
        })
      })
    })
  }
}
