import { type SignInService } from '../../../Domain/services/interfaces/signInService'
import { type SignInApplication } from '../interfaces/signInInterface'
import { type AuthenticatedUser } from './value_objects/authenticatedUser'

export class SignIn implements SignInApplication {
  constructor (private readonly signInService: SignInService) {}

  async handle (email: string, password: string): Promise<AuthenticatedUser> {
    try {
      return await this.signInService.handle(email, password)
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`Error ${error}`)
      throw new Error(error)
    }
  }
}
