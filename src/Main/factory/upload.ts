import { FileUploadApp } from '../../Application/use-cases/fileUpload/fileUpload'
import { FileUploadService } from '../../Domain/services/fileUpload/fileUploadService'
import { ImageUploadRepository } from '../../Infrastructure/fileLocalStorage/imageUploadRepository'
import { FileUploadController } from '../../Presentation/controllers/fileUploadController/fileUpload'
import { type Controller } from '../../Presentation/interfaces/controller'

export const makeUploadController = (): Controller => {
  const imageUploadRepo = new ImageUploadRepository()
  const fileUploadService = new FileUploadService(imageUploadRepo)
  const fileUploadApp = new FileUploadApp(fileUploadService)
  return new FileUploadController(fileUploadApp)
}
