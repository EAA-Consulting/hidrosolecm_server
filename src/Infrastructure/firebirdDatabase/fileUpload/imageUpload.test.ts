import fs from 'fs'
import firebird from 'node-firebird'
import path from 'path'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'
describe('Image Upload', () => {
  beforeEach(async () => {
    firebird.attach(FirebirdOptions, (error, db) => {
      if (error) {
        console.log(error)
        return
      }
      const sql = 'DELETE FROM PHOTOS WHERE NAME = ?'
      const params = ['firebirdlogo.png']
      db.query(sql, params, (error, result) => {
        if (error) {
          console.error(error)
        } else {
          console.log('Image deleted successfully')
        }
        db.detach()
      })
    })
  })
  test('should upload image', () => {
    const file = path.join(__dirname, '..', '..', '..', '..', 'firebirdlogo.png')
    const image = fs.readFileSync(file)
    const imageName = path.basename(file)
    firebird.attach(FirebirdOptions, (error, db) => {
      if (error) {
        console.error(error)
        return
      }

      // Execute an INSERT statement with a BLOB parameter
      const sql = 'INSERT INTO PHOTOS (PRODUCTID, NAME, PHOTO) VALUES (?, ?, ?)'
      const params = [1, imageName, image]
      db.query(sql, params, (error, result) => {
        if (error) {
          console.error(error)
        } else {
          console.log('Image uploaded successfully')
        }

        // Disconnect from the Firebird database
        const selectSql = 'SELECT * FROM PHOTOS WHERE NAME = ?'
        db.query(selectSql, [imageName], (error, result) => {
          if (error) {
            console.error(error)
          }
          expect(result[0].name).toBe(imageName)
          expect(result[0].photo).toEqual(image)
          db.detach()
        })
      })
    })
  })
})
