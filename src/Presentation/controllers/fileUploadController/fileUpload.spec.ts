import FormData from 'form-data'
import { MissingParamError } from '../../errors'
import { type Controller } from '../../interfaces/controller'
import { FileUploadController } from './fileUpload'

describe('File upload - Controller', () => {
  const makeSut = (): Controller => {
    const fileUploadController = new FileUploadController()

    return fileUploadController
  }
  test('Ensure I got 400 if the file is not send', async () => {
    const sut = makeSut()

    const formData = new FormData()
    formData.append('file', '')
    const httpRequest = {
      body: formData
    }
    const response = await sut.handle(httpRequest)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('There is not file associated with the request'))
  })
})
