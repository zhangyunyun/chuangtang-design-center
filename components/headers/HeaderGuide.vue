<template>
  <div class="headerBox">
    <div class="header">
      <div class="logoBox">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <div class="addressBox">
        <img src="@/assets/images/address.png" alt="">
        <span>上海</span>
      </div>
      <ul class="navBox">
        <li v-for="(nav, index) in navList"
            :key="index"
            :class="{ current:navIndex==index }"
            v-on:click="changeCurrent(index)">
          <a href="#">{{ nav.name }}</a>
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
          navList:[
            {
              'name':'首页',
              'linkUrl':''
            },
            {
              'name':'小程序',
              'linkUrl':''
            },
            {
              'name':'公众号',
              'linkUrl':''
            },
            {
              'name':'平台工具',
              'linkUrl':''
            },
            {
              'name':'网站',
              'linkUrl':''
            },
            {
              'name':'APP',
              'linkUrl':''
            }
          ]
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
  left:0;
  right:0;
  top:0;
  z-index:999;
  .header{
    display: flex;
    align-content: center;
    font-size:.28rem;
    color:#fff;
    height: 1.3rem;
    line-height: .85rem;
    padding:.25rem;
    a{
      color:#fff;
    }
    .addressBox,.navBox,.linkBox{}
    .logoBox{
      flex:.3;
      text-align:left;
      img{
        display: block;
        width:100%;
      }
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
