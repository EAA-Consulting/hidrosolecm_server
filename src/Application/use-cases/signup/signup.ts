import { type AccountModel } from '../../../Domain/model/AccountModel'
import { type AddAccountServices } from '../../../Domain/services/interfaces/addAccountService'
import { type SignUpApplication } from '../interfaces/signupInterface'
export class Signup implements SignUpApplication {
  constructor (private readonly addAccount: AddAccountServices) {
  }

  async handle (name: string, email: string, password: string): Promise<AccountModel> {
    return await this.addAccount.add({
      name,
      email,
      password
    })
  }
}
