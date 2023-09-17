import Firebird from 'node-firebird'
import { type AddAccountRepository } from '../../../Domain/repositories/account/addAccountRepository'
import { FirebirdOptions } from '../../helpers/database/firebirdHelper'
import { AddAccount } from './addAccount'
describe('Add Account Repository', () => {
  const makeSut = (): AddAccountRepository => {
    return new AddAccount()
  }
  test('should return an account on success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'nodetest',
      email: 'teste@teste.com.br',
      password: 'any_password'
    })
    expect(account).toBeTruthy()
    expect(account?.id).toBeTruthy()
    expect(account?.name).toBe('nodetest')
    expect(account?.email).toBe('teste@teste.com.br')
    expect(account?.password).toBe('any_password')
    Firebird.attach(FirebirdOptions, (err, db) => {
      if (err) {
        return
      }
      const sqlDelete = 'DELETE FROM USERS WHERE NAME = ?'
      db.query(sqlDelete, ['nodetest'], (err, result: any) => {
        if (err) {
          console.log(err)
        }
      })
    })
  })
})
