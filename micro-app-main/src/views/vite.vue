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
          name: "mic-vite",
          url: "http://localhost:9004/mic-vite/",
          inline: true, // 使用内联script模式,这个就是为了补全路径  document.getElementsByTagName('script')
          disableSandbox: true // 关闭沙箱
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
      unmount() {
        console.log("卸载", "unmount");

        let dom = [...document.getElementsByTagName("style")];
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