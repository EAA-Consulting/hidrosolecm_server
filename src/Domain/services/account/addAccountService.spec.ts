import { type Encrypter } from '../../../Application/use-cases/interfaces/encrypter'
import { type AccountModel } from '../../model/AccountModel'
import { type AddAccountRepository } from '../../repositories/account/addAccountRepository'
import { type AddAccountData } from '../interfaces/addAccountService'
import { AddAccount } from './addAccountService'
describe('Add Account UseCase', () => {
  interface SutTypes {
    sut: AddAccount
    encrypterStub: Encrypter

  }
  const makeEncrypter = (): Encrypter => {
    class EncrypterStub implements Encrypter {
      async validate (password: string, encryptedPassword: string): Promise<boolean> {
        return await new Promise(resolve => { resolve(true) })
      }

      async encrypt (value: string): Promise<string> {
        return await new Promise(resolve => { resolve('hashed_password') })
      }
    }
    return new EncrypterStub()
  }
  const makeAddAccountRepository = (): AddAccountRepository => {
    class AddAccountRepositoryStub implements AddAccountRepository {
      async add (account: AddAccountData): Promise<AccountModel> {
        return await new Promise(resolve => {
          resolve({
            id: 1,
            name: 'valid_name',
            email: 'valid_email',
            password: 'hashed_password',
            admin: false

          })
        })
      }
    }
    return new AddAccountRepositoryStub()
  }
  const makeSut = (): SutTypes => {
    const encrypterStub = makeEncrypter()
    const addAccountRepository = makeAddAccountRepository()
    const sut = new AddAccount(encrypterStub, addAccountRepository)

    return {
      sut,
      encrypterStub
    }
  }

  test('Check if add account returns a account with password encrypted', async () => {
    const { sut } = makeSut()
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    const response = await sut.add(accountData)
    expect(response.password).toEqual('hashed_password')
  })

  test('Ensure Encrypter is called with the correct password', async () => {
    const { sut, encrypterStub } = makeSut()
    const hashSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }

    await sut.add(accountData)
    expect(hashSpy).toHaveBeenCalledWith('valid_password')
  })
})
