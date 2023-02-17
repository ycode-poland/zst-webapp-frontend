<template>
  <PageLoader :class="{ hidden: isApplicationLoading }"/>
  <router-view/>
</template>
<script setup>
import PageLoader from "@/components/PageLoader.vue";
import {useApplicationLoadingStore} from "@/stores/appLoadingStore";
import {computed} from "vue";

const appLoading = useApplicationLoadingStore();
appLoading.applicationLoading();
appLoading.applicationLoaded();
const isApplicationLoading = computed(() => appLoading.isApplicationLoading)
</script>
<style lang="less" src="@/assets/style/global.less"/>
