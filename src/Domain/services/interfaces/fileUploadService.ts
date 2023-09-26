import { type FileDTO } from '../../DTOs/FileDTO'

export interface FileUploadService {
  handle: (fileName: string, data: Buffer) => Promise<FileDTO>
}
