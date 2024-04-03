const express = require('express');
const http = require('http');
const pool = require('./src/database/pgConnection.js');
const dotenv = require('dotenv');
const cors = require('cors')
const route = require('./src/route/route.js');
const { getUsers, getProcessInfo, deleteEntries } = require('./src/model/queries.js');
const { addRows, updateRows } = require('./src/model/model.js');
const morgan = require('morgan');
const socketIO = require('socket.io');


dotenv.config();
const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
const server = http.createServer(app);
const io = new socketIO.Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

app.use(morgan('short'))
const port = 3000;

app.use('/', route);

io.on('connection', (socket) => {
  // console.log(socket)
  console.log(`Client connected ${socket.id}`);

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// setInterval(async () => {
//   updateRows();
//   console.log("updateRows");
//   // pool.query(`LISTEN process_info_update`);

// }, 10000);

addRows();

pool.connect().then((client) => {
  console.log("database connected successfully")
  client.on('notification', (data) => {
    const channel = data.channel;
    const payload = data.payload;

    console.log(`Received notification on channel '${channel}': ${payload}`);

    if (channel === 'process_info_update') {
      const updatedProcessData = JSON.parse(payload);

      io.emit('process_info_update', updatedProcessData);
    }
  })
  client.query(`LISTEN process_info_update`)
  server.listen(port, () => console.log(`Server is running on port ${port}`));

}).catch(err => console.log("db connection error ", err));
