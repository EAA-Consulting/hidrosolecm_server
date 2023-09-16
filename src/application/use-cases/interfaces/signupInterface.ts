import { type AccountModel } from '../../../Domain/model/AccountModel'

export interface SignUpApplication {
  handle: (name: string, email: string, password: string, passwordConfirmation: string) => Promise<AccountModel>
}
