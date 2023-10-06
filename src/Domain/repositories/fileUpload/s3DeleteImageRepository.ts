export interface IS3DeleteImageRepository {
  handle: (fileName: string) => Promise<boolean>
}
