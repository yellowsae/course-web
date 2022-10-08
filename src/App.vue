<script>
import LayoutContainer from './layout/LayoutContent.vue'
import LayoutLeft from './layout/LayoutLeft.vue'
import LayoutHeader from './layout/LayoutHeader.vue'
export default {
  name: 'App',
  components: {
    LayoutContainer,
    LayoutHeader,
    LayoutLeft,
  },
}
</script>

<template>
  <div>
    <LayoutHeader />
    <LayoutLeft />
    <LayoutContainer />
  </div>
</template>
