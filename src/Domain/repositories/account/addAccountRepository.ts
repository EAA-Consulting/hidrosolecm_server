import { type AccountModel } from '../../model/AccountModel'
import { type AddAccountData } from '../../services/interfaces/addAccount'

export interface AddAccountRepository {
  add: (account: AddAccountData) => Promise<AccountModel>
}
