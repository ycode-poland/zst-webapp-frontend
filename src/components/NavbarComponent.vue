<template>
    <nav class="navbar" id="navbar" :class="{ 'is-hidden': !showHeader }">
        <router-link to="/" @click="scrollToTop">
            <font-awesome-icon icon="fa-solid fa-house"/>
        </router-link>
        <font-awesome-icon icon="fa-solid fa-bars" id="bars" @click="isOpen = !isOpen"/>
        <template v-for="(element, i) in elements" :key="i">
            <div class="navbar-elements">
                <a :href="element.path" v-if="element.path.startsWith('http')" class="hua" >{{ element.name }}</a>
                <router-link :to="element.path" @click="scrollToTop" v-else class="hua">{{ element.name }}</router-link>
            </div>
        </template>
    </nav>
    <div class="burger ok"  :class="isOpen?`ok2`: `ok`">
        <div class="inner" >
            <div class="img">
                <font-awesome-icon icon="fa-solid fa-bars" id="bars" @click="isOpen = !isOpen"/>
                <div class="icon">
                    <img src="@/assets/images/flag.svg" alt="">
                    <img src="@/assets/images/eagle.svg" alt="">
                </div>
            </div>
            <div class="links">
                <template v-for="(element, i) in elements" :key="i">
                    <a :href="element.path" v-if="element.path.startsWith('http')" class="hua" >{{ element.name }}</a>
                    <router-link :to="element.path" @click="scrollToTop, isOpen = !isOpen"  v-else class="hua">{{ element.name }}</router-link>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavbarComponent',
    props: ['elements'],
    data: () => ({
        showHeader: true,
        fixed: false,
        isOpen: false,
    }),
    created() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll() {
            let header = document.querySelector('.header').getBoundingClientRect();
            this.showHeader = window.pageYOffset < header.height
        },
        scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>
<style scoped lang="less" src="@/assets/style/components/navbar.less" />
