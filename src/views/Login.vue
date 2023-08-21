<template>
  <div>
    <el-row style="margin-top: 60px">
      <el-col :span="8" :offset="8">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
        >
          <el-form-item label="账号" prop="username">
            <el-input
              type="text"
              v-model="ruleForm.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getLogin } from "../api/index"
export default {
  data() {
   
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
         username: [{ validator: validateUser, trigger: "blur" }],
         password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            // console.log("valid = " + valid);
            // console.log(this.ruleForm);
            // 方法1: 网络登录-请求
            getLogin({
                user: this.ruleForm.username,
                pwd: this.ruleForm.password
            }).then( res => {
                console.log("res = ",res);
                /**
                 * 登录成功
                 * 1.保存token到本地
                 * 2.跳转到首页
                 * 3.存储登录状态给 vuex
                */
               // 保存token到本地
               let data = {
                  token: res.token,
                  user: res.user
               }
               localStorage.setItem("usertoken", JSON.stringify(data));
               // 跳转到首页
               this.$router.push("/");
               // 存储登录信息到vuex
               let obj = {
                  user: res.user,
                  token: res.token,
                  isLogin: true
               }
               this.$store.commit('LoginModule/setUserinfo', obj)

            })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped></style>
