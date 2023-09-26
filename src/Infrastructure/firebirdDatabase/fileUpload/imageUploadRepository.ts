import firebird from 'node-firebird'
import { type FileUploadRepository } from '../../../Domain/repositories/fileUpload/fileUploadRepository'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'
export class ImageUploadRepository implements FileUploadRepository {
  async handle (fileName: string, data: Buffer): Promise<void> {
    await new Promise((resolve, reject) => {
      const imageName = fileName
      firebird.attach(FirebirdOptions, (error, db) => {
        if (error) {
          reject(error)
          return
        }

        // Execute an INSERT statement with a BLOB parameter
        const sql = 'INSERT INTO PHOTOS (PRODUCTID, NAME, PHOTO) VALUES (?, ?, ?)'
        const params = [1, imageName, data]
        db.query(sql, params, (error, result) => {
          if (error) {
            db.detach()
            reject(error)
            return
          }
          db.detach()
        })
      })
      resolve(null)
    })
  }

  async get (imageName: string): Promise<Buffer> {
    return await new Promise((resolve, reject) => {
      firebird.attach(FirebirdOptions, (error, db) => {
        if (error) {
          reject(error)
          return
        }
        console.log(imageName)
        // Execute an INSERT statement with a BLOB parameter
        const selectSql = 'SELECT * FROM PHOTOS WHERE NAME = ?'
        db.query(selectSql, [imageName], (error, result) => {
          if (error) {
            reject(error)
            db.detach()
            return
          }
          if (result.length === 0) {
            console.log('Image not found', imageName)
            reject(new Error('Image not found'))
            db.detach()
            return
          }

          resolve(result[0].photo)
        })
      })
    })
  }
}
