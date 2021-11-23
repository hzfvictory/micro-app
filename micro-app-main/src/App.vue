<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <div class="layout-logo" @click="jumpHome">
            <div></div>
          </div>

          <Menu theme="dark" :active-name="activeName" :class="menuitemClasses" width="auto">
            <MenuItem name="home" to="/">
              <Icon type="md-desktop" />
              <p>self 应用</p>
            </MenuItem>
            <MenuItem name="mic-react" to="/mic-react/">
              <Icon type="md-compass" />
              <p>react17 应用</p>
            </MenuItem>
            <MenuItem name="mic-vue2" to="/mic-vue2/about">
              <Icon type="logo-javascript" />
              <p>vue2 应用</p>
            </MenuItem>
            <MenuItem name="mic-vue3" to="/mic-vue3/about">
              <Icon type="ios-nuclear" />
              <p>vue3 应用</p>
            </MenuItem>
            <MenuItem name="mic-vite" to="/mic-vite/#/form">
              <Icon type="ios-paper-plane" />
              <p>vite 应用</p>
            </MenuItem>
            <MenuItem name="multiple" to="/multiple/">
              <Icon type="md-cube" />
              <p>多实例 应用</p>
            </MenuItem>
          </Menu>
        </Sider>


        <Layout style="overflow-y: scroll; height: calc( 100vh - 0px );">
          <Header :style="{padding: 0}">
            <Menu mode="horizontal" :active-name="activeName" style="display: flex">
              <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px',lineHeight:'60px'}"
                    type="md-menu"
                    size="24" />
              <div class="layout-nav">
                <MenuItem name="mic-react" to="/mic-react/">
                  <Icon type="logo-facebook" />
                  预渲染
                </MenuItem>
                <MenuItem name="mic-vue2" to="/mic-vue2/about">
                  <Icon type="logo-hackernews" />
                  预渲染+CDN
                </MenuItem>
                <MenuItem name="mic-vue3" to="/mic-vue3/about">
                  <Icon type="logo-foursquare" />
                  CDN
                </MenuItem>
                <MenuItem name="mic-vite" to="/mic-vite/about">
                  <Icon type="logo-google" />
                  正常
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
        isCollapsed: JSON.parse(localStorage.getItem("menu-collapsed")) || false
      };
    },
    mounted() {
      microApp.setGlobalData({
        router: this.$router
      });
    },
    computed: {
      rotateIcon() {
        return [
          "menu-icon",
          this.isCollapsed ? "rotate-icon" : ""
        ];
      },
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
    methods: {
      collapsedSider() {
        this.$refs.side1.toggleCollapse();
        localStorage.setItem("menu-collapsed", this.isCollapsed);

      },
      jumpHome() {
        this.$router.push("/");
      }
    }
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

  .menu-item p {
    display: inline-block;
    overflow: hidden;
    width: calc(100% - 30px);
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(-5px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 18px;
  }


  .collapsed-menu p {
    width: 0px;
    transition: width .2s ease;
  }

  .menu-item.collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 19px;
  }

  .layout-logo {
    width: 100%;
    height: 60px;
    cursor: pointer;
  }

  .layout-logo > div {
    width: 110px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .ivu-layout-sider-collapsed .layout-logo > div {
    width: 40px;
  }

  .layout-nav {
    width: 480px;
    margin: 0 auto;
    margin-right: 0;
  }

  .ivu-layout-header {
    height: 60px;
  }
</style>