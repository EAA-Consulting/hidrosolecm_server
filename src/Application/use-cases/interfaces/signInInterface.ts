import { type AccountModel } from '../../../Domain/model/AccountModel'

export interface SignInApplication {
  handle: (email: string, password: string) => Promise<AccountModel>
}
