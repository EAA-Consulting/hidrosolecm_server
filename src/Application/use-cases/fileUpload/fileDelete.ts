import { type IFileDeleteService } from '../../../Domain/services/interfaces/fileDeleteService'
import { type IFileDeleteApp } from '../interfaces/fileDeleteInterface'

export class FileDeleteApplication implements IFileDeleteApp {
  constructor (private readonly fileDeleteService: IFileDeleteService) {}
  async handle (fileName: string): Promise<boolean> {
    return await this.fileDeleteService.handle(fileName)
  }
}
