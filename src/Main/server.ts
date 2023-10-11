import dotenv from 'dotenv'
import fs from 'fs'
import https from 'https'
import { MySqlHelper } from '../Infrastructure/helpers/database/mysqlHelper'
import app from '../Main/express/app'
dotenv.config()

const port = process.env.PORT ?? 3333
const env = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'https://localhost'
MySqlHelper.openConnection()
// make it to run also on https

if (process.env.NODE_ENV === 'development ') {
  app.listen(port, () => { console.log(`Server running at ${env}:${port}`) })
} else {
  const secPath = process.env.SEC_PATH ?? ''
  const options = {
    key: fs.readFileSync(`${secPath}/private.key`),
    cert: fs.readFileSync(`${secPath}/cert.pem`)
  }
  const httpServer = https.createServer(options, app)
  httpServer.listen(port, () => { console.log(`Server running at ${env}:${port}`) })
}
