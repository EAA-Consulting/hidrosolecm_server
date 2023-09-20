import { type AuthenticatedUser } from '../signin/value_objects/authenticatedUser'

export interface SignInApplication {
  handle: (email: string, password: string) => Promise<AuthenticatedUser>
}
