<!--
 * @Author: Zhanglx
 * @Date: 2020-09-03 10:22:08
 * @LastEditors: Zhanglx
 * @LastEditTime: 2020-09-04 18:18:10
 * @FilePath: \chuangtang-design-center\pages\detailDw.vue
 * @Description:
-->
<template>
  <div class="page">
    <HeaderGuide></HeaderGuide>
    <div class="a"></div>
    <a-row>
      <a-col :span="25">
        <div class="banner">
          <img src="../assets/images/dw/img_01.png" alt="">
          <div class="banner__text">
            <div class="banner__title">国家电网华东分区<br>新能源可视化，让数据更加直接</div>
            <div class="banner__subtitle"></div>
            <div class="banner__content">
              <span>平台工具</span><i>|</i><span>新能源数据可视化</span>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <div class="detail" v-for="(item, index) in list" :key="index">
          <div class="detail__title">{{item.title}}</div>
          <div class="detail__info">{{item.info}}</div>
          <div class="detail__content" v-if="index == 0">
            <a-row>
              <a-col :span="15">
                <img src="../assets/images/dw/img_02.png" alt="">
              </a-col>
              <a-col :span="9">
                <img src="../assets/images/dw/img_03.png" alt="">
              </a-col>
            </a-row>
          </div>
          <div class="detail__content" v-if="index == 1">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/dw/img_04.png" alt="">
              </a-col>
            </a-row>
          </div>
          <div class="detail__content" v-if="index == 2">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/dw/img_05.png" alt="">
              </a-col>
            </a-row>
          </div>
          <div class="detail__content" v-if="index == 3">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/dw/img_06.png" alt="">
              </a-col>
            </a-row>
          </div>
          <div class="detail__content" v-if="index == 4">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/dw/img_07.png" alt="">
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <MySwiper />
    <ContactUs />
  </div>
</template>

<script>
  import HeaderGuide from '../components/headers/HeaderGuide'
  import ContactUs from '@/components/ContactUs'
  import MySwiper from '@/components/MySwiper'
  export default {
    components:{
      HeaderGuide,
      ContactUs,
      MySwiper
    },
    data() {
      return {
        list: [
          {
            title: "项目背景",
            info:
              "针对全球能源互联网的热点问题，构建的全球新能源观测数据数据库和各大洲电源、电网、负荷模型和数据库，形成基于GIS和沉浸虚拟仿真技术的全球能源互联网资源和电力生产大数据可视化系统，为电网公司构建全球能源护理啊王数据可视化检测、分析平台和虛拟现实体验平台，中国电网华东分区在这一方面找到了 创堂，对创堂来说这是一次很好的合作。",
            img: [""],
          },
          {
            title: "新能源可视化的项目流程",
            info:
              "对于新能源可视化看板的项目流程，创堂还是一贯的作风， 工作安排-定要竟然有序， 这样不至于在项目进程当中出现问题的时候偶手忙脚乱。秩序，是专业的前提基础。",
            img: [""],
          },
          {
            title: "项目信息输入",
            info:
              "在这个项目开始之前，创堂的团队首先进行了大量的资料学习，这是必要的，然后根据自己的理解构建出了产品的框架图，这样一来产品就有了清晰的脉络，清晰的框架，清晰的逻辑。自然错误就会减少。且就算出了问题,也可以在第-时间修正。",
            img: [""],
          },
          {
            title: "团队间的协作",
            info:
              "在0日行9中，世27国从并不是各营名的。彼止程立。地是大面合在-检相互讨论。交流自的型解以及地法。这样的工作方式管先可以候意的让所有人了解项目。烧意见。达成共很。这星共性。其友可以在能时间内盘使所有人的力量克献一个点。这样话会事功增。这星性盟的队值。",
            img: [""],
          },
          {
            title: "项目输出方案",
            info:"对于能源的可视化，创堂还是有一手的,无论在交互逻辑上的体现，还是在视觉上直观的体现，数据上的突出显示，可以第一时间观测到当前数据如何，醒目的颜色，几何图可以直观也辅助数据的直观性。所以无论是视觉还是交互，创堂的团队一向遵守的是信息的直观表达，视觉辅助信息的表达，而不添加其他杂质。",
            img: [""],
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">

.detail {
  text-align: center;
  &__title {
    font-size: 38px;
    font-weight: bold;
    padding-top: 90px;
    padding-bottom: 64px;
  }
  &__info {
    color: #67645f;
    font-size: 22px;
    margin-bottom: 20px;
  }
  &__content{
    img{
      max-width: 100%;
    }
  }
}
</style>
