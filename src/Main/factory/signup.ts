import { Signup as SignupApplication } from '../../Application/use-cases/signup/signup'
import { AddAccount } from '../../Domain/services/account/addAccountService'
import { EncrypterAdapter } from '../../Infrastructure/helpers/encrypt/encrypterAdapter'
import { AddAccount as AddAccountRepository } from '../../Infrastructure/mySqlDatabase/accountRepository/addAccount'
import { LogRepository } from '../../Infrastructure/mySqlDatabase/logRepository'
import { SignUpController } from '../../Presentation/controllers/signupController/signupController'
import { type Controller } from '../../Presentation/interfaces/controller'
import { LogDecoratorController } from '../decorators/logDecoratorController'
import { makeValidationComposite } from './validation'

export const makeSignupController = (): Controller => {
  const salt = 12
  const encrypterAdapter = new EncrypterAdapter(salt)
  const addAccountRepository = new AddAccountRepository()
  const addAccountService = new AddAccount(encrypterAdapter, addAccountRepository)
  const signupApplication = new SignupApplication(addAccountService)

  const controller = new SignUpController(signupApplication, makeValidationComposite())
  const logRepository = new LogRepository()
  return new LogDecoratorController(controller, logRepository)
}
