import Firebird from 'node-firebird'
import supertest from 'supertest'
import { FirebirdOptions } from '../../Infrastructure/helpers/database/firebirdHelper'
import app from '../express/app'

describe('SignIn Routes', () => {
  test('Should return 200 on signin', async () => {
    await supertest(app)
      .post('/api/signup')
      .send({
        name: 'testesignin',
        email: 'testesignin@teste.com.br',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
    const httpResponse = await supertest(app)
      .get('/api/signIn')
      .send({
        email: 'testesignin@teste.com.br',
        password: '123456'
      })
    expect(httpResponse.status).toBe(200)
    expect(httpResponse.body.token).toBeTruthy()

    Firebird.attach(FirebirdOptions, (err, db) => {
      if (err) {
        console.log(err)
        return
      }
      const sqlInsert = 'DELETE FROM USERS WHERE EMAIL = ?'
      db.query(sqlInsert, ['testesignin@teste.com.br'], (err, result: any) => {
        if (err) {
          db.detach()
          console.log(err)
          return
        }
        db.detach()
      })
    })
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
