<script>
export default {
  name: 'LayoutLeft',
  data() {
    return {
      // 是否展开菜单
      isCollapse: '',
      MenuList: [],
      // 本地保存路由
      activePath: '',
    }
  },
  mounted() {
    // 获取侧边栏数据
    this.$api.get('/api/menuInfo', {}).then((res) => {
      // 赋值
      // this.MenuList = res.data.menuList
    }).catch((e) => {
      alert(e)
    })

    // 执行getMenuList方法
    this.getMenuList()
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
      <el-submenu
        v-for="items in MenuList"
        :key="items.id" :index="`${items.id}` "
      >
        <template #title>
          <i class="el-icon-s-custom" />
          <span>{{ items.authName }}</span>
        </template>
        <el-menu-item
          v-for="item in items.children"
          :key="item.id" :index=" `/${item.path}` "
          @click="saveNameState(`/${item.path}`)"
        >
          <template #title>
            <i class="el-icon-menu" />
            <span>{{ item.authName }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style>
@import "./LayoutLeft.scss";
</style>

