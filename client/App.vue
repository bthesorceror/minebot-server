<template>
  <div>
    <ul>
      <li v-for="(line, index) in serverLines" :key="`line-${index}`">
        {{ line }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>


<script>
const store = require('./store')

export default {
  computed: {
    serverLines () {
      return store.state.serverLines
    }
  } 
}
</script>

