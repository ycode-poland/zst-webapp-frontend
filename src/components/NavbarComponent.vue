<template>
    <header class="header">
        <div class="icons">
            <img src="http://www.zstrzeszow.pl/img/svg_icons/flag.svg" alt="">
            <img src="http://www.zstrzeszow.pl/img/svg_icons/eagle.svg" alt="">
        </div>
        <div class="content">
            <img src="http://www.zstrzeszow.pl/img/svg_icons/zst_logo.svg" alt="">
            <h1>ZESPÓŁ SZKÓŁ TECHNICZNYCH</h1>
            <h3>im. Eugeniusza Kwiatkowskiego w Rzeszowie</h3>
        </div>
    </header>
    <nav class="navbar" id="navbar" v-if="!$route.name.startsWith('timetable')" :class="{ 'is-hidden': !showHeader }">
        <router-link to="/"><font-awesome-icon icon="fa-solid fa-house"/></router-link>
        <template v-for="(element, i) in elements" :key="i">
            <a :href="element.path" v-if="element.path.startsWith('http')" class="hua" >{{ element.name }}</a>
            <router-link :to="element.path" v-else class="hua">{{ element.name }}</router-link>
        </template>
    </nav>
</template>

<script>
export default {
    name: 'NavbarComponent',
    props: ['elements'],
    data: () => ({
        showHeader: true,
        fixed: false,
    }),
    computed: {
        isExternalLink() {
            return typeof this.to === 'string' && this.to.startsWith('http')
        },
    },
    created() {
        window.addEventListener('scroll', this.onScroll)
        console.log(this.foo)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll() {
            let header = document.querySelector('.header').getBoundingClientRect();
            this.showHeader = window.pageYOffset < header.height
        }
    }





}
</script>

<style scoped lang="less" src="@/assets/style/components/navbar.less" />
