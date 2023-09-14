import { type EmailValidator } from '../../../presentation/interfaces/emailValidator'

export class Signup {
  emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (name: string, email: string, password: string, passwordConfirmation: string): Promise<boolean> {
    if (!this.emailValidator.isValid(email)) {
      return false
    }

    return true
  }
}
