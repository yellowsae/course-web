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
    // // 测试于后端 接口传参
    // this.$api.doGet('/student/graduation', { pageNum: 1, pageSize: 1, categoryId: 1 }).then((res) => {

    //   // console.log(res, '测试于后端 接口传参')
    // }).catch((res) => {
    //   // eslint-disable-next-line no-console
    //   console.log(res)
    // })
    // 后端
    // this.$api.doPost('/student/login', { name: 'xz', password: '123' }).then((res) => {
    //   console.log('登录成功，保存token')
    //   window.sessionStorage.setItem('token2', res.data.data.token)
    // }).catch((res) => {
    //   // eslint-disable-next-line no-console
    //   console.log(res)
    // })
  },
  methods: {
    login() {
      this.$api.doLogin('/student/login', { name: 'xz', password: '123' }).then((res) => {
        window.sessionStorage.setItem('token2', res.data.data.token)
        this.$message.success('登录成功')
        console.log.success('登录成功')
      }).catch((res) => {
      // eslint-disable-next-line no-console
        console.log(res)
      })
    },

    async logout() {
      // 退出
      this.$api.doPost('/student/logout').then((res) => {
        window.sessionStorage.removeItem('token2')
        this.$message.info('退出登录')
        console.log('退出登录')
      }).catch((res) => {
      // eslint-disable-next-line no-console
        console.log(res)
      })
    },
  },

}
</script>

<template>
  <div>
    Test
    <el-button type="primary" @click="login">
      登录
    </el-button>
    <el-button @click="logout">
      退出
    </el-button>
  </div>
</template>
