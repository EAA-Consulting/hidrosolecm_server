import express from 'express'
import { cors } from '../middlewares/cors'
import setAccountRoutes from '../routes/accountRoute'
import setStaticRoute from '../routes/imageRoute'
import setProduct from '../routes/productRoute'
import setUploadRoute from '../routes/uploadRoute'
const app = express()
app.use(cors)
app.use(express.json())
setAccountRoutes(app)
setUploadRoute(app)
setProduct(app)
setStaticRoute(app)

export default app
