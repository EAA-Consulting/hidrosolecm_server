import { type FileDTO } from '../../DTOs/FileDTO'

export interface FileUploadRepository {
  handle: (fileName: string, data: Buffer) => Promise<FileDTO>
}
