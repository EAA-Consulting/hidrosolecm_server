import firebird from 'node-firebird'
import { type ILogErrorRepository } from '../../Domain/repositories/logError/LogErrorRepositoryInterface'
import { FirebirdOptions } from '../helpers/database/firebirdHelper'
export class LogRepository implements ILogErrorRepository {
  async log (stack: string, message: string): Promise<void> {
    await new Promise((resolve, reject) => {
      firebird.attach(FirebirdOptions, (err, db) => {
        if (err) {
          reject(new Error('Error on getting connection logRepository'))
          return
        }
        db.transaction(firebird.ISOLATION_READ_COMMITTED, (err, transaction) => {
          if (err) {
            reject(new Error('Error on getting connection logRepository'))
            transaction.rollback()
            db.detach()
          } else {
            const sql = 'INSERT INTO logs (logDate, stack, message) VALUES (?, ?, ?)'
            const params = [new Date().toUTCString(), stack, message]
            transaction.query(sql, params, (err, result) => {
              if (err) {
                db.detach()
                transaction.rollback()
                reject(new Error('Error to execute query to insert log'))
                return
              }
              transaction.commit()
              db.detach()
              resolve(null)
            })
          }
        })
      })
    })
  }
}
