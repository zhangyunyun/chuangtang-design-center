<template>
  <div class="good">
    <a-row class="goodList">
      <a-col :lg="12">
        <div class="gRt">
          <img src="@/assets/images/home/good-1.png" alt="">
        </div>
      </a-col>
      <a-col :lg="12">
        <div class="gRt">
          <div class="gInner">
            <h3>业务能力</h3>
            <p>奥迪用户洞察数据可视化项目，是基于终端数据汇总而形成的数据源池，我们通过对该数据池进行数据可视化处理，
              帮助数据使用者快速呈现市场表现、销售表现、空间时间表现。并帮助用户快速洞察、定位问题。</p>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row class="goodList">
      <a-col :lg="12">
        <div class="gRt">
          <div class="gInner">
            <h3>专业能力</h3>
            <p>奥迪用户洞察数据可视化项目，是基于终端数据汇总而形成的数据源池，我们通过对该数据池进行数据可视化处理，
              帮助数据使用者快速呈现市场表现、销售表现、空间时间表现。并帮助用户快速洞察、定位问题。</p>
          </div>
        </div>
      </a-col>
      <a-col :lg="12">
        <div class="gRt">
          <img src="@/assets/images/home/good-2.png" alt="">
        </div>
      </a-col>
    </a-row>
    <a-row class="goodList">
      <a-col :lg="12">
        <div class="gRt">
          <img src="@/assets/images/home/good-3.png" alt="">
        </div>
      </a-col>
      <a-col :lg="12">
        <div class="gRt">
          <div class="gInner">
            <h3>售后服务</h3>
            <p>奥迪用户洞察数据可视化项目，是基于终端数据汇总而形成的数据源池，我们通过对该数据池进行数据可视化处理，
              帮助数据使用者快速呈现市场表现、销售表现、空间时间表现。并帮助用户快速洞察、定位问题。</p>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
    name: "goodGuide"
}
</script>

<style type="text/scss" lang="scss" scoped>
.sideGood{
  padding:.6rem 0;
  border-bottom:1px solid #ddd;
  .gLt{
    img{
      display: block;
      width: 100%;
    }
  }
  .gRt{
    padding:.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .gInner{
      flex: 1;
    }
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
</style>
