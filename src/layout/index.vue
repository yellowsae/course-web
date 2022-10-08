<script>
import LayoutLeft from './LayoutLeft/LayoutLeft.vue'
import LayoutContainer from './LayoutContent/LayoutContent.vue'
import LayoutHeader from './LayoutHeader/LayoutHeader.vue'
export default {
  name: 'Layout',
  components: {
    LayoutLeft,
    LayoutContainer,
    LayoutHeader,
  },
}
</script>

<template>
  <div>
    <!-- 页面布局 -->
    <el-container>
      <el-aside width="200px">
        <LayoutLeft />
      </el-aside>
      <el-container>
        <el-header>
          <LayoutHeader />
        </el-header>
        <el-main>
          <LayoutContainer />
        </el-main>
      </el-container>
    </el-container>
    <!--  -->
  </div>
</template>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
