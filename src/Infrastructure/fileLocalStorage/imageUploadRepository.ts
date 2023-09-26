import fs from 'fs'
import path from 'path'
import util from 'util'
import { type FileDTO } from '../../Domain/DTOs/FileDTO'
import { type FileUploadRepository } from '../../Domain/repositories/fileUpload/fileUploadRepository'
export class ImageUploadRepository implements FileUploadRepository {
  async handle (fileName: string, data: Buffer): Promise<FileDTO> {
    const writeFile = util.promisify(fs.writeFile)
    const pathFile = path.join(__dirname, '..', '..', 'images', fileName)
    await writeFile(pathFile, data)
    return {
      filePathName: pathFile,
      data
    }
  }

  async get (imageName: string): Promise<FileDTO> {
    const readFile = util.promisify(fs.readFile)
    const result = await readFile(imageName)
    return {
      filePathName: imageName,
      data: result
    }
  }
}
