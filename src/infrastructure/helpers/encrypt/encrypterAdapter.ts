import bcrypt from 'bcrypt'
import { type Encrypter } from '../../../application/use-cases/interfaces/encrypter'
export class EncrypterAdapter implements Encrypter {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
