import { MySqlHelper } from './src/Infrastructure/helpers/database/mysqlHelper'

beforeAll(async () => {
  await MySqlHelper.openConnection()
})
afterAll(async () => {
  await MySqlHelper.closeConnection()
})
