import express from 'express'
import setAccountRoutes from '../routes/accountRoute'
import setProduct from '../routes/productRoute'
import setUploadRoute from '../routes/uploadRoute'
const app = express()

app.use(express.json())
setAccountRoutes(app)
setUploadRoute(app)
setProduct(app)

export default app
