<template>
  <el-form style="display: flex" size="small">
    <el-button type="info" @click="getGlobalData">获取全局数据</el-button>
    <el-button @click="jumpVue2">跳转到vue2</el-button>
  </el-form>
  <el-divider />

  <el-form
    ref="ruleForm"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="Activity name" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="Activity zone" prop="region">
      <el-select v-model="ruleForm.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            v-model="ruleForm.date2"
            placeholder="Pick a time"
            style="width: 100%"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery" prop="delivery">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="Activity type" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="Online activities" name="type"></el-checkbox>
        <el-checkbox label="Promotion activities" name="type"></el-checkbox>
        <el-checkbox label="Offline activities" name="type"></el-checkbox>
        <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="Sponsorship"></el-radio>
        <el-radio label="Venue"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">
        Create
      </el-button
      >
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>
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
            {
              required: true,
              message: "Please input Activity name",
              trigger: "blur"
            },
            {
              min: 3,
              max: 5,
              message: "Length should be 3 to 5",
              trigger: "blur"
            }
          ],
          region: [
            {
              required: true,
              message: "Please select Activity zone",
              trigger: "change"
            }
          ],
          date1: [
            {
              type: "date",
              required: true,
              message: "Please pick a date",
              trigger: "change"
            }
          ],
          date2: [
            {
              type: "date",
              required: true,
              message: "Please pick a time",
              trigger: "change"
            }
          ],
          type: [
            {
              type: "array",
              required: true,
              message: "Please select at least one activity type",
              trigger: "change"
            }
          ],
          resource: [
            {
              required: true,
              message: "Please select activity resource",
              trigger: "change"
            }
          ],
          desc: [
            {
              required: true,
              message: "Please input activity form",
              trigger: "blur"
            }
          ]
        }
      };
    },
    created() {
      console.log("默认值 ^_^ 来自基座应用的数据", window.microApp?.getData());
      const { router } = window.microApp?.getData() || {};
      this.router = router;
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
        window.microApp?.addGlobalDataListener(this.dataListener, true);
      },
      jumpVue2() {
        // 每个应用的路由实例都是不同的，路由实例只能控制自身，无法影响其它应用
        // this.$router.push("/mic-vue2/about");

        this.router?.push("/mic-vue2/about");
        // window.microApp?.getData().router.push("/mic-vue2/about");

        // history.pushState(null, null, "/mic-vue2/about");
        // // 主动触发一次popstate事件
        // window.dispatchEvent(new PopStateEvent("popstate", { state: null }));
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert("submit!");
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
</style>
