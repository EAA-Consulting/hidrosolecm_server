import firebird from 'node-firebird'
import { type AddAccountRepository } from '../../../Domain/repositories/account/addAccountRepository'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'
import { AddAccount } from './addAccount'
describe('Add Account Repository', () => {
  beforeAll(async () => {
    firebird.attach(FirebirdOptions, (err, db) => {
      if (err) {
        console.log(err)
        return
      }
      const sqlDelete = 'DELETE FROM users WHERE EMAIL = ?;'
      db.transaction(firebird.ISOLATION_SERIALIZABLE, (err, transaction) => {
        if (err) {
          console.log(err)
          return
        }
        transaction.execute(sqlDelete, ['addAccountTEsteRepo@teste.com.br'], (err: any, result: any) => {
          if (err) {
            transaction.rollback()
            console.log(err)
          }
          transaction.commit()
          db.detach()
        })
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
