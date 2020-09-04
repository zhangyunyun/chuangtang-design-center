<!--
 * @Author: Zhanglx
 * @Date: 2020-09-03 10:22:08
 * @LastEditors: Zhanglx
 * @LastEditTime: 2020-09-04 16:26:46
 * @FilePath: \chuangtang-design-center\pages\detailYh.vue
 * @Description:
-->
<template>
  <div class="page">
    <!-- banner -->
    <a-row>
      <a-col :span="25">
        <div class="banner">
          <img src="../assets/images/yh/img_01.png" alt="">
          <div class="banner__text">
            <div class="banner__title">快、高效、便捷、出差报销就是这么简单</div>
            <div class="banner__subtitle">将数据重新整理，通过信息图形快速理解难易度出结论的数据，<br>得出出色见解，可视化模式和趋势</div>
            <div class="banner__content">
              <span>小程序</span><i>|</i><span>金融</span>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <!-- 项目背景 -->
    <a-row class=" detail--1">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <div class="detail">
          <div class="detail__content ">
            <a-row>
              <a-col :lg="16">
                <div class="detail__title">{{list[0].title}}</div>
                <p>随着核心银行系统数字化的推进，中国银行需要考虑变革步调以及现代化进程带来的影响。除技术外，银行还爱考虑核心系统现代化对员工队伍的影响——银行出差报销系统</p>
                <p>中行出差报销系统是中行用于行业内出差报销的网上审批报销小程序，主要是为了满足员工可以在网上处理相关出差申请报销流程。中行在基于现有系统频繁岀现问题的状态下，结识了创堂，创堂在短期内快速帮助中行诊断出交互问题，且结合实际用户场景和用户需求等，快速输出方案。如此一来，创堂再次收获行业內专业课口碑双A的美誉。</p>
              </a-col>
              <a-col :lg="8">
                <img src="../assets/images/yh/img_00.png" alt="" >
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
                <img src="../assets/images/yh/img_02.png" alt="" >
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <!-- 快速理解需求，精准定制策略 -->
    <a-row class="detail--3">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <div class="detail">
          <div class="detail__title">{{list[2].title}}</div>
          <div class="detail__info">{{list[2].info}}</div>
          <div class="detail__content ">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/yh/img_03.png" alt="" >
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
      <a-col :lg="12">
        <img src="../assets/images/yh/img_04.png" alt="">
      </a-col>
      <a-col :lg="12">
        <img src="../assets/images/yh/img_04.png" alt="">
      </a-col>
    </a-row>
    <a-row class="detail--5">
      <a-col :lg="8" :xs="2"></a-col>
      <a-col :lg="8" :xs="20">
        <p>创堂团队耗时近2周，在诊断报告之后，又对业务进行了重新场景触点分析，找到了流程设计的创新点，以及企业核心关注点，最后输出设计方案。</p>
      </a-col>
      <a-col :lg="8" :xs='2'></a-col>
    </a-row>
    <!-- 快速便捷报销 -->
    <a-row>
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <div class="detail">
          <div class="detail__title">{{list[4].title}}</div>
          <div class="detail__info">{{list[4].info}}</div>
          <div class="deta">
            <img src="../assets/images/yh/img_05.png" alt="">
          </div>
        </div>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <a-row class="swiper" :style="{backgroundImage: 'url(' + currentImg + ')', backgroundSize:'contain'}">
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
    <ContactUs />
  </div>
</template>

<script type="text/ecmascript-6">
import ContactUs from '@/components/ContactUs'
export default {
  components:{
    ContactUs
  },
  data() {
    return {
      list: [
        {
          title: "项目背景",
          info:
            "",
          img: [""],
        },
        {
          title: "项目规划",
          info:"进入项目后，创堂团队进行了快速的需求分析、历史背景了解、原方案分析、竟品分析。发现原来的设计只是对相关功能的平铺，并没有对业务场景进行优先级的匹配，设计仅仅满足于可用状态，而创堂在短时间内，以科学的方法和步骤，快速定位问题输岀方案。最终收获项目的一致认可。",
          img: [""],
        },
        {
          title: "快速理解需求，精准制定策略",
          info:"团队在有限时间内，快速的了解需求，以科学的方法制定整套设计策略，以求在最短时间内为项目方提供解决方案，为项目方节约时间成本，保证项目方在有效时间内看到最优的设计解决方式。也使项目方看到我们的方案输出逻辑并不是杂乱无章的额，而是井然有序的，这是创堂的一贯做事风格",
          img: [""],
        },
        {
          title: "多方的信息输入，捕捉最根源的问题",
          info:"创堂在项目开始之前，会搜集各方的意见建议，综合多方的需求学习相关的业务，全方位的了解背景之后，便会找出问题的根源所在，对症下药。这是创堂的风格",
          img: [""],
        },
        {
          title: "快、高效、便捷的报销系统",
          info:"在前期大量工作准备完成之后，创堂的团队输出的是最具有强力说服力的产品。无论是高保真和最终视觉落地的方案，能够精准抓住项目方想要做的，想要看的。页完美体现用户想要看的，和方便看的。这就是创堂的工作专业水准",
          img: [""],
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
      return this.swiperList[this.current]
    }
  },
  components: {},
};
</script>

<style scoped lang="scss">


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
      margin-top: 80px;

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
  &--5{
    background-color: #2b2823;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    line-height: 1.75;
    p{
      margin-bottom: 0;
    }
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
