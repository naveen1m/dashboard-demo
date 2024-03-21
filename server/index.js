const express = require( 'express' );
const client = require( './database/databasepg.js' );


client.connect();

client.query(`SELECT * FROM users`, ( err, res )=>{
    if(!err){
        console.log( res.rows );
    } else{
        console.log(err.message );
    }
    client.end();
})