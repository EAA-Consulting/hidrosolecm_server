import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import mime from 'mime'
import { type S3FileDTO } from '../../Domain/DTOs/S3FileDTO'
import { type IS3UploadRepository } from '../../Domain/repositories/fileUpload/s3UploadRepository'
import { S3Config } from '../helpers/aws/S3Helper'
export class S3ImageUploadRepository implements IS3UploadRepository {
  async handle (fileName: string, data: Buffer): Promise<S3FileDTO> {
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
      fileName
    }
  }
}
