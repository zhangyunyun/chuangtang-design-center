<template>
  <div class="sideBox sideOnline">
    <div class="sideCont">
      <h2 class="sideTitle">线下会面</h2>
      <div class="onlineCont">
        <ul class="onlineTab">
          <li :class="{current:tabIndex == index}"
              v-for="(tab,index) in tabList"
              :key="index"
              v-on:click="changeTab(index)">
            <span>{{ tab }}</span>
          </li>
          <!--<li><span>深圳</span></li>
          <li><span>北京</span></li>
          <li><span>杭州</span></li>-->
        </ul>
        <div class="onlinePanel">
          <div class="panel" v-show="panelNum == index" v-for="(panel, index) in panelList" :key="index">
            <div class="pLt">
              <h3>{{ panel.name }}</h3>
              <dl>
                <dt>联系人</dt>
                <dd>{{ panel.linkName }}</dd>
                <dt>电话</dt>
                <dd><b>{{ panel.linkPhone }}</b></dd>
                <dt>扫二维码，添加好友</dt>
                <dd>
                  <img :src="panel.linkCode" alt="">
                </dd>
              </dl>
            </div>
            <div class="pRt">
              <img :src="panel.linkMap" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "online",
    data(){
      return{
        tabIndex:0,
        tabList:['山海总部','深圳','北京','杭州'],
        panelNum:0,
        panelList:[
          {
            'name':'上海总部',
            'linkName':'青木',
            'linkPhone':'136 6167 2864',
            'linkCode':require('assets/images/online/online-code-1.jpg'),
            'linkMap':require('assets/images/online/online-map-1.jpg')
          },
          {
            'name':'深圳',
            'linkName':'青木2',
            'linkPhone':'136 6167 2864',
            'linkCode':require('assets/images/online/online-code-1.jpg'),
            'linkMap':require('assets/images/online/online-map-1.jpg')
          },
          {
            'name':'北京',
            'linkName':'青木3',
            'linkPhone':'136 6167 2864',
            'linkCode':require('assets/images/online/online-code-1.jpg'),
            'linkMap':require('assets/images/online/online-map-1.jpg')
          },
          {
            'name':'杭州',
            'linkName':'青木4',
            'linkPhone':'136 6167 2864',
            'linkCode':require('assets/images/online/online-code-1.jpg'),
            'linkMap':require('assets/images/online/online-map-1.jpg')
          }
        ]
      }
    },
    methods:{
      changeTab(index){
        this.tabIndex = index
        this.panelNum = index
      }
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

.sideOnline{
  background:#f7f7f7;
  padding:.6rem 0;
  .onlineCont{
    margin-top:.4rem;
    position:relative;
  }
  .onlineTab{
    display: flex;
    flex-wrap: nowrap;
    height:.8rem;
    line-height:.8rem;
    border-bottom:1px solid #d7d3d0;
    li{
      flex: 1;
      align-items: center;
      justify-content: center;
      text-align: center;
      span{
        display:inline-block;
        position:relative;
        font-size:.28rem;
        cursor:pointer;
      }
      &.current{
        span{
          &:after{
            position: absolute;
            content: "";
            height:5px;
            width:.8rem;
            left:calc(50% - .4rem);
            bottom:0;
            background:#cfa05a;
          }
        }
      }
    }
  }
  .onlinePanel{
    .panel{
      display: table;
      table-layout: fixed;
      width:100%;
      .pLt,.pRt{
        display: table-cell;
        position: relative;
        vertical-align:top;
        padding:.15rem 0;
      }
      .pLt{
        width:5rem;
        h3{
          font-size:.32rem;
          font-weight:bold;
        }
        dl{
          dt{
            font-size:.20rem;
            color:#999;
            margin-top:.35rem;
          }
          dd{
            font-size:.32rem;
            img{
              margin-top:.15rem;
              width:3rem;
              height:3rem;
            }
          }
        }
      }
      .pRt{
        padding-left:.25rem;
        img{
          width:100%;
          display: block;
        }
      }
    }
  }
}


</style>
