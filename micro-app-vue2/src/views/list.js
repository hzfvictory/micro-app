export default {
  name: "tableLists",
  data() {
    return {
      loading: true,
      otherTableParams: {
        // table的参数
        props: {
          border: false,
          stripe: false,
          size: "medium",
          "default-sort": { prop: "createTime", order: "ascending" }
        },
        on: {}
      },
      otherPaginationParams: {}, // 分页的参数
      column: [
        // table的列
        {
          label: "id",
          prop: "id",
          'min-width':100,
          "show-overflow-tooltip": true,
        },
        {
          label: "名称",
          prop: "name",
          'min-width':130,
          "show-overflow-tooltip": true,
          render: (text) => {
            return <a>{text}</a>;
          }
        },
        {
          label: "图片",
          prop: "cover",
          render: (text) => {
            return <img class="avatar" alt={text} src={text} />;
          }
        },
        {
          label: "时间",
          prop: "created_date",
          'min-width':100,
        },
        {
          label: "状态",
          prop: "status"
        },
        {
          // 最后的操作列，可根据list里面展示要操作的按钮，和回调
          type: "button",
          width: "118",
          label: "操作",
          list: [
            { title: "查看", cb: this.jumpDetail }
          ]
        }
      ],
      hasFirst: true,
      isRouterAlive: true
    };
  },
  created() {
    this.$nextTick(this.queryList);
    window.microApp?.addGlobalDataListener(this.dataListener, true);
  },
  beforeDestroy() {
    window.microApp?.removeGlobalDataListener(this.dataListener);
  },
  methods: {
    dataListener(data) {
      this.globalData = data;
    },
    jumpDetail(options) {
      // 主动获取全局数据
      // console.log(window.microApp?.getGlobalData());

      this.globalData?.router.push(`/mic-react/detail/${options.id}`);
    },
    async queryList() {
      this.loading = true;
      const {
        paginationOptions: { pageSize, currentPage },
        handlePageData
      } = this.$refs.table; // 获取子组件mixins里面的参数
      const { data, total } = await this.$fetch(
        `https://api.justcome.cn/admin/1068068178288054272/scenics?offset=${
          (currentPage - 1) * 10
        }&limit=${pageSize}&includeShop=true`,
        {
          headers: {
            Authentication: this.$store.getters.token
          }
        }
      );
      this.hasFirst = false;
      this.loading = false;
      handlePageData(data, total); // mixin里面统一处理
    },
    listenMounted() {
      console.log("@hooks 侦查 ");
    }
  }
};
