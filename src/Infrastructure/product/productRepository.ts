import firebird from 'node-firebird'
import { type ProductDTO } from '../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../Domain/model/ProductModel'
import { type IProductRepository } from '../../Domain/repositories/product/productRepository'
import { FirebirdOptions } from '../helpers/database/firebirdHelper'
export class ProductRepository implements IProductRepository {
  async handle (product: ProductDTO): Promise<ProductModel> {
    return await new Promise((resolve, reject) => {
      firebird.attach(FirebirdOptions, function (err, db) {
        if (err) {
          reject(err)
          return
        }
        db.transaction(firebird.ISOLATION_READ_COMMITTED, function (err, transaction) {
          if (err) {
            reject(err)
            return
          }
          const sqlInsert = 'INSERT INTO PRODUCT (DESCRIPTION, ALTTEXT, IMAGEPATH, STORECODE, NAME) VALUES (?, ?, ?, ?, ?) RETURNING ID'
          transaction.query(sqlInsert, [product.description, product.altText, product.imagePath, product.storeCode, product.name], function (err, result: any) {
            if (err) {
              reject(err)
              return
            }
            transaction.commit(function (err) {
              if (err) {
                reject(err)
                return
              }
              resolve({
                id: result.id,
                description: product.description,
                altText: product.altText,
                imagePath: product.imagePath,
                storeCode: product.storeCode,
                name: product.name

              })
            })
          })
        })
      })
    })
  }
}
