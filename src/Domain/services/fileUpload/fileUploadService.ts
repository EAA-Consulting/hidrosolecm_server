import { type FileDTO } from '../../ValeuObjects/FileDTO'
import { type FileUploadRepository } from '../../repositories/fileUpload/fileUploadRepository'
import { type FileUploadService as IFileUploadService } from '../interfaces/fileUploadService'
export class FileUploadService implements IFileUploadService {
  constructor (private readonly fileUploadRepository: FileUploadRepository) {}
  async handle (fileName: string, data: Buffer): Promise<FileDTO> {
    return await this.fileUploadRepository.handle(fileName, data)
  }
}
