<template>
  <Navbar v-if="!$route.name.startsWith('Panel')"/>
  <router-view/>
  <Footer v-if="!$route.name.startsWith('Panel')"/>
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
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>