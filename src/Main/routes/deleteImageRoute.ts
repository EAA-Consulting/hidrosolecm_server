import { Router, type Express } from 'express'
import { expressAdapterController } from '../Adapters/expressAdapter'
import { makeDeleteImageController } from '../factory/deleteImage'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  router.delete('/image/:fileName', expressAdapterController(makeDeleteImageController()))
}
