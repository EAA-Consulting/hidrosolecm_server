import { type S3FileDTO } from '../../DTOs/S3FileDTO'

export interface IS3UploadRepository {
  handle: (fileName: string, data: Buffer) => Promise<S3FileDTO>
}
