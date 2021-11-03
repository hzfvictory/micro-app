<template>
  <div class="multiple">
    <Button type="primary" round @click='changeData'>发送数据</Button>
    <Divider />
    <div class='multiple-con'>
      <!-- 此处指定 library，因为这个子应用在多个地方引用，会出现资源加载混乱 -->
      <micro-app
        class='multiple-micro-app'
        name='react17-2'
        url='http://localhost:9001/'
        baseRoute='/multiple'
        library='micro-app-mic-react'
      />
      <micro-app
        class='multiple-micro-app'
        name='vue2-2'
        url='http://localhost:9002/'
        baseRoute='/multiple'
        :data="data"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "multiple",
    data() {
      return {
        data: { from: "来自基座的初始化数据" }
      };
    },
    methods: {
      changeData() {
        this.data = {
          ruleForm: {
            name: "来自基座的数据" + (+new Date())
          }
        };
      }
    }
  };
</script>

<style>
  .multiple-con {
    display: flex;
    width: 100%;
  }

  .multiple-micro-app {
    display: block;
    flex: 1;
    margin: 0 5px;
    min-width: 200px;
  }
</style>
