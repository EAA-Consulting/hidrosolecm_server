import { type AddAccountRepository } from '../../../Domain/repositories/account/addAccountRepository'
import { MySqlHelper } from '../../helpers/database/mysqlHelper'
import { AddAccount } from './addAccount'
describe('Add Account Repository', () => {
  beforeAll(async () => {
    MySqlHelper.openConnection()
    const mysqlPool = MySqlHelper.pool
    const sqlDelete = 'DELETE FROM users WHERE EMAIL = ?;'
    mysqlPool.getConnection((err, mysqlConnection) => {
      if (err) {
        mysqlConnection.release()
        console.log(err)
        return
      }
      mysqlConnection.query(sqlDelete, ['addAccountTEsteRepo@teste.com.br'], (error, result: any, field: any) => {
        if (error) {
          mysqlConnection.release()

          console.log(error)
        }
        mysqlConnection.release()
      })
    })
  })
  const makeSut = (): AddAccountRepository => {
    return new AddAccount()
  }
  test('should return an account on success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'nodetest',
      email: 'addAccountTEsteRepo@teste.com.br',
      password: 'any_password'
    })
    expect(account).toBeTruthy()
    expect(account?.id).toBeTruthy()
    expect(account?.name).toBe('nodetest')
    expect(account?.email).toBe('addAccountTEsteRepo@teste.com.br')
    expect(account?.password).toBe('any_password')
  })
})
