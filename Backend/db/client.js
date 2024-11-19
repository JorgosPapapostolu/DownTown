require('dotenv').config();
const mysql = require('mysql2');


const connectionConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
      rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === 'true',
      ca: process.env.DB_SSL_CA,
    },
  };
  
  const client = mysql.createConnection(connectionConfig);
  
  module.exports = client;
