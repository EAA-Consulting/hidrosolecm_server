import supertest from 'supertest'
import { MySqlHelper } from '../../Infrastructure/helpers/database/mysqlHelper'
import app from '../express/app'

describe('SignIn Routes', () => {
  beforeAll(() => {
    MySqlHelper.openConnection()
  })
  afterAll(() => {
    MySqlHelper.pool.getConnection(function (err, connection) {
      if (err) {
        console.log(err)
        return
      }
      connection.query('DELETE FROM users WHERE EMAIL = ?', ['testesignin@teste.com.br'], (err, result: any) => {
        if (err) {
          console.log(err)
          connection.release()
          return
        }
        connection.release()
      })
    })

    MySqlHelper.pool.end()
  })
  test('Should return 200 on signin', async () => {
    const responseSignin = await supertest(app)
      .post('/api/signup')
      .send({
        name: 'testesignin',
        email: 'testesignin@teste.com.br',
        password: '123456',
        passwordConfirmation: '123456'
      })
    expect(responseSignin.status).toBe(200)

    const httpResponse = await supertest(app)
      .get('/api/signIn')
      .send({
        email: 'testesignin@teste.com.br',
        password: '123456'
      })

    expect(httpResponse.status).toBe(200)
    expect(httpResponse.body.token).toBeTruthy()
  })

  test('Should return invalid email or password', async () => {
    const httpResponse = await supertest(app)
      .get('/api/signIn')
      .send({
        email: 'novalid@teste.com.br',
        password: '123456'
      })

    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toEqual({ name: 'InvalidParamError' })
  })
})
