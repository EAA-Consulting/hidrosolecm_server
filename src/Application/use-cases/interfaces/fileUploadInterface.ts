export interface FileUpload {
  handle: (fileName: string, data: Buffer) => Promise<void>
}
