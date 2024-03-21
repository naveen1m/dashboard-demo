const { Client, Pool } = require( 'pg' );
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    ssl: {
        rejectUnauthorized: false  // but it should not be used in production mode
    },
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.PASSWORD
})

module.exports = pool;
