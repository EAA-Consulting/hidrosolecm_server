import { Router, type Express } from 'express'
import { expressAdapterController } from '../Adapters/expressAdapter'
import { makeAddProductController } from '../factory/product'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  router.post('/product', expressAdapterController(makeAddProductController()))
}
