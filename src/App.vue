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
  },
  created() {
    if (!this.$route.name.startsWith('Panel')){
      const styleElement = document.createElement('style')
      const textNode = document.createTextNode('body { background-color: #454545; }')
      styleElement.append(textNode)
      document.head.append(styleElement)
    }
  }
}
</script>

<style lang="less" src="@/assets/style/global.less"/>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>