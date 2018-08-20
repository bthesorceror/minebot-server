const log = require('fancy-log')
const server = require('./server')
const sockets = require('./sockets')
const minecraft = require('./minecraft')

const PORT = process.env.PORT || 4000
const io = sockets(server)

minecraft(io).then(() => {
  server.listen(PORT, () => {
    console.log('')
    log.info(`Now listening on port ${PORT}`)
  })
}).catch((err) => {
  log.error(err)
  process.exit(1)
})
