<template>
  <div class="home">
    <BannerSwiper />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerSwiper from "./BannerSwiper/index.vue"
export default {
  name: 'HomeView',
  components: {
    BannerSwiper
  }
}
</script>
