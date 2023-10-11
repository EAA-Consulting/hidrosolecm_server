import { type SignInService } from '../../../Domain/services/interfaces/signInService'
import { InvalidParamError } from '../../../Presentation/errors'
import { type EmailValidator } from '../../../Presentation/interfaces/emailValidator'
import { type SignInApplication } from '../interfaces/signInInterface'
import { type AuthenticatedUser } from './value_objects/authenticatedUser'

export class SignIn implements SignInApplication {
  constructor (private readonly emailValidator: EmailValidator, private readonly signInService: SignInService) {}

  async handle (email: string, password: string): Promise<AuthenticatedUser> {
    if (!this.emailValidator.isValid(email)) {
      throw new InvalidParamError('Email is not valid')
    }
    try {
      return await this.signInService.handle(email, password)
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`Error ${error}`)
      throw new Error(error)
    }
  }
}
