import { type FileDTO } from '../../../Domain/DTOs/FileDTO'
import { type FileUploadService } from '../../../Domain/services/interfaces/fileUploadService'
import { type FileUpload } from '../interfaces/fileUploadInterface'

export class FileUploadApp implements FileUpload {
  constructor (private readonly fileUploadService: FileUploadService) {}
  async handle (fileName: string, data: Buffer): Promise<FileDTO> {
    return await this.fileUploadService.handle(fileName, data)
  }
}
