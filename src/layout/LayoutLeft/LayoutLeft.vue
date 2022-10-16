<script>
export default {
  name: 'LayoutLeft',
  data() {
    return {
      // 是否展开菜单
      isCollapse: '',
      // 侧边栏数据
      MenuList: [],
      // 本地保存路由
      activePath: '',
    }
  },
  mounted() {
    // 执行getMenuList方法
    // this.getMenuList()  // 侧边栏数据

    // 侧边栏 Student 端
    this.getMenuListStudent()
  },
  methods: {
    // 保存链接的激活状态
    saveNameState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      // 重新赋值
      this.activePath = activePath
    },

    // 使用 async await 建议使用
    async getMenuList() {
      const res = await this.$api.get('/api/menuInfo', {})
      // this.MenuList = res.data.menuList
      // eslint-disable-next-line no-console
      console.log(res, 'res-> async await 方法获取数据')

      // 赋值
      this.MenuList = res.data.menuList
      this.isCollapse = res.data.isCollapse
    },

    // 侧边栏学生端
    async getMenuListStudent() {
      const res = await this.$api.get('/api/student/menuInfo', {})
      // eslint-disable-next-line no-console
      console.log(res, '学生侧边栏数据')

      this.MenuList = res.data.menuList
      this.isCollapse = res.data.isCollapse
    },
  },
}
</script>

<template>
  <div>
    <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#409bff"
      unique-opened
      :collapse-transition="false"
      router
      :default-active="activePath"
    >
      <!-- 指向 -->
      <el-menu-item
        v-for="items in MenuList"
        :key="items.id"
        :index=" `/${items.path}` "
      >
        <template>
          <i :class="items.icon" />
          <span> {{ items.menuName }}</span>
        </template>

        <!-- 二级菜单 -->
        <el-menu-item v-for="item in items.children" :key="item">
          <i :class="item.icon" />
          <span>{{ item.menuName }}</span>
        </el-menu-item>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
@import "./LayoutLeft.scss";
</style>

