/* eslint-disable @typescript-eslint/restrict-template-expressions */
import firebird from 'node-firebird'
import { type AccountModel } from '../../../Domain/model/AccountModel'
import { type SignInRepository } from '../../../Domain/repositories/account/signInRepository'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'
export class SigIn implements SignInRepository {
  async handle (email: string): Promise<AccountModel> {
    return await new Promise((resolve, reject) => {
      firebird.attach(FirebirdOptions, (err, db) => {
        if (err) {
          reject(new Error('Error on getting connection'))
          return
        }
        const sqlSelect = 'SELECT ID, NAME, EMAIL, PASSWORD, ISADMIN FROM users WHERE EMAIL = ?'
        db.transaction(firebird.ISOLATION_READ_COMMITTED, (err, transaction) => {
          if (err) {
            reject(new Error('Error on getting connection'))
            db.detach()
            return
          }
          transaction.query(sqlSelect, [email], function (err, result: any) {
            if (err) {
              reject(new Error(`Error to execute query ${err}`))
              transaction.rollback()
              db.detach()
              return
            }
            if (result.length === 0) {
              reject(new Error('User not found'))
              transaction.rollback()
              db.detach()
              return
            }
            transaction.commit()
            db.detach()
            const accountModel: AccountModel = {
              id: result[0].id,
              name: result[0].name,
              email: result[0].email,
              password: result[0].password,
              admin: result[0].isAdmin

            }
            resolve(accountModel)
          })
        })
      })
    })
  }
}
