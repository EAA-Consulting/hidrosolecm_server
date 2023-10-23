import firebird from 'node-firebird'
import { type ProductUpdateDTO } from '../../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type IUpdateProductRepository } from '../../../Domain/repositories/product/updateProductRepository'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'
export class UpdateProductRepository implements IUpdateProductRepository {
  async handle (product: ProductUpdateDTO): Promise<ProductModel> {
    return await new Promise((resolve, reject) => {
      firebird.attach(FirebirdOptions, (err, db) => {
        if (err) {
          reject(new Error('Error on getting connection update product'))
          return
        }
        db.transaction(firebird.ISOLATION_READ_COMMITTED, (err, transaction) => {
          if (err) {
            reject(err)
            transaction.rollback()
            db.detach()
            return
          }

          const sqlUpdate = 'UPDATE product SET storeCode = ?, description = ?, altText = ?, imagePath = ?, name = ?, category = ? WHERE id = ?'
          db.query(sqlUpdate, [product.storeCode, product.description, product.altText, product.imagePath, product.name, product.category, product.productId], (err, result: any) => {
            if (err) {
              transaction.rollback()
              db.detach()
              reject(err)
              return
            }
            transaction.commit()
            db.detach()
            resolve({
              id: product.productId,
              storeCode: product.storeCode,
              description: product.description,
              altText: product.altText,
              imagePath: product.imagePath,
              name: product.name,
              category: product.category
            })
          })
        })
      })
    })
  }
}
