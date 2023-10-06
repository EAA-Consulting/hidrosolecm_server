import dotenv from 'dotenv'
dotenv.config()
export const S3Config = {
  bucket: process.env.AWS_BUCKET ?? '',
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ''
  }
}
