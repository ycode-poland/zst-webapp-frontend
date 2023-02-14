<template>
  <div class="page-loader" v-if="isloaded">
    <img src="@/assets/images/zst_logo.svg" alt="">
  </div>
</template>
<script>
export default {
  name: 'PageLoader',
  data: () => ({
    isloaded: true
  }),
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setInterval(() => {
          this.isloaded = false;
        }, 500)
      }
    }
  }
}
</script>
<style scoped lang="less" src="@/assets/style/global.less" />
