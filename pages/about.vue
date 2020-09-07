./.<template>
  <div class="main">
    <HeaderGuide></HeaderGuide>
    <BannerGuide></BannerGuide>
    <!--创堂优势-->
    <a-row class="sideGood">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <a-row>
          <a-col :span="24">
            <div class="sideExplain">
              <p>CT.D(Chuangtang Design Center) 全称为创堂设计中心，创堂设计中心隶属于上海创堂网络科技有限公司。
                CT.D致力于企业用户的互联网产品体验提升以及设计外包服务-聚焦客户的商业需求与用户需求，结合创堂设计科学、成熟、有效的方法论规避方向性错误、过滤基础性错误，为客户提供正确完整的解决方案。</p>
            </div>
          </a-col>
        </a-row>
        <GoodGuide></GoodGuide>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <!--设计服务-->
    <a-row class="sideProduct">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <a-row class="productTab">
          <a-col :lg="8">
            <div class="proInner">
              <h3>3000 <i>+</i></h3>
              <p>平台设计师</p>
            </div>
          </a-col>
          <a-col :lg="8">
            <div class="proInner">
              <h3>4</h3>
              <p>成立年限</p>
            </div>
          </a-col>
          <a-col :lg="8">
            <div class="proInner">
              <h3>80 <i>+</i></h3>
              <p>经历项目</p>
            </div>
          </a-col>
        </a-row>
        <a-row class="productShow">
          <table class="proTab">
            <tr>
              <th>项目名称</th>
              <th>项目简介</th>
              <th>合作时间</th>
            </tr>
            <tr>
              <td>扬州泰州国际机场服务设计</td>
              <td>针对扬州泰州国际机场建设“最美中小机场”的目标，创堂在人际系统、物理系统、媒介系统、文化系统上进行流程、规则、信系统交互、约束中后台等优化，目前项目仍在进程中。</td>
              <td>2019年12月</td>
            </tr>
            <tr>
              <td>腾讯心衰慢病管理用户调研服务</td>
              <td>创堂与腾讯合作，针对心衰慢病用户分类实施用户调研，获取该用户群特征、画像、需求、模式、习惯等多维度数据。</td>
              <td>2019年9月</td>
            </tr>
            <tr>
              <td>中国银行内部出差报销系统</td>
              <td>创堂与中国银行1合作企业内部员工出差报销系统。将复杂业务逻辑提炼精简，分局出差报销场景进行产品深度定制。</td>
              <td>2019年1月1日</td>
            </tr>
            <tr>
              <td>奇瑞捷途coupe车型官网商城</td>
              <td>创堂与奇瑞捷途合作新车型捷途Coupe的官网商城Web端、H5端，构建车企线上电商系统。</td>
              <td>2019年6月-8月</td>
            </tr>
            <tr>
              <td>通用汽车Market Operation Department（MOD）高级管理人员数据可视化看板</td>
              <td>创堂与通用汽车合作，针对通用汽车高级别管理人员对数据及可视化的需求，进行数据梳理、维度划分、可视化呈现。</td>
              <td>2019年8月1日</td>
            </tr>
            <tr>
              <td>中国电网华东电网新能源数据可视化</td>
              <td>创堂与中国电网华东电网合作新能源可视化。对华东地区风能、光能等设备处理数据与历史数据进行多维度对比展示，为调度中心决策者提供直观、科学的数据依据。</td>
              <td>2019年8月1日</td>
            </tr>
            <tr>
              <td>奇瑞汽车KPI数据仪表盘</td>
              <td>创堂与奇瑞汽车合作国际销售、国内销售、人事、营销仪表盘项目，梳理大数据，可视化展示，为企业员工赋能数据价值。</td>
              <td>2018年9月</td>
            </tr>
            <tr>
              <td>奥迪汽车客户数据洞察项目</td>
              <td>通过数据建立用户画像，并将用户画像以可视化结构赋能奥迪企业员工</td>
              <td>2018年11月</td>
            </tr>
          </table>
          <div class="proBtn">
            <a href="#">更多项目</a>
          </div>
        </a-row>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
    <!--我们的团队-->
    <a-row class="sideTeam">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <a-row>
          <a-col :span="24">
            <h2 class="sideTitle">我们的团队</h2>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <div class="sideExplain">
              <p>创始团队聚集了中国一线企业的设计专家、设计师，具有丰富的从业经验。他们来自阿里、腾讯、百度、小米、华为、三星、联想等。有内驱力、有自我实现懂就、有服务意识与服务精神、更哟欧服务能力与专业度。</p>
              <p>在长期为企业服务的过程中，团队为企业创造价值的同时，也在不断的实践中，逐渐通过经验积累，放大产品与设计在企业经营中的价值</p>
            </div>
          </a-col>
        </a-row>
        <a-row class="teamList">
          <a-col :lg="6">
            <div class="teamInner">
              <img src="@/assets/images/about/team-1.jpg" alt="">
              <dl>
                <dt>青木</dt>
                <dd>集创堂资深合伙人，10年设计经验。</dd>
              </dl>
            </div>
          </a-col>
          <a-col :lg="6">
            <div class="teamInner">
              <img src="@/assets/images/about/team-1.jpg" alt="">
              <dl>
                <dt>慈思远</dt>
                <dd>集创堂创始人，《矩阵思维》作者</dd>
              </dl>
            </div>
          </a-col>
          <a-col :lg="6">
            <div class="teamInner">
              <img src="@/assets/images/about/team-1.jpg" alt="">
              <dl>
                <dt>米哈</dt>
                <dd>容资深设计师</dd>
              </dl>
            </div>
          </a-col>
          <a-col :lg="6">
            <div class="teamInner">
              <img src="@/assets/images/about/team-1.jpg" alt="">
              <dl>
                <dt>鹿姐</dt>
                <dd>--</dd>
              </dl>
            </div>
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
    }
  },
  methods:{
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
.sideProduct{
  .productTab{
    display: flex;
    .a-col{
      flex:1 1 33.333%;
      align-items: center;
      justify-content: center;
      .proInner{
        text-align: center;
        h3 {
          position: relative;
          color: #e5c68f;
          font-size:1rem;
          height:1.5rem;
          -webkit-text-fill-color:transparent;
          -webkit-box-decoration-break:clone;
          box-decoration-break:clone;
          background-size:100% 100%;
          -webkit-background-clip:text;
          background-clip:text;
          background-image:-webkit-gradient(linear,right top, left top,from(#e5c68f),to(#b7986c));
          background-image:linear-gradient(270deg,#e5c68f,#b7986c);
          margin-bottom:0;
        }
        i{
          position: absolute;
          right:-.15rem;
          top:-.15rem;
          width:.6rem;
          height:.6rem;
          display:inline-block;
          font-size:4rem;
        }
        p {
          color: #999;
          font-size:.28rem;
          margin-bottom:0;
        }
      }
    }
  }
  .productShow{
    padding:.3rem 0;
  }
  .proTab{
    border:1px solid #e8d8bf;
    th,td{
      padding:.1rem;
      text-align: center;
      vertical-align: middle;
      border:1px solid #e8d8bf;
      font-size:.23rem;
    }
    th{
      font-size:.28rem;
      height:.7rem;
      line-height:.7rem;
      font-weight: bold;
      background:#f7f7f7;
      &:first-child{
        width:4rem;
      }
      &:last-child{
        width:2.5rem;
      }
    }
    td{
      height:.8rem;
      line-height:1.6;
    }
  }
  .proBtn{
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

.sideTeam{
  .teamList{
    display: flex;
    margin:0 -.25rem;
    .a-col{
      flex:1 1 25%;
      .teamInner{
        margin:.25rem;
        border:1px solid #d5d4d2;
        position: relative;
      }
      img {
        display: block;
        width: 100%;
      }
      dl{
        padding:.15rem;
        margin-bottom:0;
        dt{
          font-size:.28rem;
          font-weight: bold;
        }
        dd{
          font-size:.23rem;
          margin-bottom:0;
          margin-top:.15rem;
          height:.7rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;            /*设置p元素最大4行，父元素需填写宽度才明显*/
          text-overflow: ellipsis;
          overflow: hidden;
          /* autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          /*因为代码环境的关系-webkit-box-orient被过滤掉了 autoprefixer 这个关键字可以免除被过滤的动作*/
          　　word-wrap:break-word;
          　　word-break:break-all;
        }
      }
    }
  }
}
</style>
