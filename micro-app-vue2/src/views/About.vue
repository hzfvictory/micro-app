<template>
  <div>
    <el-form style="display: flex" size="mini">
      <el-button type="primary" @click="getParentState">子应用接收基座的数据</el-button>
      <el-button type="primary" @click="subscribeState">子应用接收基座的数据(监控)</el-button>
      <el-divider direction="vertical" />
      <el-button @click="dispatchState">子应用向基座应用发送数据</el-button>
      <el-divider direction="vertical" />
      <el-button type="info" @click="setGlobalData">子应用向全局发送数据</el-button>
    </el-form>
    <el-divider />


    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: ""
        },
        rules: {
          name: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          region: [
            { required: true, message: "请选择活动区域", trigger: "change" }
          ],
          date1: [
            { type: "date", required: true, message: "请选择日期", trigger: "change" }
          ],
          date2: [
            { type: "date", required: true, message: "请选择时间", trigger: "change" }
          ],
          type: [
            { type: "array", required: true, message: "请至少选择一个活动性质", trigger: "change" }
          ],
          resource: [
            { required: true, message: "请选择活动资源", trigger: "change" }
          ],
          desc: [
            { required: true, message: "请填写活动形式", trigger: "blur" }
          ]
        }
      };
    },
    created() {
      console.log("默认值 ^_^ 来自基座应用的数据", window.microApp?.getData());
    },
    beforeDestroy() {
      window.microApp?.removeDataListener(this.dataListener);
      // window.microApp?.clearDataListener();
    },
    methods: {
      dataListener(data) {
        console.log("来自基座应用的数据", data);
        try {
          const { ruleForm } = data;
          this.ruleForm = {
            ...this.ruleForm,
            ...ruleForm
          };
        } catch (e) {
          this.$message.error("通信失败");
          console.log(e, "err");
        }
      },
      // 监控基座数据变化
      subscribeState() {
        // 第二个参数 为true 代表可以立即执行
        window.microApp?.addDataListener(this.dataListener, false);
      },
      // 基座和子应用的通信
      getParentState() {
        console.log("手动获取", window.microApp?.getData());
        try {
          const { ruleForm } = window.microApp?.getData();
          this.ruleForm = {
            ...this.ruleForm,
            ...ruleForm
          };
          this.$message({
            message: "通信成功",
            type: "success"
          });
        } catch (e) {
          this.$message.error("通信失败");
          console.log(e, "err");
        }
      },
      // 子应用向基座应用发送数据
      dispatchState() {
        window.microApp?.dispatch({
          ruleForm: {
            ...this.ruleForm
          }
        });
      },
      // 子应用向全局发送数据
      setGlobalData() {
        window.microApp?.setGlobalData({
          ruleForm: {
            ...this.ruleForm
          }
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm, "submit");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>
<style>
  .demo-ruleForm {
    width: 460px;
    text-align: left;
  }

  .demo-ruleForm .el-select .el-input {
    width: 360px
  }

  .el-divider--vertical {
    height: 40px;
  }
</style>