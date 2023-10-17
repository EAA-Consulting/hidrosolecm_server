import { Signup as SignupApplication } from '../../Application/use-cases/signup/signup'
import { AddAccount } from '../../Domain/services/account/addAccountService'
import { EncrypterAdapter } from '../../Infrastructure/helpers/encrypt/encrypterAdapter'
import { AddAccount as AddAccountRepository } from '../../Infrastructure/mySqlDatabase/accountRepository/addAccount'
import { LogRepository } from '../../Infrastructure/mySqlDatabase/logRepository'
import { SignUpController } from '../../Presentation/controllers/signupController/signupController'
import { type Controller } from '../../Presentation/interfaces/controller'
import { EmailValidatorAdapter } from '../../Presentation/utils/EmailValidatorAdapter'
import { LogDecoratorController } from '../decorators/logDecoratorController'

export const makeSignupController = (): Controller => {
  const salt = 12
  const encrypterAdapter = new EncrypterAdapter(salt)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const addAccountRepository = new AddAccountRepository()
  const addAccountService = new AddAccount(encrypterAdapter, addAccountRepository)
  const signupApplication = new SignupApplication(emailValidatorAdapter, addAccountService)

  const controller = new SignUpController(signupApplication)
  const logRepository = new LogRepository()
  return new LogDecoratorController(controller, logRepository)
}
