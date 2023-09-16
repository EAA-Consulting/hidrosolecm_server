import { type Encrypter } from '../../../application/use-cases/interfaces/encrypter'
import { type AccountModel } from '../../model/AccountModel'
import { type AddAccountData } from '../interfaces/addAccount'

export class Account implements Account {
  constructor (private readonly encrypter: Encrypter) {

  }

  async add (account: AddAccountData): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(account.password)
    const accountData = {
      ...account,
      password: hashedPassword,
      id: '1'
    }

    return accountData
  }
}
