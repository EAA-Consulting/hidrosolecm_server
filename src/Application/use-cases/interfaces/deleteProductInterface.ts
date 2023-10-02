export interface IDeleteProductApp {
  handle: (productId: number) => Promise<void>
}
