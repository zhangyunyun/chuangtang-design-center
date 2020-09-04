<!--
 * @Author: Zhanglx
 * @Date: 2020-09-03 10:22:08
 * @LastEditors: Zhanglx
 * @LastEditTime: 2020-09-04 14:34:13
 * @FilePath: \chuangtang-design-center\pages\detailAd.vue
 * @Description:
-->
<template>
  <div class="page">
    <!-- banner -->
    <a-row>
      <a-col :span="25">
        <div class="banner">
          <img src="../assets/images/ad/img_01.png" alt="">
          <div class="banner__text">
            <div class="banner__title">奥迪用户数据洞察</div>
            <div class="banner__subtitle">将数据重新整理，通过信息图形快速理解难易度出结论的数据，<br>得出出色见解，可视化模式和趋势</div>
            <div class="banner__content">
              <span>数据可视化</span><i>|</i><span>交通出行</span>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <!-- 项目背景 -->
    <a-row>
      <a-col :span="4"></a-col>
      <a-col :span="16">
        <a-row class="icon__list">
          <a-col :span="8"><img src="../assets/images/ad/icon_jhsj.png" alt=""></a-col>
          <a-col :span="8"><img src="../assets/images/ad/icon_sjsj.png" alt=""></a-col>
          <a-col :span="8"><img src="../assets/images/ad/icon_sjksh.png" alt=""></a-col>
        </a-row>
      </a-col>
      <a-col :span="4"></a-col>
    </a-row>
    <a-row class=" detail--1">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <div class="detail">
          <div class="detail__content ">
            <a-row>
              <a-col :lg="16"  :xs="24">
                <div class="detail__title">{{list[0].title}}</div>
                <p>随着核心银行系统数字化的推进，中国银行需要考虑变革步调以及现代化进程带来的影响。除技术外，银行还爱考虑核心系统现代化对员工队伍的影响——银行出差报销系统</p>
                <p>中行出差报销系统是中行用于行业内出差报销的网上审批报销小程序，主要是为了满足员工可以在网上处理相关出差申请报销流程。中行在基于现有系统频繁岀现问题的状态下，结识了创堂，创堂在短期内快速帮助中行诊断出交互问题，且结合实际用户场景和用户需求等，快速输出方案。如此一来，创堂再次收获行业內专业课口碑双A的美誉。</p>
              </a-col>
              <a-col :lg="8"  :xs="24">
                <img src="../assets/images/ad/img_00.png" alt="" >
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <!-- 项目规划 -->
    <a-row>
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <div class="detail">
          <div class="detail__title">{{list[1].title}}</div>
          <div class="detail__info">{{list[1].info}}</div>
          <div class="detail__content ">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/ad/img_02.png" alt="" >
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <!-- 快速理解需求，精准定制策略 -->
    <a-row>
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <div class="detail">
          <div class="detail__title">{{list[2].title}}</div>
          <div class="detail__info">{{list[2].info}}</div>
          <div class="detail__content ">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/ad/img_03.png" alt="" >
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <!-- 多方信息输入 -->
    <a-row>
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <div class="detail">
          <div class="detail__title">{{list[3].title}}</div>
          <div class="detail__info">{{list[3].info}}</div>
        </div>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <a-row class="detail--4">
      <a-col :lg="24">
        <img src="../assets/images/ad/img_04.png" alt="">
      </a-col>

    </a-row>
    <!-- 快速便捷报销 -->
    <a-row  class="detail--6">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <div class="detail">
          <div class="detail__title">{{list[4].title}}</div>
          <div class="detail__info">{{list[4].info}}</div>
          <div class="deta">
            <img src="../assets/images/ad/img_05.png" alt="">
          </div>
        </div>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <a-row class="swiper" :style="{backgroundImage: 'url(' + swiperList[current] + ')', backgroundSize:'contain'}">
      <a-col :span="4"></a-col>
      <a-col :span="16" >
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
          <div v-for="(item, index) in swiperList" :key="index"><img src="../assets/images/dw/img_08.png" alt=""></div>
        </a-carousel>
      </a-col>
      <a-col :span="4"></a-col>
    </a-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      list: [
        {
          title: "项目背景",
          info:"",
        },
        {
          title: "系统的项目规划",
          info:"在项目开始，我们首先进行了系统的项目流程规划，合理安排项目进度，有效使用项目资源，确保项目能够按期完成。卡住每个关键节点的时间，进行审核、汇报。推动项目的高速运行。",
        },
        {
          title: "快速理解需求，精准制定策略",
          info:"我们在沟通中发现甲方需要的是产品的结构与信息逻辑的组织上能够贴近用户的心理模型，进行无继的人与产品对接。在获得了足够支持与抉择信息后，我哦们开始组织设计方案的初步概念框架。设计方案-击即中，为后续的产品结构劈开设计赢得了时间。",
        },
        {
          title: "信息输入",
          info:"创堂历时三周，进行了大量的调研、探索与尝试。搜集了大量行业相关的数据、报告，充分了解了项目背景，并对主要几家竞品进行了详尽的竞品分析，让我们在之后的蛇鳄季缓解每一步都有据可依。",
        },
        {
          title: "数据可视化处理",
          info:"创堂在拿到客户原有的数据后，对数据进行了重新的分类、整理，并充分结合企业的业务需求与我们之前各种信息的数据和分析结果，建立数据的视觉额层册，帮助用户快速定体最核心的属性和指标。",
        },
      ],
      swiperList:[
        '../assets/images/dw/img_08.png',
        '../assets/images/dw/img_08.png',
        '../assets/images/dw/img_08.png',
        '../assets/images/dw/img_08.png',
        '../assets/images/dw/img_08.png',
      ],
      current:0,
    };
  },
  methods:{
    onChange(a, b, c) {
      console.log(a, b, c);
    },
    afterChange(current){
      console.log(current);
    }
  },
  computed: {
    currentImg() {
      return 'background:url('+ require(this.swiperList[this.current]) +')'
    }
  },
  components: {},
};
</script>

<style scoped lang="scss">
.icon__list{
  padding: 40px 0;
  img{
    width: 178px;
    display: block;
    margin: 0 auto;
  }
}
.banner {
  color: #fff;
  position: relative;
  &__text{
    position: absolute;
    top: 380px;
    left:350px;
  }
  &__title{
    font-size: 60px;
    margin-bottom: 60px;
  }
  &__subtitle{
    font-size: 40px;
    margin-bottom: 60px;
  }
  img{
    width: 100%;
  }
}

.detail {
  text-align: center;
  img{
    max-width: 100%;
  }
  &--1{
    background: #f7f7f7;
    padding-bottom: 40px;
    .detail__title{
      padding-top: 40px;
    }
    p{
      text-align: left;
      line-height: 1.75;
    }
    img{
      margin: 0 auto;
      width: 3rem;
      margin-top: 160px;

    }
  }
  &--3{
    background-color: #222222;
    color: #fff;
    padding-bottom: 20px;
  }
  &--4{
    img{
      width: 100%;
    }
  }
  &--6{
    background-color: #f7f7f7;
  }
  &__title {
    font-size: 38px;
    font-weight: bold;
    padding-top: 90px;
    padding-bottom: 64px;
  }
  &__info {
    color: #67645f;
    font-size: 22px;
    padding-bottom: 60px;
  }
  &__content{
    img{
      max-width: 100%;
    }
  }
}
.swiper{
  background: rgba(0,0,0,.5);
  padding-bottom: 40px;
  margin-top: 35px;
  &__title{
    text-align: center;
    font-size: 38px;
    font-weight: bold;
    padding-top: 40px;
    line-height: 1;
    padding-bottom: 40px;
    color: #fff;
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
