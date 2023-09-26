import express from 'express'
import setAccountRoutes from '../routes/accountRoute'
import setUploadRoute from '../routes/uploadRoute'
const app = express()

app.use(express.json())
setAccountRoutes(app)
setUploadRoute(app)

export default app
