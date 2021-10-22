<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">Form</router-link>
    |
    这是 vue3 子应用
  </div>
  <div style="clear: both"></div>

  <router-view />
</template>

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
