<template>
  <div class="headerBox">
    <div class="header">
      <div class="logoBox">
        <img src="@/assets/images/logo.jpg" alt="">
      </div>
      <div class="addressBox">
        <img src="@/assets/images/address.png" alt="">
        <span>上海</span>
      </div>
      <ul class="navBox">
        <li v-for="(nav, index) in navList"
            :key="index"
            :class="{current:navIndex==index}"
            v-on:click="changeCurrent(index)">
          <a href="#">{{nav}}</a>
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
    name: "headers",
    data(){
        return{
          navIndex:0,
          navList:['首页','小程序','公众号','平台工具','网站','APP']
        }
    },
    methods:{
      changeCurrent(index){
        this.navIndex = index
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
.headerBox{
  position: fixed;
  padding:.25rem;
  left:0;
  right:0;
  top:0;
  z-index:999;
  .header{
    display: flex;
    align-content: center;
    font-size:.28rem;
    color:#fff;
    height:.8rem;
    line-height:.8rem;
    a{
      color:#fff;
    }
    .addressBox,.navBox,.linkBox{}
    .logoBox{
      flex:.3;
      text-align:left;
    }
    .addressBox{
      flex:.2;
      text-align: center;
      img{
        width:.8rem;
        height:.5rem;
      }
    }
    .navBox{
      flex:1;
      display: flex;
      margin-bottom:0;
      li{
        flex: 1;
        &.current{
          a{
            color:#cfa05c;
          }
        }
        a{
          text-align: center;
          display: block;
        }
      }
    }
    .linkBox{
      flex:.5;
      justify-content: right;
      text-align: right;
    }
  }
}
</style>
