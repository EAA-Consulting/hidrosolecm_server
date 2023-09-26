import { type FileUploadRepository } from '../../repositories/fileUpload/fileUploadRepository'
import { type FileUploadService as IFileUploadService } from '../interfaces/fileUploadService'
export class FileUploadService implements IFileUploadService {
  constructor (private readonly fileUploadRepository: FileUploadRepository) {}
  async handle (fileName: string, data: Buffer): Promise<void> {
    this.fileUploadRepository.handle(fileName, data)
  }
}
