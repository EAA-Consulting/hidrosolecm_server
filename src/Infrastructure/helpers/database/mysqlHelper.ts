import dotenv from 'dotenv'
import mysql, { type Pool } from 'mysql2'
dotenv.config()

const MysqlConfig = {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: 3306,
  connectionLimit: 10

}

export const MySqlHelper = {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  pool: {} as Pool,
  openConnection: async () => {
    MySqlHelper.pool = mysql.createPool(MysqlConfig)
  },
  closeConnection: async () => {
    MySqlHelper.pool.end()
  }

}
