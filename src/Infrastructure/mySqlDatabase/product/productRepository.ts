import { type ProductDTO } from '../../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type IProductRepository } from '../../../Domain/repositories/product/productRepository'
import { MySqlHelper } from '../../helpers/database/mysqlHelper'
export class ProductRepository implements IProductRepository {
  async handle (product: ProductDTO): Promise<ProductModel> {
    return await new Promise((resolve, reject) => {
      const pool = MySqlHelper.pool
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        }
        const sqlSelect = 'SELECT id, description, altText, imagePath, storeCode, name, category FROM product WHERE IMAGEPATH = ?'
        connection.query(sqlSelect, [product.imagePath], (err, result: any) => {
          if (err) {
            reject(err)
            return
          }
          if (result.length > 0) {
            resolve({
              id: result[0].id,
              description: result[0].description,
              altText: result[0].altText,
              imagePath: result[0].imagePath,
              storeCode: result[0].storeCode,
              name: result[0].name,
              category: result[0].category
            })
          } else {
            const sqlInsert =
              'INSERT INTO product (DESCRIPTION, ALTTEXT, IMAGEPATH, STORECODE, NAME, CATEGORY) VALUES (?, ?, ?, ?, ?, ?)'
            connection.query(
              sqlInsert,
              [
                product.description,
                product.altText,
                product.imagePath,
                product.storeCode,
                product.name,
                product.category
              ],
              function (err, result: any) {
                if (err) {
                  reject(err)
                  return
                }
                connection.release()
                resolve({
                  id: result.id,
                  description: product.description,
                  altText: product.altText,
                  imagePath: product.imagePath,
                  storeCode: product.storeCode,
                  name: product.name,
                  category: product.category
                })
              }
            )
          }
        })
      })
    })
  }
}
