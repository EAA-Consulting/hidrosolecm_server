import { type AccountModel } from '../../../Domain/model/AccountModel'
import { type AddAccountRepository } from '../../../Domain/repositories/account/addAccountRepository'
import { type AddAccountData } from '../../../Domain/services/interfaces/addAccountService'
import { MySqlHelper } from '../../helpers/database/mysqlHelper'
export class AddAccount implements AddAccountRepository {
  async add (account: AddAccountData): Promise<AccountModel> {
    return await new Promise((resolve, reject) => {
      const mysqlPool = MySqlHelper.pool
      const { name, email, password } = account
      const sqlInsert = 'INSERT INTO users (NAME, EMAIL, PASSWORD) VALUES (?, ?, ?);'
      mysqlPool.getConnection((err, mysqlConnection) => {
        if (err) {
          reject(new Error('Error on creating connection')); return
        }
        mysqlConnection.query(sqlInsert, [name, email, password], (error, result: any) => {
          if (error) {
            mysqlConnection.release()
            reject(new Error('Error on insert new user')); return
          }
          mysqlConnection.query('SELECT name, email, password, admin FROM users WHERE ID = ?', [result.insertId], (error, selectResult: any, fields: any) => {
            if (error) {
              mysqlConnection.release()
              reject(new Error('Error on insert new user')); return
            }

            mysqlConnection.release()

            if (selectResult) {
              resolve({
                id: result.insertId,
                name: selectResult[0].name,
                email: selectResult[0].email,
                password: selectResult[0].password,
                admin: selectResult[0].admin

              })
            }
          })
        })
      })
    })
  }
}
