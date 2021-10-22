<template>
  <div>
    <micro-app
      v-bind="opt"
      :data="{
        router:$router
      }"
    />
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        opt: {
          name: "mic-vue3",
          url: "http://localhost:9003/",
          baseroute: "/mic-vue3",
          macro: true
        }
      };
    },
  };
</script>

<style scoped></style>


<style>
  .el-button {
    border: 1px solid rgb(220, 223, 230);
  }

  .el-checkbox__inner::after {
    border: 1px solid #ffffff;
    border-left: 0;
    border-top: 0;
  }
</style>