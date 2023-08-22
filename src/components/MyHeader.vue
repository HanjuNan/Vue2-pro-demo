<template>
  <div class="nav">
    <el-menu
      :default-active="$route.path"
      router
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/news">新闻</el-menu-item>
      <el-menu-item index="/about">我的</el-menu-item>
      <el-menu-item index="/">订单管理</el-menu-item>
      <div class="login">
        <el-button v-if="!userinfo.user">
          <router-link to="/login">登录</router-link>
        </el-button>
        <template v-else>
          <span>欢迎: {{ userinfo.user }}</span>
          <el-button @click="logout"> 退出登录 </el-button>
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      activeIndex: "/",
    };
  },
  computed: {
      ...mapState('LoginModule', ['userinfo'])
  },
  mounted() {
    // this.activeIndex = this.$route.path;
  },
  methods: {
    ...mapMutations('LoginModule', ['deleteUser']),
    logout() {

      // 退出登录
      //1.清空本地存储
      //2.vuex数据滞空
      //3.路由跳转
      localStorage.removeItem('usertoken')
      this.deleteUser()
      this.$router.push('/')
    }
  },
};
</script>

<style lang="less" scoped>
.nav {
  background: #545c64;
  .el-menu-demo {
    width: 1200px;
    margin: 0 auto;
    border-bottom: none;
  }
  .login {
    float: right;

    > button {
      margin-top: 10px;
    }

    span {
      color: #fff;
      padding-right: 10px;
    }
  }
}
</style>
