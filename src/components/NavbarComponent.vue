<template>
  <header class="header">
    <div class="content">
      <img src="http://www.zstrzeszow.pl/img/svg_icons/zst_logo.svg" alt="">
      <h1>ZESPÓŁ SZKÓŁ TECHNICZNYCH</h1>
      <h3>im. Eugeniusza Kwiatkowskiego w Rzeszowie</h3>
    </div>
  </header>
  <nav class="navbar" id="navbar" :class="{ 'is-hidden': !showHeader }">
    <ul>
      <li v-for="(element, index) in elements" :key="index">{{ element }}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data: () => ({
    showHeader: true,
    scrollOffset: 750,
    elements: ['O nas', 'Plan lekcji', 'E-dziennik', 'Rekrutacja', 'Lokalizacja']
  }),
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.showHeader = window.pageYOffset <= this.scrollOffset;
    }
  }
}
</script>

<style scoped lang="less" src="@/assets/style/components/navbar.less" />