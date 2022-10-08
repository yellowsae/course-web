<script>
export default {
  name: 'LayoutLeft',
  data() {
    return {
      // 是否展开菜单
      isCollapse: true,
      MenuList: [
        {
          authName: '教师双选管理',
          id: 1,
          icon: 'el-icon-s-home',
          children: [
            {
              authName: '教师申报题目',
              id: 2,
              path: 'home',
              children: [
              ],
            },
            {
              authName: '教师题目审核',
              id: 4,
              path: 'test',
            },
          ],
        },
      ],
      // 本地保存路由
      activePath: '',
    }
  },
  methods: {
    // 保存链接的激活状态
    saveNameState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      // 重新赋值
      this.activePath = activePath
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

