const path = require('path')
const wrap = require('minecraft-wrap')
const log = require('fancy-log')

const download = () => {
  return new Promise((resolve, reject) => {
    wrap.downloadServer('1.12', 'server.jar', (err) => {
      if (err) {
        return reject(err)
      }

      resolve()
    })
  })
}

const start = async () => {
  const jarPath = path.join(__dirname, 'server.jar')
  const options = { 'online-mode': 'false' }
  const server = new wrap.WrapServer(jarPath, './server', {maxMem: '2048', minMem: '2048'})

  log.info('Starting Minecraft Server')

  return new Promise((resolve, reject) => {
    server.startServer(options, (err) => {
      if (err) {
        log.error(err)
        return reject(err)
      }

      resolve(server)
    })
  })
}

const minecraft = async (io) => {
  await download()
  const server = await start()

  server.on('line', (line) => {
    io.emit('server:line', line)
  })

  return server
}

module.exports = minecraft
