import { type ProductUpdateDTO } from '../../../Domain/DTOs/ProductDTO'
import { type ProductModel } from '../../../Domain/model/ProductModel'
import { type IUpdateProductRepository } from '../../../Domain/repositories/product/updateProductRepository'
import { MySqlHelper } from '../../helpers/database/mysqlHelper'

export class UpdateProductRepository implements IUpdateProductRepository {
  async handle (product: ProductUpdateDTO): Promise<ProductModel> {
    return await new Promise((resolve, reject) => {
      MySqlHelper.pool.getConnection((err, connection) => {
        if (err) {
          reject(new Error('Error on getting connection'))
        }
        const sqlUpdate = 'UPDATE products SET storeCode = ?, description = ?, altText = ?, imagePath = ?, name = ?, category = ? WHERE id = ?'
        connection.query(sqlUpdate, [product.storeCode, product.description, product.altText, product.imagePath, product.name, product.category, product.productId], (err, result: any) => {
          if (err) {
            connection.release()
            reject(new Error('Error to execute query'))
          }
          connection.release()
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
  }
}
