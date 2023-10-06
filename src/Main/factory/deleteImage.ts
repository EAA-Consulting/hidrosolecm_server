import { FileDeleteApplication } from '../../Application/use-cases/fileUpload/fileDelete'
import { FileDeleteService } from '../../Domain/services/fileUpload/fileDeleteService'
import { S3DeleteImageRepository } from '../../Infrastructure/fileLocalStorage/s3DeleteImageRepository'
import { FileDeleteController } from '../../Presentation/controllers/fileDeleteController/fileDeleteController'
import { type Controller } from '../../Presentation/interfaces/controller'
export const makeDeleteImageController = (): Controller => {
  const fileDeleteRepository = new S3DeleteImageRepository()
  const fileDeleteService = new FileDeleteService(fileDeleteRepository)
  const fileDeleteApp = new FileDeleteApplication(fileDeleteService)

  return new FileDeleteController(fileDeleteApp)
}
