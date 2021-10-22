<template>
  <div class="zy-exception">
    <div class="zy-exception-img">
      <div class="zy-exception-img-element"
           style="background-image: url('https://ae01.alicdn.com/kf/Hbb14b0c0f7e2443ea9dce33f33348dddb.jpg');"></div>
    </div>
    <div class="zy-exception-content">
      <h1>404</h1>
      <div class="zy-exception-content-desc">抱歉，你访问的页面不存在</div>
      <div class="zy-exception-content-actions">
        <Button type="primary" @click="jumpHome">返回首页</Button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        dataAry: []
      };
    },
    methods: {
      jumpHome() {
        this.$router.push("/");
      }
    },
    async created() {
    }
  };
</script>

<style scoped>
  .zy-exception {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 80%;
    min-height: 500px
  }

  .zy-exception-img {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 62.5%;
    flex: 0 0 62.5%;
    width: 62.5%;
    padding-right: 152px;
    zoom: 1
  }

  .zy-exception-img-element {
    float: right;
    width: 100%;
    max-width: 430px;
    height: 360px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
  }

  .zy-exception-content {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto
  }

  .zy-exception-content h1 {
    margin-bottom: 24px;
    color: #515a6e;
    font-weight: 600;
    font-size: 72px;
    line-height: 72px
  }

  .zy-exception-content-desc {
    margin-bottom: 16px;
    color: #808695;
    font-size: 20px;
    line-height: 28px
  }
</style>