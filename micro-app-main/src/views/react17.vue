<template>
  <div>
    <micro-app v-bind="opt" />
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        opt: {
          name: "mic-react",
          url:  process.env.APP_BASE_URL + "9001",
          baseroute: "/mic-react",
        }
      };
    }
  };
</script>

<style scoped>

</style>