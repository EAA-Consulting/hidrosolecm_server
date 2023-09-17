import express from 'express'
import setRoutes from '../routes/signupRoutes'

const app = express()

app.use(express.json())
setRoutes(app)

export default app
