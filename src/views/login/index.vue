<script>
export default {
  name: 'Login',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      // 这是登录表单的数据绑定对象
      LoginForm: {
        username: '',
        password: '',
      },
      // LoginFormRules 表单数据的验证对象
      LoginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    // 点击重置按钮， 重置登录表单
    resetLoginForm() {
      this.$refs.LoginFormRef.resetFields()
    },

    // 登录前的预验证
    login() {
      // 发送登录请求
      this.$refs.LoginFormRef.validate(async (valid) => {
        if (!(valid))
          return
        const { data: result } = await this.$api.post('/api/login', this.LoginForm)
        if (result.meta.status !== 200)
          return this.$message.error('登录失败')
        if (result.meta.status === 200) {
          this.$message.success('登录成功')
          //  token , 保存到客户端的 sessionStorage 中
          window.sessionStorage.setItem('token', result.data.token)
          this.$router.push('/welcome')
        }
      })
    },

    // 角色切换
    handleSelect(key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    },
  },
}
</script>

<template>
  <div class="login-content">
    <el-card class="card">
      <!-- 登录的表单 -->
      <el-form
        ref="LoginFormRef"
        label-width="0px"
        class="login_form"
        :model="LoginForm"
        :rules="LoginFormRules"
      >
        <!-- 角色菜单 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            学生
          </el-menu-item>
          <el-menu-item index="2">
            教师
          </el-menu-item>
          <el-menu-item index="3">
            管理员
          </el-menu-item>
        </el-menu>
        <!-- 用户名 -->
        <el-form-item
          prop="username"
        >
          <el-input
            v-model="LoginForm.username"
            placeholder="请输入用户名"
            type="text"
            prefix-icon="el-icon-user"
          />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item
          prop="password"
        >
          <el-input
            v-model="LoginForm.password"
            placeholder="请输入密码"
            type="password"
            prefix-icon="el-icon-lock"
          />
        </el-form-item>
        <!-- 登录和重置按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">
            登录
          </el-button>
          <el-button type="info" @click="resetLoginForm">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
@import "./login.scss";
</style>
