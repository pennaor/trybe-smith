import dotenv from 'dotenv';
import mysql2 from 'mysql2/promise';

dotenv.config();

const connection = mysql2.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: Number(process.env.MYSQL_PORT) || 3306,
});

export default connection;