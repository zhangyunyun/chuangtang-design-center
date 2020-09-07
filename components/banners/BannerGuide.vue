<template>
  <div class="banner">
    <!--banenr图-->
    <a-row>
      <a-col :span="24">
        <img class="discraptImg" src="@/assets/images/home/home-banner.jpg" alt="">
        <div class="discraptCont">
          <a-row>
            <a-col :lg="4" :xs="2"></a-col>
            <a-col :lg="16" :xs="20">
              <h1>[CT.D]创堂设计(上海)</h1>
              <p>用科学的设计体系、</p>
              <p>为客户带来更大的商业价值！</p>
            </a-col>
            <a-col :lg="4" :xs="2"></a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
    name: "BannerGuide"
}
</script>

<style type="text/scss" lang="scss" scoped>
.discraptCont{
  position:absolute;
  left:0;
  top:calc(50% - 15%);
  width:100%;
  align-items: center;
  justify-content: center;
  color:#fff;
  h1{
    font-size:55px;
    margin-bottom:30px;
    color:#fff;
    text-shadow:1px 1px 3px rgba(0,0,0,.5);
  }
  p{
    font-size:40px;
    line-height:1.6;
    margin-bottom:-5px;
    text-shadow:1px 1px 3px rgba(0,0,0,.5);
  }
}
</style>
