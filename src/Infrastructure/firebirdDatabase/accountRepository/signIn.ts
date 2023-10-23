/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Firebird from 'node-firebird'
import { type AccountModel } from '../../../Domain/model/AccountModel'
import { type SignInRepository } from '../../../Domain/repositories/account/signInRepository'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'
export class SigIn implements SignInRepository {
  async handle (email: string): Promise<AccountModel> {
    return await new Promise((resolve, reject) => {
      Firebird.attach(FirebirdOptions, (err, db) => {
        if (err) {
          reject(new Error(`Error to connect to database, ${err}`))
          return
        }
        const sqlSelect = 'SELECT * FROM USERS WHERE EMAIL = ?'
        db.transaction(Firebird.ISOLATION_READ_COMMITTED, (err: any, transaction) => {
          if (err) {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            reject(new Error(`Select from users in signin, ${err}`))
            transaction.rollback()
            db.detach()
            return
          }
          transaction.query(sqlSelect, [email], (err, result: any) => {
            if (err) {
              db.detach()
              transaction.rollback()
              reject(new Error(`Error to execute query, ${err}`))
            } else {
              transaction.commit()
              if (result.length === 0) {
                db.detach()
                reject(new Error('User not found'))
                return
              }
              db.detach()
              resolve({
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,
                admin: false

              })
            }
          })
        })
      })
    })
  }
}
