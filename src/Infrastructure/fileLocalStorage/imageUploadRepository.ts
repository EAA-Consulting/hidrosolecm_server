import fs from 'fs'
import path from 'path'
import util from 'util'
import { type FileUploadRepository } from '../../Domain/repositories/fileUpload/fileUploadRepository'
export class ImageUploadRepository implements FileUploadRepository {
  async handle (fileName: string, data: Buffer): Promise<void> {
    const writeFile = util.promisify(fs.writeFile)
    const pathFile = path.join(__dirname, '..', '..', 'images', fileName)
    await writeFile(pathFile, data)
  }

  async get (imageName: string): Promise<Buffer> {
    const readFile = util.promisify(fs.readFile)
    const result = await readFile(imageName)
    return result
  }
}
