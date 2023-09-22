import Firebird from 'node-firebird'
import supertest from 'supertest'
import { FirebirdOptions } from '../../Infrastructure/helpers/database/firebirdHelper'
import app from '../express/app'

describe('SignUp Routes', () => {
  afterAll(async () => {
    Firebird.attach(FirebirdOptions, (err, db) => {
      if (err) {
        console.log(err)
        return
      }
      const sqlInsert = 'DELETE FROM USERS WHERE EMAIL = ?'
      db.query(sqlInsert, ['signuproute@teste.com.br'], (err, result: any) => {
        if (err) {
          db.detach()
          console.log(err)
          return
        }
        db.detach()
      })
    })
  })
  test('Should return an account on success', async () => {
    await supertest(app)
      .post('/api/signup')
      .send({
        name: 'nodetest',
        email: 'signuproute@teste.com.br',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
