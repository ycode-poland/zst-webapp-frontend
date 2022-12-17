<template>
  <Navbar/>
  <router-view/>
</template>


<script>
import Navbar from '@/components/NavbarComponent.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="less" src="@/assets/style/global.less"></style>
