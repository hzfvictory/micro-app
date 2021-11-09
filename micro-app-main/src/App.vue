<template>
  <div id="app" >
    <div class="layout">
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <div class="layout-logo">
            <div></div>
          </div>

          <Menu theme="dark" :active-name="activeName" :class="menuitemClasses" width="auto">
            <MenuItem name="home" to="/">
              <Icon type="md-boat" />
              <span>自带页面</span>
            </MenuItem>
            <MenuItem name="mic-react" to="/mic-react/">
              <Icon type="md-boat" />
              <span>react17</span>
            </MenuItem>
            <MenuItem name="mic-vue2" to="/mic-vue2/about">
              <Icon type="md-book" />
              <span>vue2</span>
            </MenuItem>
            <MenuItem name="mic-vue3" to="/mic-vue3/about">
              <Icon type="logo-buffer" />
              <span>vue3</span>
            </MenuItem>
            <MenuItem name="mic-vite" to="/mic-vite/#/form">
              <Icon type="logo-buffer" />
              <span>vite</span>
            </MenuItem>
            <MenuItem name="multiple" to="/multiple/">
              <Icon type="logo-buffer" />
              <span>多个应用</span>
            </MenuItem>
          </Menu>
        </Sider>


        <Layout style="overflow-y: scroll; height: calc( 100vh - 0px );">
          <Header :style="{padding: 0}">
            <Menu mode="horizontal" :active-name="activeName">
              <div class="layout-nav">
                <MenuItem name="mic-react" to="/mic-react/">
                  <Icon type="ios-navigate"></Icon>
                  速看
                </MenuItem>
                <MenuItem name="mic-vue2" to="/mic-vue2/about">
                  <Icon type="ios-keypad"></Icon>
                  尽阅
                </MenuItem>
                <MenuItem name="mic-vue3" to="/mic-vue3/about">
                  <Icon type="ios-analytics"></Icon>
                  oppo
                </MenuItem>
                <MenuItem name="mic-vite" to="/mic-vite/about">
                  <Icon type="ios-paper"></Icon>
                  vivo
                </MenuItem>
              </div>
            </Menu>
          </Header>
          <Content style="padding: 15px">
            <div style="padding:15px;background-color: #fff">
              <router-view />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>
<script>
  import microApp from "@micro-zoe/micro-app";

  export default {
    data() {
      return {
        isCollapsed: false
      };
    },
    mounted() {
      microApp.setGlobalData({
        router: this.$router
      });
    },
    computed: {
      menuitemClasses() {
        return [
          "menu-item",
          this.isCollapsed ? "collapsed-menu" : ""
        ];
      },
      activeName() {
        let path = this.$route.path;
        return path.split("/")[1] || "home";
      }
    },
    methods: {}
  };
</script>

<style scoped>
  .layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    height: 100vh;
  }

  .ivu-layout {
    min-height: 100%;
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .layout-logo {
    width: 100%;
    height: 60px;
  }

  .layout-logo > div {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 380px;
    margin: 0 auto;
    margin-right: 0;
  }

  .ivu-layout-header {
    height: 60px;
  }
</style>