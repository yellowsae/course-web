<script>
export default {
  name: 'LayoutHeader',
}
</script>

<template>
  <div class="FullHeader">
    <div class="l-LayoutHeader">
      <!-- <el-button icon="el-icon-menu" size="mini"></el-button> -->
      <!-- 面包屑 -->
      <!-- <span class="text">首页</span> -->
      <el-breadcrumb separator="/" style="color: black;">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理 </a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-LayoutHeader">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>



</template>

<style scoped>
@import "./LayoutHeader.scss";
</style>
