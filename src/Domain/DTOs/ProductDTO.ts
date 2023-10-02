export interface ProductDTO {
  storeCode: string
  description: string
  altText: string
  imagePath: string
  name: string
  category: string
}

export interface ProductUpdateDTO extends ProductDTO {
  productId: number
}
