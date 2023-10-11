import { type Encrypter } from '../../../Application/use-cases/interfaces/encrypter'
import { type TokenGenerator } from '../../../Presentation/interfaces/token'
import { type AccountModel } from '../../model/AccountModel'
import { type SignInRepository } from '../../repositories/account/signInRepository'
import { SignIn } from './SignInService'

describe('SignIn Service', () => {
  interface SutTypes {
    sut: SignIn
    encrypterStub: Encrypter
    tokenGeneratorStub: TokenGenerator
    SignInRepositoryStub: SignInRepository
  }

  const makeTokenGenerator = (): TokenGenerator => {
    class TokenGeneratorStub implements TokenGenerator {
      verify: (token: string) => Promise<boolean>
      async generate (email: string): Promise<string> {
        return await new Promise(resolve => { resolve('any_token') })
      }

      async validate (token: string): Promise<boolean> {
        return await new Promise(resolve => { resolve(true) })
      }
    }
    return new TokenGeneratorStub()
  }

  const makeSignInRepository = (): SignInRepository => {
    class SignInRepositoryStub implements SignInRepository {
      async handle (email: string): Promise<AccountModel> {
        return await new Promise(resolve => {
          resolve({
            id: 1,
            name: 'valid_name',
            email: 'valid_email',
            password: 'hashed_password',
            admin: false

          })
        })
      }
    }
    return new SignInRepositoryStub()
  }

  const makeEncrypter = (): Encrypter => {
    class EncrypterStub implements Encrypter {
      async validate (password: string, encryptedPassword: string): Promise<boolean> {
        return await new Promise(resolve => { resolve(true) })
      }

      async encrypt (value: string): Promise<string> {
        return await new Promise(resolve => { resolve('hashed_password') })
      }
    }
    return new EncrypterStub()
  }

  const makeSut = (): SutTypes => {
    const encrypter = makeEncrypter()
    const tokenGenerator = makeTokenGenerator()
    const SignInRepositoryStub = makeSignInRepository()
    const sut = new SignIn(encrypter, tokenGenerator, SignInRepositoryStub)
    return {
      sut,
      encrypterStub: encrypter,
      tokenGeneratorStub: tokenGenerator,
      SignInRepositoryStub
    }
  }
  test('Get the token after user is successfully SignedIn', async () => {
    const { sut } = makeSut()
    const response = await sut.handle('valid_email', 'valid_password')

    expect(response.token).toEqual('any_token')
  })

  test("Get an error User not found if user doesn't exist", async () => {
    const { sut, SignInRepositoryStub } = makeSut()
    jest.spyOn(SignInRepositoryStub, 'handle').mockImplementationOnce(async () => {
      return await new Promise((resolve, reject) => { reject(new Error('User not found')) })
    })

    await expect(sut.handle('invalid_email', 'valid_password')).rejects.toThrow(
      'User not found'
    )
  })

  test('Get an error if password is invalid', async () => {
    const { sut, encrypterStub } = makeSut()
    jest.spyOn(encrypterStub, 'validate').mockImplementationOnce(async () => {
      return await new Promise(resolve => { resolve(false) })
    })
    const promise = sut.handle('valid_email', 'invalid_password')
    await expect(promise).rejects.toThrow()
  })
})
