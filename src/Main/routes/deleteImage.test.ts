import supertest from 'supertest'
import app from '../express/app'

describe('Delete Image Route', () => {
  test('Ensure I can delete an image by name', async () => {
    const fileName = 'firebirdlogo.png'
    const response = await supertest(app).delete(`/api/image/${fileName}`).send()

    expect(response.status).toBe(200)
    expect(response.body).toBe(true)
  })
})
