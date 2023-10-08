import supertest from 'supertest'
import { MySqlHelper } from '../../Infrastructure/helpers/database/mysqlHelper'
import app from '../express/app'

describe('Delete Image Route', () => {
  beforeAll(() => {
    MySqlHelper.openConnection()
  })
  afterAll(() => {
    const pool = MySqlHelper.pool
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log(err)
        return
      }
      connection.query('DELETE FROM users WHERE EMAIL = ?', ['testesignin@teste.com.br'], (err, result: any) => {
        if (err) {
          console.log(err)
        }
      })
    })
  })
  test('Ensure I can delete an image by name', async () => {
    const responseSignin = await supertest(app)
      .post('/api/signup')
      .send({
        name: 'testesignin',
        email: 'teste@email.com',
        password: '123456',
        passwordConfirmation: '123456'
      })

    expect(responseSignin.status).toBe(200)
    const signinResponse = await supertest(app).post('/api/signin').send({
      email: 'teste@email.com',
      password: '123456'
    })
    const fileName = 'firebirdlogo.png'
    const response = await supertest(app).delete(`/api/image/${fileName}`)
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .set('Authorization', `Bearer ${signinResponse.body.token}`)
      .send()

    expect(response.status).toBe(200)
    expect(response.body).toBe(true)
  })
})
