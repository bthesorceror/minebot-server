const Vuex = require('vuex')

module.exports = new Vuex.Store({
  state: {
    serverLines: []
  },
  mutations: {
    addServerLine (state, line) {
      state.serverLines.push(line)
    }
  }
})
