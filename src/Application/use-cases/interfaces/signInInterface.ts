import { type AuthenticatedUser } from '../signup/value_objects/authenticatedUser'

export interface SignInApplication {
  handle: (email: string, password: string) => Promise<AuthenticatedUser>
}
