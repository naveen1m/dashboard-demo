const { Client } = require( 'pg' );
const dotenv = require( 'dotenv' );

dotenv.config();

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.PASSWORD
})

module.exports = client;
