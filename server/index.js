const express = require( 'express' );
const pool = require( './src/database/pgConnection.js' );
const dotenv = require('dotenv');
const cors = require('cors')
const route = require('./src/route/route.js');
const { getUsers, getProcessInfo, deleteEntries } = require('./src/model/queries.js');
const {addRows, updateRows} = require('./src/model/model.js');
const morgan = require('morgan');

dotenv.config();
const app = express();
app.use(cors());
app.use(morgan('short'))
const port = 3000;

app.use('/',route);



// setInterval(async()=>{
//  updateRows();
// console.log("updateRows");

// },10000);

addRows();

// pool.query(deleteEntries, ( err, res )=>{
//     if(!err){
//         console.log( res.rows );
//     } else{
//         console.log(err.message );
//     }
//     // pool.end();
// })

    
pool.connect().then(()=>{
    console.log("database connected successfully")
    app.listen(port, ()=> console.log( `Server is running on port ${port}`));

}).catch(err =>  console.log("db connection error " , err));
