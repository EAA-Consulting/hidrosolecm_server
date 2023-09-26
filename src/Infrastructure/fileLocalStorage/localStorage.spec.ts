import fs from 'fs'
import path from 'path'
import util from 'util'
import { ImageUploadRepository } from './imageUploadRepository'
describe('LocalStorage', () => {
  test('Should save file in the localStoarge', async () => {
    const imageUploadRepository = new ImageUploadRepository()
    const pathFile = path.join(__dirname, '..', '..', 'images', 'firebirdlogo.png')
    const fileName = path.basename(pathFile)
    const readFile = util.promisify(fs.readFile)
    const file = await readFile(pathFile)
    await imageUploadRepository.handle(fileName, file)
    const result = await imageUploadRepository.get(fileName)
    expect(result).toEqual(file)
  })
})
