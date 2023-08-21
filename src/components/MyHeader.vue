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
        <el-button >
          <router-link to="/login">登录</router-link>
        </el-button>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/",
    };
  },
  mounted() {
    // this.activeIndex = this.$route.path;
  },
  methods: {
   
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
  }

}

</style>
