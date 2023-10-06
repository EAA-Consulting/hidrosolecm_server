import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import mime from 'mime'
import { type FileDTO } from '../../Domain/DTOs/FileDTO'
import { type FileUploadRepository } from '../../Domain/repositories/fileUpload/fileUploadRepository'
import { S3Config } from '../helpers/aws/S3Helper'
export class S3ImageUploadRepository implements FileUploadRepository {
  async handle (fileName: string, data: Buffer): Promise<FileDTO> {
    const client = new S3Client({
      ...S3Config
    })
    const ContentType = mime.getType(fileName)
    const command = new PutObjectCommand({
      Bucket: S3Config.bucket,
      Key: fileName,
      Body: data,
      ContentType: ContentType ?? 'image/png'
    })
    await client.send(command)

    return {
      filePathName: fileName,
      data
    }
  }
}
