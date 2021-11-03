<template>
  <div>
    <micro-app
      v-bind="opt"
      @created='created'
      @beforemount='beforemount'
      @mounted='mounted'
      @unmount='unmount'
      @error='error'
      :data="{
        token:'vite-vite-vite-vite'
      }"
    />
  </div>
</template>

<script>
  import microApp from "@micro-zoe/micro-app";

  export default {
    name: "",
    data() {
      return {
        opt: {
          name: "mic-vite",
          url: "http://localhost:9004/mic-vite/",
          inline: true, // 使用内联script模式,这个就是为了补全路径  document.getElementsByTagName('script')
          // inline: false, // v0.4支持自动补全路径
          disableSandbox: true // 关闭沙箱
        }
      };
    },
    methods: {
      created() {
        console.log("初始化", "created");
        setTimeout(() => {
          let dom = [...document.getElementsByTagName("style")];
          console.log(dom.length);
          dom.forEach((item) => {
            if (!item.id && !item.sheet.disabled) {
              item.id = "idd";
            }
            item.sheet.disabled = false;
          });
        });
      },
      beforemount() {
        window.store = "12121212";  // 可以在这里引入 redux
        window.microApp = microApp;

        console.log("加载资源完成", "beforemount");
      },
      mounted() {
        console.log("渲染结束", "mounted");
      },
      unmount() {
        console.log("卸载", "unmount");
        window.store = null;
        window.microApp = null;

        let dom = [...document.getElementsByTagName("style")];
        console.log(dom);
        dom.map((item) => {
          if (!item.id) {
            item.sheet.disabled = true;
          }
        });
      },
      error() {
        console.log("error");
      }
    }
  };
</script>


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