<!--
 * @Author: Zhanglx
 * @Date: 2020-09-03 10:22:08
 * @LastEditors: Zhanglx
 * @LastEditTime: 2020-09-04 18:17:31
 * @FilePath: \chuangtang-design-center\pages\detailJt.vue
 * @Description: 详情-捷途
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
            <div class="banner__title">奇瑞捷途<br>新零售行业和汽车领域的灭花</div>
            <div class="banner__content">
              <span>平台工具</span><i>|</i><span>交通出行</span>
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
              <a-col :span="15" style="padding-right:0.4rem;">
                <img src="../assets/images/jt/img_01.png" alt="">
              </a-col>
              <a-col :span="9">
                <img src="../assets/images/jt/img_02.png" alt="">
              </a-col>
            </a-row>
          </div>
          <div class="detail__content" v-if="index == 1">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/jt/img_03.png" alt="">
              </a-col>
            </a-row>
          </div>
          <div class="detail__content" v-if="index == 2">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/jt/img_04.png" alt="">
              </a-col>
            </a-row>
          </div>
          <div class="detail__content" v-if="index == 3">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/jt/img_05.png" alt="">
              </a-col>
            </a-row>
          </div>
          <div class="detail__content" v-if="index == 4">
            <a-row>
              <a-col :span="24">
                <img src="../assets/images/jt/img_06.png" alt="">
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
            info:"当一堆数据摆在奇瑞营销本部分的工作人员面前时候，工作人员是无从下手的，怎样从大量的表格数据中去执行工作，提高工作效率,减少不必要的失误是工作人员当前的燃眉之急，为了能快速解决这个问题，奇瑞找到创堂。创堂在项目之初了解到这些需求之后，通过对数据进行筛选、蒸馏、挑选、冰冰和奇瑞内部人员进行不断的沟通、需求分析，得到了可用的维度指标及数据之后，创堂对产品进行快速的迭代，最终得出的方案得到奇瑞工作人员的一致好评",
            img: [""],
          },
          {
            title: "系统的项目规划",
            info:"像往常一样，系统化的项目进程表-览无余，时间规定清晰，阶段性的项目输出明确，这一向是创堂的工作风格",
            img: [""],
          },
          {
            title: "项目开始前的业务学习",
            info:"创堂有一个让人信服的因素就是靠谱，而这个因素在项目开始之前大量资料输入、业务学习的时候体现，因为创堂知道，没有前期大量的学习和了解，最终所出的结果会漏洞百出，所有本着负责、专业的态度，创堂在进行大量的学习之后，最终属楚结果是可以让项目方折服的。",
            img: [""],
          },
          {
            title: "设计师驻场，实施跟踪进度",
            info:"创堂团队的设计师在奇瑞驻场的时候可以实时跟踪项目进度，跟项目方零距离沟通，高效率的输出结果。驻场的同时创堂团队可以第一时间了解到项目方的需求，设计师可以第一时间输出结果供项目方查阅。这样可以大大的提高工作效率，节省双方的时间成本。这也是创堂的一-大亮点。",
            img: [""],
          },
          {
            title: "项目最终结果",
            info:"经过前期紧锣密鼓的工作之后，创堂将交互设计、视觉设计全部落地，然后交给开发人员进行开发，这一系列的工作，创堂将它实现落地，所以务实也是创堂的一个特点。",
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
