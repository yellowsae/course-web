<script>
import axios from 'axios'

export default {
  name: 'Test',
  data() {
    return {
      data: [],
    }
  },
  mounted() {
    // 直接使用 axios
    axios.get('/api/data').then((res) => { // get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
      this.data = res.data.data
      // console.log(res, '直接调用axios')// 在console中看到数据
    }).catch((res) => {
      alert('wrong')
    })

    this.$api.get('/api/data', {}).then((res) => {
      // console.log(res, '$api 发起的请求')// 在console中看到数据
    }).catch((res) => {
      alert('wrong')
    })

    // console.log(this.axios, ' 查看vue')
  },
}
</script>

<template>
  <div>
    Test
  </div>
</template>
