import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { S3ImageUploadRepository } from './s3ImageUploadRepository'
dotenv.config()
describe('S3 Image Upload Repository', () => {
  test('should upload image to s3', async () => {
    const s3ImageRepository = new S3ImageUploadRepository()
    const pathFile = path.join(__dirname, '..', '..', '..', 'firebirdlogo.png')
    const file = await fs.promises.readFile(pathFile)
    const fileName = path.basename(pathFile)

    const response = await s3ImageRepository.handle(fileName, file)
    expect(response.filePathName).toBe(fileName)
  })
})
