<template>
   <div>
      About Page
   </div>
</template>

<script>
import { getUser } from "../api"
export default {
   created() {
      getUser()
      .then( res => {
         // console.log("About Page getUser res = ",res);
         if (res.success) {

         } else {
            // 重新登录
            this.$router.push("/login")
         }
      })
   }
}
</script>

<style lang="less" scoped>

</style>