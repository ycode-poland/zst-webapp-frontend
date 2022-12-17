<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';
import Footer from "@/components/FooterComponent.vue";
export default {
  components: {
    Navbar, Footer
  }
}
</script>

<style lang="less" src="@/assets/style/global.less"/>
