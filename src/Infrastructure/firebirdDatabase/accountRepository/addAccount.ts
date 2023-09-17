import firebird from 'node-firebird'
import { type AccountModel } from '../../../Domain/model/AccountModel'
import { type AddAccountRepository } from '../../../Domain/repositories/account/addAccountRepository'
import { type AddAccountData } from '../../../Domain/services/interfaces/addAccountService'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'
export class AddAccount implements AddAccountRepository {
  async add (account: AddAccountData): Promise<AccountModel> {
    return await new Promise((resolve, reject) => {
      firebird.attach(FirebirdOptions, (err, db) => {
        if (err) {
          db.detach()
          reject(new Error('Error on insert new user'))
        }
        const sqlInsert = 'INSERT INTO USERS (NAME, EMAIL, PASSWORD) VALUES (?,?,?) returning ID, NAME, EMAIL, PASSWORD'
        const { name, email, password } = account

        db.query(sqlInsert, [name, email, password], (err, result: any) => {
          if (err) {
            reject(new Error('Error on insert new user'))
          }
          if (db) db.detach()
          resolve({
            id: result.id,
            name: result.name,
            email: result.email,
            password: result.password

          })
        })
      })
    })
  }
}
