import supertest from 'supertest'
import app from '../express/app'
describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await supertest(app)
      .post('/api/signup')
      .send({
        name: 'nodetest',
        email: 'nodetest@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
