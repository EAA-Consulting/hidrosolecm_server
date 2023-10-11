import supertest from 'supertest'
import { MySqlHelper } from '../../Infrastructure/helpers/database/mysqlHelper'
import app from '../express/app'
describe('SignUp Routes', () => {
  beforeAll(() => {
    MySqlHelper.openConnection()
    const pool = MySqlHelper.pool

    pool.getConnection(function (err, connection) {
      if (err) {
        console.error(err)
      }
      const sqlInsert = 'DELETE FROM users WHERE EMAIL = ?'
      connection.query(sqlInsert, ['signuproute@teste.com.br'], function (err, result) {
        if (err) {
          console.error(err)
        }
      })
    })
  })
  afterAll(() => {
    MySqlHelper.closeConnection()
  })
  test('Should return an account on success', async () => {
    const response = await supertest(app)
      .post('/api/signup')
      .send({
        name: 'nodetest',
        email: 'signuproute@teste.com.br',
        password: '123456',
        passwordConfirmation: '123456'
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('admin')
  })
})
