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
      // eslint-disable-next-line no-console
      console.log(res)
    })

    this.$api.get('/api/data', {}).then((res) => {
      // console.log(res, '$api 发起的请求')// 在console中看到数据
    }).catch((res) => {
      // eslint-disable-next-line no-console
      console.log(res)
    })
    // 测试于后端 接口传参
    this.$api.doGet('/student/graduation', { pageNum: 1, pageSize: 1, categoryId: 1 }).then((res) => {
      // eslint-disable-next-line no-console
      console.log(res, '测试于后端 接口传参')
    }).catch((res) => {
      // eslint-disable-next-line no-console
      console.log(res)
    })
  },
}
</script>

<template>
  <div>
    Test
  </div>
</template>
