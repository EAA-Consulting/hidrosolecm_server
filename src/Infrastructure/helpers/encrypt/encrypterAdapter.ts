import * as bcrypt from 'bcrypt'
import { type Encrypter } from '../../../Application/use-cases/interfaces/encrypter'
export class EncrypterAdapter implements Encrypter {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async validate (password: string, encryptedPassword: string): Promise<boolean> {
    const isValid = await bcrypt.compare(password, encryptedPassword)
    return isValid
  }
}
