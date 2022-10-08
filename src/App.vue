<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },

  methods: {
    onClick() {
      this.msg = 'Hello World'
    },
  },
}
</script>

<template>
  <div @click="onClick">
    {{ msg }}
  </div>
</template>
