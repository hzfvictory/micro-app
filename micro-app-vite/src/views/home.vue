<template>
  <img alt="Vue logo" :src="src" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script setup lang="ts">
  import HelloWorld from "../components/HelloWorld.vue";
  import { defineProps, reactive } from "vue";

  const src = reactive(new URL("../assets/logo.png", import.meta.url));

</script>

<style>

</style>