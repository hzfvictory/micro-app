<template>
  <div>
    <micro-app
      v-bind="opt"
      @created='created'
      @beforemount='beforemount'
      @mounted='mounted'
      @unmount='unmount'
      @error='error'
    />
  </div>
</template>

<script>
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
    methods: {
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