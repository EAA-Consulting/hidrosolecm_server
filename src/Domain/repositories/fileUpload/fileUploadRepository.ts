export interface FileUploadRepository {
  handle: (fileName: string, data: Buffer) => Promise<void>
  get: (fileName: string) => Promise<Buffer>
}
