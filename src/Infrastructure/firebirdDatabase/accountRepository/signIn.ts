import Firebird from 'node-firebird'
import { type AccountModel } from '../../../Domain/model/AccountModel'
import { type SignInRepository } from '../../../Domain/repositories/account/signInRepository'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'
export class SigIn implements SignInRepository {
  async handle (email: string): Promise<AccountModel> {
    return await new Promise((resolve, reject) => {
      Firebird.attach(FirebirdOptions, (err, db) => {
        if (err) {
          reject(new Error('Error to connect to database'))
          return
        }
        const sqlSelect = 'SELECT * FROM USERS WHERE EMAIL = ?'
        db.query(sqlSelect, [email], (err, result: any) => {
          if (err) {
            reject(new Error('Error to execute query'))
            return
          }

          if (result.length === 0) {
            reject(new Error('User not found'))
            return
          }
          resolve({
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password

          })
          db.detach()
        })
      })
    })
  }
}
