<!--
 * @Author: Zhanglx
 * @Date: 2020-09-04 17:46:11
 * @LastEditors: Zhanglx
 * @LastEditTime: 2020-09-04 18:17:44
 * @FilePath: \chuangtang-design-center\components\MySwiper.vue
 * @Description:
-->
<template>
  <div class="main">
    <a-row class="swiper" :style="{backgroundImage: 'url(' + swiperList[current] + ')'}">
      <a-col :span="4"></a-col>
      <a-col :span="16">
        <div  class="swiper-content">
          <div class="swiper__title">其他案例</div>
          <a-carousel arrows autoplay :afterChange='afterChange'>
            <div
              slot="prevArrow"
              slot-scope="props"
              class="custom-slick-arrow"
              style="left: 10px;zIndex: 1"
            >
              <a-icon type="left-circle" />
            </div>
            <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
              <a-icon type="right-circle" />
            </div>
            <div v-for="(item, index) in swiperList" :key="index"><img :src="item" alt=""></div>
          </a-carousel>
        </div>
      </a-col>
      <a-col :span="4"></a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperList:[
          require('../assets/images/dw/img_08.png'),
          require('../assets/images/dw/img_08.png'),
          require('../assets/images/dw/img_08.png'),
          require('../assets/images/dw/img_08.png'),
          require('../assets/images/dw/img_08.png')
        ],
        current:0
      }
    },
    methods:{
      afterChange(current){
        // console.log(current);
      }
    },
    computed: {
      currentImg() {
        return 'background:url('+ require(this.swiperList[this.current]) +')'
      }
    }
  }
</script>

<style scoped lang="scss">
  .swiper{
    position: relative;
    background-size: auto 120%;
    background-position:center center;
    background-repeat:no-repeat;
    padding-bottom: 40px;
    margin-top: 35px;
    overflow:hidden;
    &::after{
      content:"";
      display:block;
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background: rgba(0,0,0,.8);
      z-index:1;
    }
    &-content{
      position:relative;
      z-index:2;
    }
    &__title{
      text-align: center;
      font-size: 38px;
      font-weight: bold;
      padding-top: 40px;
      line-height: 1;
      padding-bottom: 40px;
      color: #fff;
    }
    img{
      width:100%;
    }
  }
  /* For demo */
  .ant-carousel ::v-deep .slick-slide {
    padding: 0 80px;
    img{
      width: 100%;
      display: block;
    }
  }
  .ant-carousel ::v-deep .custom-slick-arrow {
    width: 40px;
    height: 40px;
    font-size: 40px;
    color: #fff;
    // background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.5;
  }
  .ant-carousel ::v-deep .custom-slick-arrow:before {
    display: none;
  }
  .ant-carousel ::v-deep .custom-slick-arrow:hover {
    opacity: 0.8;
  }
  .ant-carousel ::v-deep .slick-slide h3 {
    color: #fff;
  }
</style>
