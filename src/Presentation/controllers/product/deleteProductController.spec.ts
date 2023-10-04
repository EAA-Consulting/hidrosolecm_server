import { type IDeleteProductApp } from '../../../Application/use-cases/interfaces/deleteProductInterface'
import { type Controller } from '../../interfaces/controller'
import { DeleteProductController } from './deleteProductController'

describe('Delete ProductController', () => {
  const makeApplicationStub = (): IDeleteProductApp => {
    class DeleteProductAppStub implements IDeleteProductApp {
      async handle (productId: number): Promise<void> {
        await new Promise(resolve => { resolve({}) })
      }
    }
    return new DeleteProductAppStub()
  }
  const makeSut = (): Controller => {
    const appStub = makeApplicationStub()
    return new DeleteProductController(appStub)
  }
  test('Ensure I got error 400 if I dont pass a product number', async () => {
    const sut = makeSut()
    const httpRequest = {
      params: {
        productId: ''
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: productId'))
  })

  test('Ensure I delete a product', async () => {
    const sut = makeSut()
    const httpRequest = {
      params: {
        productId: 1
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })
})
