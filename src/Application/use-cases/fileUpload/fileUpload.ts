import { type FileUploadService } from '../../../Domain/services/interfaces/fileUploadService'
import { type FileUpload } from '../interfaces/fileUploadInterface'

export class FileUploadApp implements FileUpload {
  constructor (private readonly fileUploadService: FileUploadService) {}
  async handle (fileName: string, data: Buffer): Promise<void> {
    await this.fileUploadService.handle(fileName, data)
  }
}
