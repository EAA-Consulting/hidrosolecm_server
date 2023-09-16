import { type AccountModel } from '../../model/AccountModel'

export interface AddAccountData {
  name: string
  email: string
  password: string
}
export interface AddAccount {
  add: (account: AddAccountData) => Promise<AccountModel>
}
