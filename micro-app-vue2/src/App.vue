<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">Form</router-link>
      |
      <router-link to="/list">List</router-link>
      |
      这是vue2的子应用
    </div>
    <div style="clear: both"></div>
    <router-view />
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(document.querySelector("#app-vue2"));

      // console.log(document.body.querySelector("#app"));
      // console.log(new Function("return window")()); // 获取真实的window
      // console.log((0, eval)("window"));
      // console.log(window.rawWindow);
      // console.log(window);
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 10px 0;
    float: left;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
