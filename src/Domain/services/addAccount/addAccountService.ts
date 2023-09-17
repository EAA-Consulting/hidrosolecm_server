import { type Encrypter } from '../../../Application/use-cases/interfaces/encrypter'
import { type AccountModel } from '../../model/AccountModel'
import { type AddAccountRepository } from '../../repositories/account/addAccountRepository'
import { type AddAccountData, type AddAccountServices } from '../interfaces/addAccountService'

export class AddAccount implements AddAccountServices {
  constructor (private readonly encrypter: Encrypter, private readonly addAccountRepository: AddAccountRepository) {
  }

  async add (account: AddAccountData): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(account.password)
    return await this.addAccountRepository.add({ ...account, password: hashedPassword })
  }
}
