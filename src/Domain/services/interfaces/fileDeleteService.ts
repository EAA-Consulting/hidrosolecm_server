export interface IFileDeleteService {
  handle: (fileName: string) => Promise<boolean>
}
