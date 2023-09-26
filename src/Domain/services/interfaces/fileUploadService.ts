export interface FileUploadService {
  handle: (fileName: string, data: Buffer) => Promise<void>
}
