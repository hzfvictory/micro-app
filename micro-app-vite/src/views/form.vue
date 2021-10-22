<template>
  <div>
    <el-form style="display: flex" size="small">
      <el-button type="info" @click="getGlobalData">获取全局数据</el-button>
    </el-form>
    <el-divider />
    <el-form ref="form" :model="sizeForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="活动名称">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="sizeForm.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="sizeForm.date2"
            style="width: 100%;"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="sizeForm.type">
          <el-checkbox-button
            label="美食/餐厅线上活动"
            name="type"
          ></el-checkbox-button>
          <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
          <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="sizeForm.resource" size="medium">
          <el-radio border label="线上品牌商赞助"></el-radio>
          <el-radio border label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: ""
        }
      };
    },
    created() {
      console.log("默认值 ^_^ 来自基座应用的数据", window.microApp?.getData());
    },
    beforeDestroy() {
      window.microApp?.removeGlobalDataListener(this.dataListener);
    },
    methods: {
      dataListener(data) {
        console.log("全局数据", data);
        try {
          const { ruleForm } = data;
          this.ruleForm = {
            ...this.ruleForm,
            ...ruleForm
          };
          this.$message({
            message: "全局通信成功",
            type: "success"
          });
        } catch (e) {
          this.$message.error("全局通信失败");
          console.log(e, "err");
        }

      },
      getGlobalData() {
        // vite 没有通信功能
        console.log(window.microApp);
        window.microApp?.addGlobalDataListener(this.dataListener, true);
      },
      onSubmit() {
        console.log("submit!");
      }
    }
  };
</script>

<style>
  .demo-ruleForm {
    width: 560px;
    text-align: left;
  }

  .demo-ruleForm .el-select .el-input {
    width: 360px
  }
</style>