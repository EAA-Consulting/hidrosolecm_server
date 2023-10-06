import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { type IS3DeleteImageRepository } from '../../Domain/repositories/fileUpload/s3DeleteImageRepository'
import { S3Config } from '../helpers/aws/S3Helper'
export class S3DeleteImageRepository implements IS3DeleteImageRepository {
  async handle (fileName: string): Promise<boolean> {
    const client = new S3Client({
      ...S3Config
    })
    const command = new DeleteObjectCommand({
      Bucket: S3Config.bucket,
      Key: fileName
    })
    const response = await client.send(command)

    if (response.$metadata.httpStatusCode === 204) {
      return true
    }
    return false
  }
}
