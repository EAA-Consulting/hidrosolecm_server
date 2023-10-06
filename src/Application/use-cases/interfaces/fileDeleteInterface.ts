export interface IFileDeleteApp {
  handle: (fileName: string) => Promise<boolean>
}
