<template>
  <div class="content-wrap">
    <Navbar v-if="!$route.name.startsWith('schoolboard')" :elements="elements"/>
    <router-view/>
  </div>
  <Footer v-if="!$route.name.startsWith('schoolboard')"/>
</template>
<script setup>
import Navbar from '@/components/NavbarComponent.vue';
import Footer from "@/components/FooterComponent.vue";

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
