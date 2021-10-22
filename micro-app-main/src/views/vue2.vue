<template>
  <div>
    <Button type="primary" round @click='dispatchChildData'>基座向子应用发送数据</Button>
    <Divider type="vertical" />
    <Button round @click='getChildData'>基座接收子应用发送来的数据</Button>

    <Divider />
    <micro-app
      v-bind="opt"
      @created='created'
      @beforemount='beforemount'
      @mounted='mounted'
      @unmount='unmount'
      @error='error'
      @datachange='handleDataChange'
      :data="{
        token:'@micro-zoe/micro-app'
      }"
    />
  </div>
</template>

<script>
  import microApp from "@micro-zoe/micro-app";

  const appName = "mic-vue2";
  export default {
    name: "",
    data() {
      return {
        opt: {
          name: "mic-vue2",
          url: "http://localhost:9002",
          baseroute: "/mic-vue2"
        }
      };
    },
    mounted() {

    },
    methods: {
      // 基座向子应用发送数据
      dispatchChildData() {
        microApp.setData(appName, {
          ruleForm: {
            name: "传递的数据" + Date.now(),
            delivery: true,
            desc: "活动形式活动形式",
            region: "beijing",
            resource: "线下场地免费",
            type: ["美食/餐厅线上活动", "线下主题活动"],
            date1: new Date("2021-10-22"),
            date2: new Date(2021, 10, 22, 8, 40, 59)
          }
        });
      },
      // 子应用互动基座
      handleDataChange({ detail: { data } }) {
        console.log("监控来自子应用的数据", data);
      },
      // 基座接收子应用发送来的数据
      getChildData() {
        console.log("来自子应用的数据", microApp.getData(appName));

        this.$Notice.open({
          title: "来自子应用的数据",
          desc: `${JSON.stringify(microApp.getData(appName)?.ruleForm)}`
        });
      },
      created() {
        console.log("初始化", "created");
      },
      beforemount() {
        console.log("加载资源完成", "beforemount");
      },
      mounted() {
        console.log("渲染结束", "mounted");
      },
      unmount() {
        console.log("卸载", "unmount");
      },
      error() {
        console.log("error");
      }
    }
  };
</script>

<style scoped>

</style>