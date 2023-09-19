import { type AuthenticatedUser } from '../signup/authenticatedUser'

export interface SignInApplication {
  handle: (email: string, password: string) => Promise<AuthenticatedUser>
}
