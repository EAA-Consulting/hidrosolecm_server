import { type IDeleteImageRepository } from '../../repositories/fileUpload/deleteImageRepository'
import { type IFileDeleteService } from '../interfaces/fileDeleteService'

export class FileDeleteService implements IFileDeleteService {
  constructor (private readonly fileDeleteRepository: IDeleteImageRepository) {}
  async handle (fileName: string): Promise<boolean> {
    return await this.fileDeleteRepository.handle(fileName)
  }
}
