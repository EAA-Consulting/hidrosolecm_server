import { type AuthenticatedUser } from '../../../Application/use-cases/signin/value_objects/authenticatedUser'

export interface SignInService {
  handle: (email: string, password: string) => Promise<AuthenticatedUser>
}
