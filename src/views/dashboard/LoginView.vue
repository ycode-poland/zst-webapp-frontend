<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 class="font-bold text-center text-2xl mb-5">ZST rzeszów</h1>
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div class="px-5 py-7">
          <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
          <input type="email" class="border rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full" v-model="username" />
          <label class="font-semibold text-sm text-gray-600 pb-1 block">Hasło</label>
          <input type="password" class="border rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full" v-model="password" />
          <button @click="logIn" type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            Zaloguj
          </button>
        </div>
      </div>
      <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <router-link to="/" class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 ring-inset">
              <font-awesome-icon icon="fa-solid fa-arrow-left" />
              <span class="inline-block ml-1"> Powrót do ZST rzeszów</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useUserAuthorizationStore} from "@/stores/userAuthorizationStore";
import {computed} from "vue";

export default {
  data: () => {
    return {
      username: null,
      password: null
    }
  },
  setup() {
    const authorization = useUserAuthorizationStore();
    authorization.getUserProfile()
    return {
      isLoggedIn: computed(() => authorization.isUserLoggedIn),
      userProfile: computed(() => authorization.getProfile)
    }
  },
  mounted() {
    if (this.isLoggedIn)
      this.$router.push('/panel', {
        user: this.userProfile
      })
  },
  methods: {
    logIn(){
      const store = useUserAuthorizationStore();
      store.logIn(this.username, this.password, this.$toast)
    }
  }
}
</script>