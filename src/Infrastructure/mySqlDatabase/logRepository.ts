import { type ILogErrorRepository } from '../../Domain/repositories/logError/LogErrorRepositoryInterface'
import { MySqlHelper } from '../helpers/database/mysqlHelper'
export class LogRepository implements ILogErrorRepository {
  async log (stack: string, message: string): Promise<void> {
    await new Promise((resolve, reject) => {
      MySqlHelper.pool.getConnection((err, connection) => {
        if (err) {
          reject(new Error('Error on getting connection '))
          return
        }
        const sql = 'INSERT INTO logs (logDate, stack, message) VALUES (?, ?, ?)'
        const params = [new Date().toUTCString(), stack, message]
        connection.query(sql, params, (err, result) => {
          if (err) {
            connection.release()
            reject(new Error('Error to execute query to insert log'))
            return
          }
          connection.release()
          resolve(null)
        })
      })
    })
  }
}
