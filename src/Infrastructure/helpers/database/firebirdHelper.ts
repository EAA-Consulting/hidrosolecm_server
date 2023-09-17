import dotenv from 'dotenv'
import { type Options } from 'node-firebird'
dotenv.config()

export const FirebirdOptions: Options = {
  host: process.env.FIREBIRD_HOST,
  database: process.env.FIREBIRD_DATABASE,
  user: process.env.FIREBIRD_USER,
  password: process.env.FIREBIRD_PASSWORD,
  lowercase_keys: true,
  pageSize: 4096,
  port: 3050

}
