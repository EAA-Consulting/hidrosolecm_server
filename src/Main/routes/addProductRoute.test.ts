import request from 'supertest'
import { MySqlHelper } from '../../Infrastructure/helpers/database/mysqlHelper'
import app from '../express/app'
describe('Add Product Route', () => {
  beforeAll(() => {
    MySqlHelper.openConnection()
  })
  test('Ensure I can create a product without name', async () => {
    const signinResponse = await request(app).post('/api/signin').send({
      email: 'teste@email.com',
      password: '123456'
    })
    expect(signinResponse.status).toBe(200)
    const token = signinResponse.body.token as string
    const response = await request(app).post('/api/product')
      .set('Authorization', `Bearer ${token}`)
      .send({
        description: 'any nullnew',
        altText: 'any_nullnullnew',
        imagePath: 'any_nullnullnew',
        storeCode: 'any',
        category: 'jardimnullnew'
      })

    expect(response.status).toBe(200)
    expect(response.body.name).toBeFalsy()
  })
})
