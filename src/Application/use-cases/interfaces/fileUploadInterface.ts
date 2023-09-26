import { type FileDTO } from '../../../Domain/ValeuObjects/FileDTO'

export interface FileUpload {
  handle: (fileName: string, data: Buffer) => Promise<FileDTO>
}
