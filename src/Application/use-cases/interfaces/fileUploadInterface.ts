import { type FileDTO } from '../../../Domain/DTOs/FileDTO'

export interface FileUpload {
  handle: (fileName: string, data: Buffer) => Promise<FileDTO>
}
