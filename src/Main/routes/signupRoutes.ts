import { Router, type Express } from 'express'
import { signupAdapterController } from '../Adapters/signupAdapter'
import { makeSignupController } from '../factory/signup'
export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  router.post('/signup', signupAdapterController(makeSignupController()))
}
