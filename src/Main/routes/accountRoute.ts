import { Router, type Express } from 'express'
import { expressAdapterController } from '../Adapters/expressAdapter'
import { makeSignInController } from '../factory/signin'
import { makeSignupController } from '../factory/signup'
export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  router.post('/signup', expressAdapterController(makeSignupController()))
  router.get('/signIn', expressAdapterController(makeSignInController()))
}
