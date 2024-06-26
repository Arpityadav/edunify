import mysql from 'mysql2/promise';

const urlDB = `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${ process.env.MYSQL_DATABASE}`

const connection = mysql.createPool(urlDB);

export default connection;``
