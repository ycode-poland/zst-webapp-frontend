<template>
    <PageLoader v-if="!isApplicationLoading"/>
    <Header v-if="!$route.name.startsWith('schoolboard')"/>
    <Navbar v-if="!$route.name.startsWith('timetable')" :elements="elements"/>
    <router-view/>
    <Footer v-if="!$route.name.startsWith('schoolboard')"/>
</template>
<script setup>
import PageLoader from "@/components/PageLoader.vue";
import {useApplicationLoadingStore} from "@/stores/appLoadingStore";
import {computed} from "vue";
import Navbar from '@/components/NavbarComponent.vue';
import Footer from "@/components/FooterComponent.vue";
import Header from "@/components/HeaderComponent.vue";

const appLoading = useApplicationLoadingStore();
appLoading.applicationLoading();
appLoading.applicationLoaded()
const isApplicationLoading = computed(() => appLoading.isApplicationLoading)



const elements = [
  {
    name: "O nas",
    path: "/onas"
  },
  {
    name: "Plan lekcji",
    path: "/plan",
  },
  {
    name: "E-dziennik",
    path: "https://adfslight.resman.pl/LoginPage.aspx"
  },
  {
    name: "Rekrutacja",
    path: "/rekrutacja"
  },
  {
    name: "Lokalizacja",
    path: "/localization"
  }
]

</script>
<style lang="less" src="@/assets/style/global.less"/>
