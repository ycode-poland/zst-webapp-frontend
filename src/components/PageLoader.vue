<template>
  <div class="page-loader" v-if="isloaded">
    <div class="wrapper">
      <img class="outer" src="@/assets/images/outer-logo.png" alt="">
      <img class="inner" src="@/assets/images/inner-logo.png" alt="">
    </div>
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
