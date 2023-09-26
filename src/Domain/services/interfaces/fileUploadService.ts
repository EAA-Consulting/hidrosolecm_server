import { type FileDTO } from '../../ValeuObjects/FileDTO'

export interface FileUploadService {
  handle: (fileName: string, data: Buffer) => Promise<FileDTO>
}
