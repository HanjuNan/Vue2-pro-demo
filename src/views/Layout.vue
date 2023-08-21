<template>
    <div>
        <!-- 导航 -->
        <MyHeader />
        <!-- 导航对应的内容: 首页 新闻 我的 -->
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import MyHeader from "../components/MyHeader.vue"


export default {
    components:{
        MyHeader
    }
}
</script>