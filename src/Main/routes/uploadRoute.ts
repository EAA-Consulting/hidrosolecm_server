import { Router, type Express } from 'express'
import multer from 'multer'
import { expressAdapterController } from '../Adapters/expressAdapter'
import { makeUploadController } from '../factory/upload'
import { validateUser } from '../middlewares/jwtSecurity'
export default (app: Express): void => {
  const storage = multer.memoryStorage()
  const upload = multer({ storage })

  const router = Router()
  app.use('/api', router)
  router.post('/upload', validateUser, upload.single('file'), expressAdapterController(makeUploadController()))
}
