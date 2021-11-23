<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="handelData">
    {{data}}
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "Home",
    data() {
      return {
        data: {
          test: 1
        }
      };
    },
    components: {
      HelloWorld
    },
    methods: {
      handelData() {
        // this.$set(this.data, "aa", 2222);
        this.data.aa = 2222;
        console.log(this.data);

      }
    }
  };
</script>

<style>
  .home {
    text-align: center;
  }
</style>
