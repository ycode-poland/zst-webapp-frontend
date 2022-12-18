<template>
  <div v-if="$route.name !== 'LoginView' && isApplicationLoading" class="h-screen bg-white">
    <SidebarComponent :user="userProfile ? userProfile : user"/>
    <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
          <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">ZST Rzeszów</h5>
          <button class="w-12 h-16 -mr-2 border-r lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div class="px-6 pt-6 2xl:container">
        <router-view :user="userProfile ? userProfile : user" :loggedIn="isLoggedIn" />
      </div>
    </div>
  </div>
  <div v-else>
    <router-view v-if="isApplicationLoading" :user="userProfile" :loggedIn="isLoggedIn" />
  </div>
  <div v-if="!isApplicationLoading">
    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
    </div>
  </div>
</template>
<script>
import {useApplicationLoadingStore} from "@/stores/appLoadingStore";
import {computed} from "vue";
import {useUserAuthorizationStore} from "@/stores/userAuthorizationStore";
import SidebarComponent from "@/components/dashboard/SidebarComponent.vue";

export default {
  components: { SidebarComponent },
  props: ['user'],
  setup() {
    const application = useApplicationLoadingStore()
    application.applicationLoading()
    const authorization = useUserAuthorizationStore();
    authorization.getUserProfile()
    return {
      isApplicationLoading: computed(() => application.isApplicationLoading),
      isLoggedIn: computed(() => authorization.isUserLoggedIn),
      userProfile: computed(() => authorization.getProfile)
    }
  }
}
</script>
