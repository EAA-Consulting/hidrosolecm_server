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
    const signinResponse = await supertest(app).post('/api/signin').send({
      email: 'teste@email.com',
      password: '123456'
    })
    const idToDelete: number = 0
    const deleteResponse =

    await supertest(app)
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .delete(`/api/product/${idToDelete}`).set('Authorization', `Bearer ${signinResponse.body.token}`).send()

    expect(deleteResponse.status).toBe(200)
  })
})
