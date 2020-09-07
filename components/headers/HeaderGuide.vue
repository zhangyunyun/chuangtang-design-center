<template>
  <div class="headerBox">
    <a-row class="header" type="flex">
      <a-col :span="22">
        <a-row type="flex">
          <a-col :span="4" :order="1">
            <a href="#" class="logoBox">
              <img src="@/assets/images/logo.png" alt="">
            </a>
          </a-col>
          <a-col :span="2" :order="2">
            <div class="addressBox">
              <div class="address">
                <img src="@/assets/images/address.png" alt="">
                <span>上海</span>
              </div>
            </div>
          </a-col>
          <a-col :span="6" :order="3" flex="auto">
            <a-menu mode="horizontal">
              <a-menu-item v-for="(nav, index) in navList"
                           :key="index"
                           :class="{ current:navIndex==index }"
                           v-on:click="changeCurrent(index)">
                <a href="#">{{ nav.name }}</a>
              </a-menu-item>
            </a-menu>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="2">
        <div class="linkBox">
          <a href="#">关于我们</a>
        </div>
      </a-col>
    </a-row>
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
}
.header{
  padding:.25rem;
  font-size:.28rem;
  color:#fff;
  a{
    font-size:.28rem;
    color:#fff;
  }
}
.logoBox{
  display:flex;
  align-items: center;
  justify-content: center;
  text-align:left;
  img{
    flex: 1;
    width:100%;
  }
}
.addressBox{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height:100%;
  .address{
    flex:1;
    img{
      position: relative;
      top:-.05rem;
      left:.15rem;
      width:.5rem;
      height:.5rem;
    }
  }
}
.linkBox{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: right;
  height:100%;
  a{
    display: block;
    flex: 1;
  }
}
.ant-menu{
  background: none;
  height: 100%;
  align-items: center;
  display: flex;
}
.ant-menu-horizontal{
  line-height: inherit;
  border-bottom:0 none!important;
  .ant-menu-item-active,.ant-menu-item-selected{
    color:#fff;
    border-bottom-color:transparent;
  }
  .ant-menu-item{
    padding:0;
    a{
      padding:0 .3rem;
    }
  }
  .ant-menu-item > a:hover {
    color:#cfa05c;
  }
  .ant-menu-item.current{
    a{
      color:#cfa05c;
    }
  }
  .ant-menu-submenu{
    top:0;
  }
}
</style>
