import FormData from 'form-data'
import path from 'path'
import { type FileUpload } from '../../../Application/use-cases/interfaces/fileUploadInterface'
import { type FileDTO } from '../../../Domain/ValeuObjects/FileDTO'
import { MissingParamError } from '../../errors'
import { type Controller } from '../../interfaces/controller'
import { FileUploadController } from './fileUpload'

describe('File upload - Controller', () => {
  const makeFileUploadStub = (): FileUpload => {
    class FileUploadStub implements FileUpload {
      async handle (fileName: string, data: Buffer): Promise<FileDTO> {
        return await new Promise(resolve => {
          resolve({
            data: Buffer.from('any_buffer'),
            filePathName: 'any_file_name'
          })
        })
      }
    }
    return new FileUploadStub()
  }
  const makeSut = (): Controller => {
    const fileUploadApp = makeFileUploadStub()
    const fileUploadController = new FileUploadController(fileUploadApp)

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

  test('Ensure I successfully submit a file received 200', async () => {
    const sut = makeSut()
    const file = path.join(__dirname, '..', '..', 'firebirdlogo.png')
    const formData = new FormData()
    formData.append('file', file, 'file')
    const httpRequest = {
      file: formData
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(200)
  })
})
