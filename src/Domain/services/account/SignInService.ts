import { type Encrypter } from '../../../Application/use-cases/interfaces/encrypter'
import { type AuthenticatedUser } from '../../../Application/use-cases/signin/value_objects/authenticatedUser'
import { type TokenGenerator } from '../../../Presentation/interfaces/token'
import { type SignInRepository } from '../../repositories/account/signInRepository'
import { type SignInService } from '../interfaces/signInService'

export class SignIn implements SignInService {
  constructor (private readonly encrypterAdapter: Encrypter, private readonly tokenGenerator: TokenGenerator, private readonly signInRepository: SignInRepository) {}
  async handle (email: string, password: string): Promise<AuthenticatedUser> {
    const account = await this.signInRepository.handle(email)

    const isValid = await this.encrypterAdapter.validate(password, account.password)
    if (!isValid) {
      throw new Error('Invalid password')
    }
    const token = await this.tokenGenerator.generate(account.email)

    return {
      token
    }
  }
}
