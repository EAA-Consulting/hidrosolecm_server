export interface IDeleteProduct {
  handle: (id: number) => Promise<void>
}
