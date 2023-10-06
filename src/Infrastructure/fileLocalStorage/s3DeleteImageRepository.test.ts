import dotenv from 'dotenv'
import { S3DeleteImageRepository } from './s3DeleteImageRepository'
dotenv.config()
describe('S3 Image Delete Repository', () => {
  test('Ensulre I delete image from s3', async () => {
    const s3ImageRepository = new S3DeleteImageRepository()
    const fileName = 'firebirdlogo.png'

    const response = await s3ImageRepository.handle(fileName)
    expect(response).toBe(true)
  })
})
