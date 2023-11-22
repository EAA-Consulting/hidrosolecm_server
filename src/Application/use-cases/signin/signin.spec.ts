import { type SignInService } from '../../../Domain/services/interfaces/signInService'
import { type SignInApplication } from '../interfaces/signInInterface'
import { SignIn } from './signIn'
import { type AuthenticatedUser } from './value_objects/authenticatedUser'

describe('SignIn', () => {
  interface SubTypes {
    sut: SignInApplication
    signInService: SignInService

  }

  const makeSignInServiceStub = (): SignInService => {
    class SignInServiceStub implements SignInService {
      async handle (email: string, password: string): Promise<AuthenticatedUser> {
        return await new Promise(resolve => {
          resolve({
            token: 'asdfasdfasdf'

          })
        })
      }
    }
    return new SignInServiceStub()
  }
  const makeSut = (): SubTypes => {
    const signInServiceStub = makeSignInServiceStub()
    const sut = new SignIn(signInServiceStub)
    return {
      sut,
      signInService: signInServiceStub

    }
  }
  test('Ensure to return 200 when signIn is successful', async () => {
    const { sut } = makeSut()

    const response = await sut.handle('any_email', 'any_password')
    expect(response.token).toBe('asdfasdfasdf')
  })
  test('Ensure throw ane exception if signInService throws', async () => {
    const { sut, signInService } = makeSut()
    jest.spyOn(signInService, 'handle').mockImplementationOnce(async () => {
      return await new Promise((resolve, reject) => {
        reject(new Error())
      })
    })
    const promise = sut.handle('any_email', 'any_password')
    await expect(promise).rejects.toThrow()
  })

  test('Ensure SignInService is called with correct values', async () => {
    const { sut, signInService } = makeSut()
    const handleSpy = jest.spyOn(signInService, 'handle')
    await sut.handle('any_email', 'any_password')
    expect(handleSpy).toHaveBeenCalledWith('any_email', 'any_password')
  })
})
