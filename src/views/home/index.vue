<script>
export default {
  name: 'Home',
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    changeMsg() {
      this.count = this.count + 10
    },
  },
}
</script>

<template>
  <div>
    <h2>{{ count }}</h2>
    <el-button type="success" @click="changeMsg">
      change
    </el-button>
  </div>
</template>
