import Firebird from 'node-firebird'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'

describe('SignIn', () => {
  test('Ensure I get a user data after successfully sigIn', () => {
    Firebird.attach(FirebirdOptions, (err, db) => {
      if (err) {
        console.log(err)
        return
      }
      const sqlInsert = 'INSERT INTO USERS (NAME, EMAIL, PASSWORD) VALUES (?, ?, ?)'
      db.query(sqlInsert, ['nodetest', 'anotherone@teste.com.br', 'any_password'], (err, result: any) => {
        if (err) {
          console.log(err)
          return
        }
        const sqlSelect = 'SELECT * FROM USERS WHERE EMAIL = ?'
        db.query(sqlSelect, ['anotherone@teste.com.br'], (err, result: any) => {
          if (err) {
            db.detach()
            console.log(err)
            return
          }

          expect(result[0]?.name).toBe('nodetest')
          expect(result[0]?.email).toBe('anotherone@teste.com.br')
          expect(result[0]?.password).toBe('any_password')
        })
        db.query('DELETE FROM USERS WHERE EMAIL = ?', ['anotherone@teste.com.br'], (err, result: any) => {
          if (err) {
            console.log(err)
            db.detach()
            return
          }
          db.detach()
        })
      })
    })
  })
})
