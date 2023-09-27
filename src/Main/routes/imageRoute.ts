import express, { Router, type Express } from 'express'
import path from 'path'
export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  router.use('/images', express.static(path.join(__dirname, '..', '..', 'images')))
}
