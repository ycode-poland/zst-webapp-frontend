<template>
    <Navbar v-if="!$route.name.startsWith('Panel') && !$route.name.startsWith('schoolboard')" :elements="elements"/>
    <router-view/>
    <Footer v-if="!$route.name.startsWith('Panel')"/>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';
import Footer from "@/components/FooterComponent.vue";

export default {
    data: () => ({
        elements: [
            {
                name: "O nas",
                path: "/aboutus"
            },
            {
                name: "Plan lekcji",
                path: "/timetable",
            },
            {
                name: "E-dziennik",
                path: "https://adfslight.resman.pl/LoginPage.aspx"
            },
            {
                name: "Rekrutacja",
                path: "/application"
            },
            {
                name: "Lokalizacja",
                path: "/localization"
            }
        ]
    }),
    components: {
        Navbar, Footer
    },

}
</script>

<style lang="less" src="@/assets/style/global.less"/>
