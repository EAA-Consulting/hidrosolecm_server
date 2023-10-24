import firebird from 'node-firebird'
import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type IGetProductRepository } from '../../../Domain/repositories/product/getProductRepository'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'
export class GetProductRepository implements IGetProductRepository {
  async handle (): Promise<ProductModel[]> {
    return await new Promise((resolve, reject) => {
      firebird.attach(FirebirdOptions, (err, db) => {
        if (err) {
          reject(err)
          return
        }
        db.transaction(firebird.ISOLATION_READ_COMMITTED, (err, transaction) => {
          if (err) {
            reject(err)
            db.detach()
            return
          }

          const sqlSelect = 'SELECT id, storeCode as "storeCode", imagePath as "imagePath", name, description, category, altText as "altText", updated FROM product'
          transaction.query(sqlSelect, [], (err, result) => {
            if (err) {
              transaction.rollback()
              db.detach()
              reject(err)
              return
            }
            transaction.commit()
            db.detach()
            const transformedProducts = result.map((r) => {
              return {
                ...r,
                storeCode: r.storecode,
                imagePath: r.imagepath,
                altText: r.alttext
              }
            }
            ) as ProductModel[] || []

            resolve(transformedProducts)
          })
        })
      })
    })
  }
}
