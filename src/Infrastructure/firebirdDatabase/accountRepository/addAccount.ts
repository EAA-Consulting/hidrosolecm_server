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
          reject(new Error('Error on creating connection')); return
        }
        const sqlInsert = 'INSERT INTO users (NAME, EMAIL, PASSWORD) VALUES (?,?,?) returning ID, NAME, EMAIL, PASSWORD'
        const { name, email, password } = account

        db.transaction(firebird.ISOLATION_READ_COMMITTED, (err, transaction) => {
          if (err) {
            reject(new Error('Error on creating connection'))
            transaction.rollback()
          } else {
            db.query(sqlInsert, [name, email, password], (err, result: any) => {
              console.log(result)
              if (err) {
                transaction.rollback()
                db.detach()
                if (err.toString().includes('Violation')) {
                  reject(new Error('User already exists'))
                } else {
                  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                  reject(new Error('Error on insert new user' + ' ' + err))
                }
              } else {
                transaction.commit()
                db.detach()
                resolve({
                  id: result.id,
                  name: result.name,
                  email: result.email,
                  password: result.password,
                  admin: false
                })
              }
            })
          }
        })
      })
    })
  }
}
