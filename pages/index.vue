<template>
  <div class="main">
    <HeaderGuide></HeaderGuide>
    <div class="bannerBox">
      <img src="@/assets/images/home/home-banner.jpg" alt="">
    </div>
  </div>
</template>

<script>
  import HeaderGuide from '../components/headers/HeaderGuide'
  export default {
    name: "index",
    components:{
      HeaderGuide
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
.bannerBox{
  position: relative;
  img{
    position: relative;
    width:100%;
  }
}
</style>
