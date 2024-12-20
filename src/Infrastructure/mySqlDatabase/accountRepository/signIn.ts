/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type AccountModel } from '../../../Domain/model/AccountModel'
import { type SignInRepository } from '../../../Domain/repositories/account/signInRepository'
import { MySqlHelper } from '../../helpers/database/mysqlHelper'
export class SigIn implements SignInRepository {
  async handle (email: string): Promise<AccountModel> {
    return await new Promise((resolve, reject) => {
      const pool = MySqlHelper.pool

      pool.getConnection(function (err, connection) {
        if (err) {
          console.log(`error =${err}`)
          reject(new Error('Error on getting connection'))
          return
        }
        const sqlSelect = 'SELECT id, name, email, password, admin FROM users WHERE EMAIL = ?'
        connection.query(sqlSelect, [email], function (err, result: any) {
          if (err) {
            console.log(`error =${err}`)
            reject(new Error('Error to execute query'))
            return
          }

          if (result.length === 0) {
            reject(new Error('User not found'))
            return
          }
          const accountModel: AccountModel = {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password,
            admin: result[0].admin

          }
          resolve(accountModel)

          connection.release()
        })
      })
    })
  }
}
