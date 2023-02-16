<template>
  <div class="page-loader" :class="isloaded ? '' : 'hidden'">
    <div class="wrapper">
      <img class="outer1" src="@/assets/images/outer-logo1.png" alt="" draggable="false">
      <img class="outer2" src="@/assets/images/outer-logo2.png" alt="" draggable="false">
      <img class="inner" src="@/assets/images/inner-logo.png" alt="" draggable="false">
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageLoader',
  data: () => ({
    isloaded: true
  }),
  // mounted() {
  //   document.onreadystatechange = () => {
  //     if (document.readyState === 'complete') {
  //       setInterval(() => {
  //         this.isloaded = false;
  //       }, 500)
  //     }
  //   }
  // }
}
</script>
<style scoped lang="less" src="@/assets/style/global.less" />
