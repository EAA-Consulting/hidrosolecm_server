import dotenv from 'dotenv'
import app from '../Main/express/app'
dotenv.config()

const port = process.env.SERVER_PORT ?? 3000
app.listen(port, () => { console.log(`Server running at http://localhost:${port}`) })
