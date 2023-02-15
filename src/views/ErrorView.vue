<template>
  <div class="error">
    <h1>Not Found!</h1>
  </div>
</template>
<script>
export default {
  name: 'ErrorView'
}
</script>
<style lang="less" scoped>
.error {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    font-size: 36px;
    font-weight: 200;
  }
}
</style>
