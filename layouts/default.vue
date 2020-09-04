<!--
 * @Author: Zhanglx
 * @Date: 2020-09-03 10:19:52
 * @LastEditors: Zhanglx
 * @LastEditTime: 2020-09-04 17:30:10
 * @FilePath: \chuangtang-design-center\layouts\default.vue
 * @Description:
-->
<template>
  <div id="app">
    <!-- 路由视图，相当于router-view -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$nuxt.$route.path)
  },
}
</script>
