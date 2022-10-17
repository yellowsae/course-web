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
@import "./layout.scss";
</style>
