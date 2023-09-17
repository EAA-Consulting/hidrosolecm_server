import { Signup as SignupApplication } from '../../Application/use-cases/signup/signup'
import { AddAccount } from '../../Domain/services/addAccount/addAccountService'
import { AddAccount as AddAccountRepository } from '../../Infrastructure/firebirdDatabase/accountRepository/addAccount'
import { EncrypterAdapter } from '../../Infrastructure/helpers/encrypt/encrypterAdapter'
import { SignUpController } from '../../Presentation/controllers/signupController/signupController'
import { type Controller } from '../../Presentation/interfaces/controller'
import { EmailValidatorAdapter } from '../../Presentation/utils/EmailValidatorAdapter'

export const makeSignupController = (): Controller => {
  const salt = 12
  const encrypterAdapter = new EncrypterAdapter(salt)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const addAccountRepository = new AddAccountRepository()
  const addAccountService = new AddAccount(encrypterAdapter, addAccountRepository)
  const signupApplication = new SignupApplication(emailValidatorAdapter, addAccountService)

  return new SignUpController(signupApplication)
}
