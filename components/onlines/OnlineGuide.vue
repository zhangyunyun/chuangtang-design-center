<template>
  <div class="online">
    <a-row class="sideOnline">
      <a-col :lg="4" :xs="2"></a-col>
      <a-col :lg="16" :xs="20">
        <a-row>
          <a-col :span="24">
            <h2 class="sideTitle">线下会面</h2>
          </a-col>
        </a-row>
        <a-row>
          <a-tabs
            default-active-key="1"
            :tab-position="mode"
            @prevClick="callback"
            @nextClick="callback">
            <a-tab-pane v-for="(online,index) in onlineList" :key="index+1" :tab="online.name" key="index+1">
              <a-row>
                <a-col :lg="6">
                  <div class="pLt">
                    <h3>{{ online.name }}</h3>
                    <dl>
                      <dt>联系人</dt>
                      <dd>{{ online.linkName }}</dd>
                      <dt>电话</dt>
                      <dd><b>{{ online.linkPhone }}</b></dd>
                    </dl>
                    <dl>
                      <dt>扫二维码，添加好友</dt>
                      <dd>
                        <img :src="online.linkCode" alt="">
                      </dd>
                    </dl>
                  </div>
                </a-col>
                <a-col :lg="18">
                  <div class="pRt">
                    <img :src="online.linkMap" alt="">
                  </div>
                </a-col>
              </a-row>
            </a-tab-pane>
          </a-tabs>
        </a-row>
      </a-col>
      <a-col :lg="4" :xs="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: "online",
    data(){
      return{
        mode: 'top',
        tabIndex:0,
        panelNum:0,
        onlineList:[
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
      callback(val) {
        console.log(val);
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
.sideTitle{
  text-align: center;
  font-weight: bold;
  height: 30px;
  line-height:30px;
  font-size:30px;
  margin-top:30px;
  margin-bottom:30px;
}

.online{
  padding-top:1.5rem;
  .ant-tabs{
    font-size:.26rem!important;
  }
  .ant-tabs-nav-container{
    font-size:.26rem!important;
    color:#f00;
  }
  .ant-tabs-nav{
    display: flex!important;
    flex-wrap: nowrap!important;
  }
  .ant-tabs-nav .ant-tabs-tab{
    flex:1!important;
    font-size:.26rem!important;
  }
}

.sideOnline{
  background:#f7f7f7;
  padding:.6rem 0;
  .pLt{
    h3{
      font-size:.32rem;
      font-weight:bold;
    }
    dl{
      dt{
        font-size:.22rem;
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
    img{
      width:100%;
      display: block;
      height:7.5rem;
    }
  }
}
</style>
