export interface IDeleteImageRepository {
  handle: (fileName: string) => Promise<boolean>
}
