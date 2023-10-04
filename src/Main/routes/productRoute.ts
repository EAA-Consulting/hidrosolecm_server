import { Router, type Express } from 'express'
import { expressAdapterController } from '../Adapters/expressAdapter'
import { makeAddProductController, makeDeleteProductController, makeGetProductController, makeUpdateProductController } from '../factory/product'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  router.post('/product', expressAdapterController(makeAddProductController()))
  router.get('/product', expressAdapterController(makeGetProductController()))
  router.put('/product', expressAdapterController(makeUpdateProductController()))
  router.delete('/product/:productId', expressAdapterController(makeDeleteProductController()))
}
