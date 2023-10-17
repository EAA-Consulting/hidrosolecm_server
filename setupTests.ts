import { MySqlHelper } from './src/Infrastructure/helpers/database/mysqlHelper'

beforeAll(async () => {
  await MySqlHelper.openConnection()
})
