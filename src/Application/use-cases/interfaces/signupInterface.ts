import { type AccountModel } from '../../../Domain/model/AccountModel'

export interface SignUpApplication {
  handle: (name: string, email: string, password: string) => Promise<AccountModel>
}
