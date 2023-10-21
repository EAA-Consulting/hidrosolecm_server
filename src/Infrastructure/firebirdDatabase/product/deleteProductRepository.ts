import firebird from 'node-firebird'
import { type IDeleteProduct } from '../../../Domain/repositories/product/deleteProductRepository'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'

export class DeleteProductRepository implements IDeleteProduct {
  async handle (id: number): Promise<void> {
    await new Promise((resolve, reject) => {
      firebird.attach(FirebirdOptions, (err, db) => {
        if (err) {
          reject(new Error('Error on connect to database'))
          return
        }
        db.transaction(firebird.ISOLATION_READ_COMMITTED, (err, transaction) => {
          if (err) {
            reject(new Error('Error on create transaction'))
            db.detach()
            return
          }
          const sqlDelete = 'DELETE FROM product WHERE ID = ?'
          transaction.query(sqlDelete, [id], (err, result) => {
            if (err) {
              transaction.rollback()
              reject(new Error('Error on execute query'))
              db.detach()
              return
            }
            transaction.commit((err) => {
              if (err) {
                reject(new Error('Error on commit transaction'))
                db.detach()
                return
              }
              db.detach()
              resolve(null)
            })
          })
        })
      })
    })
  }
}
