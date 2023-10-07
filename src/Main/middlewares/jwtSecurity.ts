import { type NextFunction, type Request, type Response } from 'express'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import path from 'path'
export function validateUser (req: Request, res: Response, next: NextFunction): Response | undefined {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' })
  }
  const publicKey = path.join(__dirname, '..', '..', '..', 'public.key')
  const secretKey = fs.readFileSync(publicKey, 'utf8')

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Fail authentication token, forbidden' })
    }
  })
  next()
}
