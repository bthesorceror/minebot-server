const socketio = require('socket.io')

const sockets = (server) => {
  const io = socketio(server)

  return io
}

module.exports = sockets
