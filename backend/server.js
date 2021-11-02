const express = require('express');
const {createServer} =  require('http');
const {Server} = require('socket.io');
const cors = require('cors');
const app = express()
const server = createServer(app)

app.use(cors());
const io = new Server(server, {
  cors: {
    origin: true,
    // credentials: true,
    // methods: ["GET", "POST"],
  },
  // allowEIO3: true
})

io.on("connection", socket => {
// test code
  // socket.on('test', (dataFromClient, cbToClient) => {})
  console.log('connection good')

  socket.on('goInShop', (dataFromClient, cbToClient) => {
    socket.emit('welcomeToShop', 'welcomeToShop')
    cbToClient()
  })

  socket.on('goOutShop', (dataFromClient, cbToClient) => {
    socket.emit('goOutShop', 'goodbye')
    cbToClient()
  })

  socket.on('buyProduct', (dataFromClient, cbToClient) => {
    socket.emit('buyProduct', dataFromClient)
    cbToClient()
  })

  socket.on('inc', (dataFromClient, cbToClient) => {
    socket.emit('inc', dataFromClient)
    cbToClient()
  })

  socket.on('dec', (dataFromClient, cbToClient) => {
    socket.emit('dec', dataFromClient)
    cbToClient()
  })

      socket.on('delete', (dataFromClient, cbToClient) => {
        socket.emit('delete', dataFromClient)
        cbToClient()
      })

  socket.on('disconnecting', () => {
    console.log(socket.id)
    console.log('disconnectionnnn')
    console.log(socket.rooms) // the Set contains at least the socket ID
  });
  socket.on('disconnect',  () => {

  })
});

const PORT = process.env.PORT || 3001;
server.listen(PORT);

console.log(PORT)
