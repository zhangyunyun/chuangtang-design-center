<template>
  <div class="about">
    <HeaderGuide></HeaderGuide>
    <div class="sideBox sideTheme">
      <img src="@/assets/images/home/home-banner.jpg" alt="">
      <div class="sideCont">
        <h1>[CT.D]创堂设计(上海)</h1>
        <p>用科学的设计体系、</p>
        <p>为客户带来更大的商业价值！</p>
      </div>
    </div>
    <div class="sideBox sideGood">
      <div class="sideCont">
        <div class="sideExplain">
          <p>CT.D(Chuangtang Design Center) 全称为创堂设计中心，创堂设计中心隶属于上海创堂网络科技有限公司。
            CT.D致力于企业用户的互联网产品体验提升以及设计外包服务-聚焦客户的商业需求与用户需求，结合创堂设计科学、成熟、有效的方法论规避方向性错误、过滤基础性错误，为客户提供正确完整的解决方案。</p>
        </div>
        <div class="goodCont">
          <ul class="goodList">
            <li>
              <div class="goodInner">
                <div class="gLt">
                  <img src="@/assets/images/home/good-1.png" alt="">
                </div>
                <div class="gRt">
                  <h3>业务能力</h3>
                  <p>奥迪用户洞察数据可视化项目，是基于终端数据汇总而形成的数据源池，我们通过对该数据池进行数据可视化处理，
                    帮助数据使用者快速呈现市场表现、销售表现、空间时间表现。并帮助用户快速洞察、定位问题。</p>
                </div>
              </div>
            </li>
            <li>
              <div class="goodInner">
                <div class="gRt">
                  <h3>专业能力</h3>
                  <p>奥迪用户洞察数据可视化项目，是基于终端数据汇总而形成的数据源池，我们通过对该数据池进行数据可视化处理，
                    帮助数据使用者快速呈现市场表现、销售表现、空间时间表现。并帮助用户快速洞察、定位问题。</p>
                </div>
                <div class="gLt">
                  <img src="@/assets/images/home/good-2.png" alt="">
                </div>
              </div>
            </li>
            <li>
              <div class="goodInner">
                <div class="gLt">
                  <img src="@/assets/images/home/good-3.png" alt="">
                </div>
                <div class="gRt">
                  <h3>售后服务</h3>
                  <p>奥迪用户洞察数据可视化项目，是基于终端数据汇总而形成的数据源池，我们通过对该数据池进行数据可视化处理，
                    帮助数据使用者快速呈现市场表现、销售表现、空间时间表现。并帮助用户快速洞察、定位问题。</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sideBox sideProduct">
      <div class="sideCont">
        <ul class="productTab">
          <li>
            <div class="proInner">
              <h3>3000 <i>+</i></h3>
              <p>平台设计师</p>
            </div>
          </li>
          <li>
            <div class="proInner">
              <h3>4</h3>
              <p>成立年限</p>
            </div>
          </li>
          <li>
            <div class="proInner">
              <h3>80 <i>+</i></h3>
              <p>经历项目</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <OnlineGuide></OnlineGuide>
  </div>
</template>

<script>
import HeaderGuide from '../components/headers/HeaderGuide'
import OnlineGuide from '../components/onlines/OnlineGuide'
export default {
  name: "about",
  components:{
    HeaderGuide,
    OnlineGuide
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
.sideBox{
  position: relative;
  img{
    position: relative;
    width:100%;
  }
  .sideExplain{
    line-height:1.6;
    font-size:.28rem;
  }
  .sideTitle{
    text-align: center;
    font-weight: bold;
    height: .8rem;
    line-height: .8rem;
    font-size: .45rem;
  }
  .sideCont{
    width:1200px;
    margin:0 auto;
    position:relative;
  }
}
/*banner图文本*/
.sideTheme{
  .sideCont{
    position:absolute;
    top:calc(50% - 140px);
    left:calc(50% - 600px);
    color:#fff;
    text-shadow:1px 1px 3px rgba(0,0,0,.5);
    h1{
      font-size:.8rem;
      color:#fff;
      margin-bottom:.5rem;
    }
    p{
      font-size:.5rem;
      line-height:1.6;
      margin-bottom:.15rem;
    }
  }
}

.sideGood{
  padding:.6rem 0;
  .goodCont{
    margin-top:.6rem;
    position:relative;
  }
  .goodList{
    li{
      .goodInner{
        display: table;
        table-layout: fixed;
        width: 100%;
        .gLt,.gRt{
          display: table-cell;
          position: relative;
          vertical-align: middle;
        }
        .gLt{
          img{
            display: block;
            width: 100%;
          }
        }
        .gRt{
          padding:.25rem;
          h3{
            font-size:.32rem;
            font-weight:bold;
          }
          p{
            font-size:.28rem;
            line-height:1.6;
          }
        }
      }
      &:nth-of-type(2){
        .gLt{
          justify-content: flex-end;
        }
        .gRt{
          justify-content: flex-start;
        }
      }
    }
  }
}

.sideProduct{
  .productTab{
    display: flex;
    li{
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
}
</style>
