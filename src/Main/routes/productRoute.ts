import { Router, type Express } from 'express'
import { expressAdapterController } from '../Adapters/expressAdapter'
import { makeAddProductController, makeDeleteProductController, makeGetProductController, makeUpdateProductController } from '../factory/product'
import { validateUser } from '../middlewares/jwtSecurity'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  router.post('/product', validateUser, expressAdapterController(makeAddProductController()))
  router.get('/product', expressAdapterController(makeGetProductController()))
  router.put('/product', validateUser, expressAdapterController(makeUpdateProductController()))
  router.delete('/product/:productId', validateUser, expressAdapterController(makeDeleteProductController()))
}
