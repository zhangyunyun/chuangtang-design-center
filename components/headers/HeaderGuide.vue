<template>
  <div class="headerBox">
    <div class="header">
      <div class="logoBox">
        <nuxt to="/index">

        </nuxt>
      </div>
      <div class="addressBox">
        <i></i>
        <span>上海</span>
      </div>
      <ul class="navBox">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">小程序</a>
        </li>
        <li>
          <a href="#">公众号</a>
        </li>
        <li>
          <a href="#">平台工具</a>
        </li>
        <li>
          <a href="#">网站</a>
        </li>
        <li>
          <a href="#">APP</a>
        </li>
      </ul>
      <div class="linkBox">
        <nuxt-link to="/about">关于我们</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: "headers"
  }
</script>

<style type="text/scss" lang="scss" scoped>
.headerBox{
  position: fixed;
  height:100px;
  left:0;
  right:0;
  top:0;
  z-index:999;
  .header{
    display: flex;
    align-content: center;
    a{
      color:#fff;
    }
    .logoBox{
      flex:.3;
    }
    .addressBox{
      flex:.2;
    }
    .navBox{
      flex:1;
      display: flex;
      li{
        flex: 1;
        a{
          text-align: center;
        }
      }
    }
    .linkBox{
      flex:.5;
    }
  }
}
</style>
