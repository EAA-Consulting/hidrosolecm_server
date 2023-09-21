import Firebird from 'node-firebird'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'

describe('SignIn', () => {
  test('Ensure I get a user data after successfully sigIn', async () => {
    Firebird.attach(FirebirdOptions, (err, db) => {
      if (err) {
        return
      }
      const sqlInsert = 'INSERT INTO USERS (NAME, EMAIL, PASSWORD) VALUES (?, ?, ?)'
      db.query(sqlInsert, ['nodetest', 'teste@teste.com', 'any_password'], (err, result: any) => {
        if (err) {
          console.log(err)
        }
        const sqlSelect = 'SELECT * FROM USERS WHERE EMAIL = ?'
        db.query(sqlSelect, ['teste@teste.com'], (err, result: any) => {
          if (err) {
            console.log(err)
          }
          db.detach()
          expect(result[0]?.name).toBe('nodetest')
          expect(result[0]?.email).toBe('teste@teste.com')
          expect(result[0]?.password).toBe('any_password')
        })
      })
    })
  })
})
