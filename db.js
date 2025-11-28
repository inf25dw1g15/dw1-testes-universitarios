const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.DB_HOST || 'mysql',
  user: process.env.db_USER || 'root',
  password: process.env.db_PASSWORD || 'root',
  database: process.env.DB_NAME || 'gestao_testes',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
});

module.exports = db;
