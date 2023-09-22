import { SignIn as SignInApplication } from '../../Application/use-cases/signin/signIn'
import { SignIn as SignInService } from '../../Domain/services/signIn/SignInService'
import { SigIn as SignInRepository } from '../../Infrastructure/firebirdDatabase/accountRepository/signIn'
import { TokenJsonWeToken } from '../../Infrastructure/helpers/database/JsonWebToken'
import { EncrypterAdapter } from '../../Infrastructure/helpers/encrypt/encrypterAdapter'
import { SignInController } from '../../Presentation/controllers/signinController/signInController'
import { type Controller } from '../../Presentation/interfaces/controller'
import { EmailValidatorAdapter } from '../../Presentation/utils/EmailValidatorAdapter'
export const makeSignInController = (): Controller => {
  const salt = 12
  const encrypterAdapter = new EncrypterAdapter(salt)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const signInRepository = new SignInRepository()
  const tokenGenerator = new TokenJsonWeToken()
  const signInService = new SignInService(encrypterAdapter, tokenGenerator, signInRepository)
  const signInApplication = new SignInApplication(emailValidatorAdapter, signInService)
  return new SignInController(signInApplication)
}