import supertest from 'supertest'
import { MySqlHelper } from '../../Infrastructure/helpers/database/mysqlHelper'
import app from '../express/app'
describe('Delete route', () => {
  beforeAll(() => {
    MySqlHelper.openConnection()
  })
  afterAll(() => {
    MySqlHelper.closeConnection()
  })
  test('Should return 200 on delete', async () => {
    const idToDelete: number = 0
    const deleteResponse =
    await supertest(app)
      .delete(`/api/product/${idToDelete}`).send()

    expect(deleteResponse.status).toBe(200)
  })
})