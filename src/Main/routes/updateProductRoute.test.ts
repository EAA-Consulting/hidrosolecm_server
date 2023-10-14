import supertest from 'supertest'
import { MySqlHelper } from '../../Infrastructure/helpers/database/mysqlHelper'
import app from '../express/app'
describe('Update product Route', () => {
  beforeAll(() => {
    MySqlHelper.openConnection()
  })

  test('Ensure I can update a product', async () => {
    const signinResponse = await supertest(app).post('/api/signin').send({
      email: 'teste@email.com',
      password: '123456'
    })
    expect(signinResponse.statusCode).toBe(200)
    const response = await supertest(app).put('/api/product')
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .set('Authorization', `Bearer ${signinResponse.body.token}`)
      .send(
        {
          productId: 390,
          name: 'C-23',
          description: 'Torneira de Jardim Longa 3/4 Cromada',
          category: 'Jardim',
          imagePath: '1130_34_torneira_jardim_longa_cr_c23.jpg',
          altText: 'Torneira de Jardim Longa 3/4 Cromada'
        }

      )

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      id: 390,
      name: 'C-23',
      description: 'Torneira de Jardim Longa 3/4 Cromada',
      category: 'Jardim',
      imagePath: '1130_34_torneira_jardim_longa_cr_c23.jpg',
      altText: 'Torneira de Jardim Longa 3/4 Cromada'
    })
  })
})
