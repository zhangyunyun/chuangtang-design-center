./.<template>
  <div class="main">
    <HeaderGuide></HeaderGuide>
    <BannerGuide></BannerGuide>
    <!--说明-->
    <a-row>
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <a-row>
          <a-col :span="12">
            <div class="itemList">
              <h2 class="aTitle">产品体验与服务流程问题定位与测评</h2>
              <div class="aCont">
                <div class="aContInner">
                  <p>
                    <span>免费竞品分析</span>
                    <span>免费目标用户群分析</span>
                    <span>免费流程分析</span>
                    <span>免费产品分析</span>
                    <span>免费业务场景分析</span>
                    <span>提供测评报告</span>
                  </p>
                </div>
                <div class="aBtn">
                  <a href="#">立即申请</a>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="itemList">
              <h2 class="aTitle">万元设计外包</h2>
              <div class="aCont">
                <div class="aContInner">
                  <p>
                    不论项目范围大小，整体设计只要1万元<br>每月2个优惠名额
                  </p>
                </div>
                <div class="aBtn">
                  <a href="#">立即申请</a>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <!--合作列表-->
    <a-row>
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <a-row>
          <a-col :span="24">
            <h2 class="sideTitle">[CT.D]创堂合作列表</h2>
          </a-col>
        </a-row>
        <a-row :gutter="[16,16]">
          <a-col :lg="6"><img src="@/assets/images/home/1-1.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/1-2.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/1-3.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/1-4.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/2-1.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/2-2.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/2-3.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/2-4.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/3-1.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/3-2.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/3-3.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/3-4.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/4-1.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/4-2.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/4-3.png" alt=""></a-col>
          <a-col :lg="6"><img src="@/assets/images/home/4-4.png" alt=""></a-col>
        </a-row>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <!--案例-->
    <a-row class="sideCase">
      <a-col :span="24">
        <img src="@/assets/images/home/case-zgyh.png" alt="">
      </a-col>
      <a-col :span="24">
        <img src="@/assets/images/home/case-ad.png" alt="">
      </a-col>
      <a-col :span="24">
        <ul class="caseList">
          <li>
            <a href="#">
              <img src="@/assets/images/home/case-1.png" alt="">
              <div class="caseMark">
                <p>雪佛兰运营数据可视化项目</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/home/case-2.png" alt="">
              <div class="caseMark">
                <p>奇瑞捷途H5商城项目</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/home/case-3.png" alt="">
              <div class="caseMark">
                <p>爱库存大仓库APP项目</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img src="@/assets/images/home/case-4.png" alt="">
              <div class="caseMark">
                <p>通用汽车MOD数据可视化项目</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/home/case-5.png" alt="">
              <div class="caseMark">
                <p>更多项目</p>
              </div>
            </a>
          </li>
        </ul>
      </a-col>
    </a-row>
    <!--客户评价-->
    <a-row class="sideComment">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <a-row>
          <a-col :span="24">
            <h2 class="sideTitle">客户评价</h2>
          </a-col>
        </a-row>
        <div class="swiper-content">
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
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <!--创堂优势-->
    <a-row class="sideGood">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <a-row>
          <a-col :span="24">
            <h2 class="sideTitle">创堂优势</h2>
          </a-col>
        </a-row>
        <GoodGuide></GoodGuide>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <!--提供的服务-->
    <a-row class="sideServe">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <a-row>
          <a-col :span="24">
            <h2 class="sideTitle">[CT.D]创堂为客户提供的服务</h2>
          </a-col>
        </a-row>
        <a-row :gutter="[16,16]">
          <a-col :span="8">
            <a href="#" class="serveInner">
              <img src="@/assets/images/home/serve-1.png" alt="">
              <div class="serveMark">
                <div class="serveMarkInner">
                  <h3>市场调研</h3>
                  <p>理解、协助、引导甲方再战略层探索商业机会组合的可能行并挖掘战略级机会点</p>
                </div>
              </div>
            </a>
          </a-col>
          <a-col :span="8">
            <a href="#" class="serveInner">
              <img src="@/assets/images/home/serve-2.png" alt="">
              <div class="serveMark">
                <div class="serveMarkInner">
                  <h3>用户研究</h3>
                  <p style="display:none;">理解、协助、引导甲方再战略层探索商业机会组合的可能行并挖掘战略级机会点</p>
                </div>
              </div>
            </a>
          </a-col>
          <a-col :span="8">
            <a href="#" class="serveInner">
              <img src="@/assets/images/home/serve-3.png" alt="">
              <div class="serveMark">
                <div class="serveMarkInner">
                  <h3>竞品分析</h3>
                  <p style="display:none;">理解、协助、引导甲方再战略层探索商业机会组合的可能行并挖掘战略级机会点</p>
                </div>
              </div>
            </a>
          </a-col>
          <a-col :span="8">
            <a href="#" class="serveInner">
              <img src="@/assets/images/home/serve-4.png" alt="">
              <div class="serveMark">
                <div class="serveMarkInner">
                  <h3>交互设计</h3>
                  <p style="display:none;">理解、协助、引导甲方再战略层探索商业机会组合的可能行并挖掘战略级机会点</p>
                </div>
              </div>
            </a>
          </a-col>
          <a-col :span="8">
            <a href="#" class="serveInner">
              <img src="@/assets/images/home/serve-5.png" alt="">
              <div class="serveMark">
                <div class="serveMarkInner">
                  <h3>视觉设计</h3>
                  <p style="display:none;">理解、协助、引导甲方再战略层探索商业机会组合的可能行并挖掘战略级机会点</p>
                </div>
              </div>
            </a>
          </a-col>
          <a-col :span="8">
            <a href="#" class="serveInner">
              <img src="@/assets/images/home/serve-6.png" alt="">
              <div class="serveMark">
                <div class="serveMarkInner">
                  <h3>数据可视化</h3>
                  <p style="display:none;">理解、协助、引导甲方再战略层探索商业机会组合的可能行并挖掘战略级机会点</p>
                </div>
              </div>
            </a>
          </a-col>
          <a-col :span="8">
            <a href="#" class="serveInner">
              <img src="@/assets/images/home/serve-7.png" alt="">
              <div class="serveMark">
                <div class="serveMarkInner">
                  <h3>企业培训</h3>
                  <p style="display:none;">理解、协助、引导甲方再战略层探索商业机会组合的可能行并挖掘战略级机会点</p>
                </div>
              </div>
            </a>
          </a-col>
          <a-col :span="8">
            <a href="#" class="serveInner">
              <img src="@/assets/images/home/serve-8.png" alt="">
              <div class="serveMark">
                <div class="serveMarkInner">
                  <h3>服务设计</h3>
                  <p style="display:none;">理解、协助、引导甲方再战略层探索商业机会组合的可能行并挖掘战略级机会点</p>
                </div>
              </div>
            </a>
          </a-col>
          <a-col :span="8">
            <a href="#" class="serveInner">
              <img src="@/assets/images/home/serve-9.png" alt="">
              <div class="serveMark">
                <div class="serveMarkInner">
                  <h3>开发测试</h3>
                  <p style="display:none;">理解、协助、引导甲方再战略层探索商业机会组合的可能行并挖掘战略级机会点</p>
                </div>
              </div>
            </a>
          </a-col>
        </a-row>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <ContactUs></ContactUs>
  </div>
</template>

<script>
import HeaderGuide from '../components/headers/HeaderGuide'
import BannerGuide from '../components/banners/BannerGuide'
import GoodGuide from '../components/goods/GoodGuide'
import ContactUs from '@/components/ContactUs'
export default {
  name: "index",
  components:{
    HeaderGuide,
    BannerGuide,
    GoodGuide,
    ContactUs
  },
  data(){
    return{
      swiperList:[
        require('assets/images/home/commont-1.png'),
        require('assets/images/home/commont-2.png'),
        require('assets/images/home/commont-3.png'),
        require('assets/images/home/commont-4.png'),
        require('assets/images/home/commont-5.png'),
        require('assets/images/home/commont-6.png'),
        require('assets/images/home/commont-7.png')
      ]
    }
  },
  methods:{
    afterChange(current){
      // console.log(current);
    }
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
.itemList{
  margin-top:-60px;
  padding:0 10px;
  .aTitle{
    display:flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    background:#cbaa77;
    height:.8rem;
    line-height:.8rem;
    font-size:22px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding:0 10px;
  }
  .aCont{
    background: #ffffff;
    border:1px solid #d5d4d2;
    border-top:0 none;
    padding: 10px 10px 15px;
    .aContInner{
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        flex:1;
        align-items: center;
        justify-content: center;
        display: flex;
        font-size:18px;
        flex-wrap: wrap;
        text-align: center;
        margin-bottom:0;
        height:70px;
        overflow: hidden;
        span{
          flex:1 1 33.333%;
          display:block;
          height:30px;
          line-height:30px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    .aBtn{
      margin-top:10px;
      text-align: center;
      a{
        text-align: center;
        border-radius: 50px;
        border: 1px solid #cbaa77;
        color: #cbaa77;
        width: 160px;
        height: 42px;
        line-height:42px;
        display: block;
        margin: 0 auto;
        font-size: 18px;
      }
    }
  }
}

.sideCase{
  .caseList{
    display: flex;
    flex-wrap: nowrap;
    margin-bottom:0;
    li{
      flex: 1;
      a{
        display: block;
        position: relative;
        img{
          display: block;
          width:100%;
        }
      }
      .caseMark{
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        right:0;
        bottom:0;
        left:0;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
          flex: 1;
          color: #fff;
          font-size: .28rem;
          text-align: center;
          margin-bottom:0;
        }
      }
    }
  }
}

.sideComment{
  background:#f7f7f7;
  padding:.6rem 0;
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
}

.sideServe{
  padding:.6rem 0;
  .serveInner{
    display: block;
    position: relative;
    color:#fff;
  }
  .serveMark{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .serveMarkInner{
      flex: 1;
      padding:.25rem;
      text-align: center;
      h3{
        color:#fff;
        font-size:.32rem;
      }
      p{
        font-size:.20rem;
      }
    }
  }
}

</style>
