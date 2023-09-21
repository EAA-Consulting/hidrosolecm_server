import { type AccountModel } from '../../model/AccountModel'

export interface SignInRepository {
  handle: (email: string) => Promise<AccountModel>
}
