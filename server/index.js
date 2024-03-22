const express = require( 'express' );
const pool = require( './src/database/pgConnection.js' );
const dotenv = require('dotenv');
const route = require('./src/route/route.js');
const { getUsers, getProcessInfo } = require('./src/model/queries.js');
const {addRows, updateRows} = require('./src/model/model.js');

dotenv.config();
const app = express();
const port = 3000;

app.use('/',route);



// setInterval(async()=>{
 updateRows();
// console.log("updateRows");

// },10000);

addRows();
// pool.query(getProcessInfo, ( err, res )=>{
//     if(!err){
//         console.log( res.rows );
//     } else{
//         console.log(err.message );
//     }
//     pool.end();
// })

    
pool.connect().then(()=>{
    console.log("database connected successfully")
    app.listen(port, ()=> console.log( `Server is running on port ${port}`));

}).catch(err =>  console.log("db connection error " , err));
