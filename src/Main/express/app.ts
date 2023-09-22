import express from 'express'
import setAccountRoutes from '../routes/accountRoute'

const app = express()

app.use(express.json())
setAccountRoutes(app)

export default app
