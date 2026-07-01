import "dotenv/config";
import mysql from "mysql2";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 4000, // TiDB portu için bunu ekledik
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false, // BULUT BAĞLANTISI İÇİN KRİTİK OLAN SATIR BU!
  },
});

const db = pool.promise();

export default db;
