import { type AccountModel } from '../../../Domain/model/AccountModel'
import { type AddAccountServices } from '../../../Domain/services/interfaces/addAccount'
import { InvalidParamError } from '../../../Presentation/errors'
import { type EmailValidator } from '../../../Presentation/interfaces/emailValidator'
import { type SignUpApplication } from '../interfaces/signupInterface'
export class Signup implements SignUpApplication {
  constructor (private readonly emailValidator: EmailValidator, private readonly addAccount: AddAccountServices) {
  }

  async handle (name: string, email: string, password: string): Promise<AccountModel> {
    if (!this.emailValidator.isValid(email)) {
      throw new InvalidParamError('Email is not valid')
    }

    return await this.addAccount.add({
      name,
      email,
      password
    })
  }
}
