import { type AccountModel } from '../../../../Domain/model/AccountModel'

export interface AuthenticatedUser {
  token: string
  user: AccountModel
}
