import { FileDeleteApplication } from '../../Application/use-cases/fileUpload/fileDelete'
import { FileDeleteService } from '../../Domain/services/fileUpload/fileDeleteService'
import { S3DeleteImageRepository } from '../../Infrastructure/fileLocalStorage/s3DeleteImageRepository'
import { LogRepository } from '../../Infrastructure/mySqlDatabase/logRepository'
import { FileDeleteController } from '../../Presentation/controllers/fileDeleteController/fileDeleteController'
import { type Controller } from '../../Presentation/interfaces/controller'
import { LogDecoratorController } from '../decorators/logDecoratorController'
export const makeDeleteImageController = (): Controller => {
  const fileDeleteRepository = new S3DeleteImageRepository()
  const fileDeleteService = new FileDeleteService(fileDeleteRepository)
  const fileDeleteApp = new FileDeleteApplication(fileDeleteService)

  const controller = new FileDeleteController(fileDeleteApp)
  const logRepository = new LogRepository()
  return new LogDecoratorController(controller, logRepository)
}
