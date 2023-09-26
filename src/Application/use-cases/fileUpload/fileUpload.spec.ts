import { type FileDTO } from '../../../Domain/DTOs/FileDTO'
import { type FileUploadRepository } from '../../../Domain/repositories/fileUpload/fileUploadRepository'
import { FileUploadService } from '../../../Domain/services/fileUpload/fileUploadService'
import { type FileUpload } from '../interfaces/fileUploadInterface'
import { FileUploadApp } from './fileUpload'

interface Subtypes {
  sut: FileUpload
  fileUploadService: FileUploadService

}
describe('File Upload Use Case', () => {
  const makeFileUploadRepositoryStub = (): FileUploadRepository => {
    class FileUploadRepositoryStub implements FileUploadRepository {
      async handle (fileName: string, data: Buffer): Promise<FileDTO> {
        return await new Promise(resolve => {
          resolve({
            data: Buffer.from('any_buffer'),
            filePathName: 'any_file_name'
          })
        })
      }

      async get (imageName: string): Promise<FileDTO> {
        return await new Promise((resolve) => {
          resolve({
            data: Buffer.from('any_buffer'),
            filePathName: 'any_file_name'
          })
        })
      }
    }
    return new FileUploadRepositoryStub()
  }
  const makeUploadFileService = (): FileUploadService => {
    const repository = makeFileUploadRepositoryStub()
    const uploadService = new FileUploadService(repository)
    return uploadService
  }
  const makeSut = (): Subtypes => {
    const fileUploadService = makeUploadFileService()
    const fileUploadApp = new FileUploadApp(fileUploadService)
    return {
      sut: fileUploadApp,
      fileUploadService
    }
  }
  test('Should call services with correct parameters', async () => {
    const { sut, fileUploadService: fileUploadServiceStub } = makeSut()

    const handleSpy = jest.spyOn(fileUploadServiceStub, 'handle')

    const fileName = 'any_file_name'
    const data = Buffer.from('any_data')

    await sut.handle(fileName, data)
    expect(handleSpy).toHaveBeenCalledWith(fileName, data)
  })
  test('Should throw if fileUploadService throws', async () => {
    const { sut, fileUploadService: fileUploadServiceStub } = makeSut()
    jest.spyOn(fileUploadServiceStub, 'handle').mockImplementationOnce(() => {
      throw new Error()
    })
    const fileName = 'any_file_name'
    const data = Buffer.from('any_data')

    await expect(sut.handle(fileName, data)).rejects.toThrow()
  })
})
