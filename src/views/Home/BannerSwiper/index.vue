<template>
   <div>
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in list" :key="item.content">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
   </div>
</template>

<script>
import { getBanner } from "@/api"
export default {
    data() {
        return {
            list: [], // 轮播图
        }
    },
    created() {
        getBanner()
        .then(res => {
            console.log("banner = ",res)
            // this.banner = res.data.banner
            // this.banner = res.banner 
            let arr = res.banner
            for (let i = 0; i < arr.length; i++) {
                arr[i].img = arr[i].img.replace('http://www.wwtliu.com/sxtstu', 'http://iwenwiki.com/api')
            }
            console.log(arr);
            this.list = arr
        })
    },
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>