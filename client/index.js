const Vue = require('vue')
const Vuex = require('vuex')
const SocketIO = require('socket.io-client')

Vue.use(Vuex)

const client = SocketIO.connect()
const store = require('./store')
const App = require('./App.vue')

client.on('server:line', (line) => {
  store.commit('addServerLine', line)
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render (createElement) {
    return createElement(App)
  }
})
