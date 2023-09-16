import { type AccountModel } from '../../../Domain/model/AccountModel'
import { InvalidParamError } from '../../../presentation/errors'
import { type EmailValidator } from '../../../presentation/interfaces/emailValidator'
import { type SignUpApplication } from '../interfaces/signupInterface'

export class Signup implements SignUpApplication {
  emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (name: string, email: string, password: string, passwordConfirmation: string): Promise<AccountModel> {
    if (!this.emailValidator.isValid(email)) {
      throw new InvalidParamError('Email is not valid')
    }

    return {
      id: 1,
      name: 'any_name',
      email: 'any_email',
      password: 'any_password'
    }
  }
}
