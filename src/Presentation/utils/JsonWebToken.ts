import dotenv from 'dotenv'
import fs from 'fs/promises'
import jwt from 'jsonwebtoken'
import path from 'path'
import { type TokenGenerator } from '../interfaces/token'
dotenv.config()
export class TokenJsonWeToken implements TokenGenerator {
  async generate (payload: string): Promise<string> {
    const secret = await fs.readFile(path.join(__dirname, '..', '..', '..', 'private.key'), 'utf8')

    const token = jwt.sign({ payload }, secret, {
      algorithm: 'RS256',
      expiresIn: '12h'

    })
    return token
  }

  async verify (token: string): Promise<boolean> {
    const secret = await fs.readFile(path.join(__dirname, '..', '..', '..', 'public.key'), 'utf8')
    try {
      jwt.verify(token, secret, {
        algorithms: ['RS256']
      })
    } catch (error) {
      return false
    }

    return true
  }
}
