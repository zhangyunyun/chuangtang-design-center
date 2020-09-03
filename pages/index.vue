<template>
  <div class="main">
    <HeaderGuide></HeaderGuide>
    <div class="sideBox">
      <img src="@/assets/images/home/home-banner.jpg" alt="">
      <div class="sideCont sideCont-title">
        <h1>[CT.D]创堂设计(上海)</h1>
        <p>用科学的设计体系、</p>
        <p>为客户带来更大的商业价值！</p>
      </div>
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
.sideBox{
  position: relative;
  img{
    position: relative;
    width:100%;
  }
  .sideCont{

  }
  .sideBox{
    position:absolute;
    top:calc(50% - 100px);
    left:calc(50% - 600px);
    color:#fff;
    text-shadow:1px 1px 3px rgba(0,0,0,.5);
    h1{
      font-size:.8rem;
      color:#fff;
    }
    p{
      font-size:.5rem;
      line-height:1.6;
    }
  }
}
</style>
