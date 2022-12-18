<template>
  <div class="container mx-auto px-4 sm:px-8" v-if="users">
    <div class="py-8">
      <div>
        <h2 class="text-2xl font-semibold leading-tight">Uzytkownicy</h2>
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr class="bg-gray-100 border-b-2 border-gray-200 text-gray-600 tracking-wider uppercase text-xs">
                <th class="px-5 py-3 text-left font-semibold">Uzytkownik</th>
                <th class="px-5 py-3 text-left font-semibold">Adres e-mail</th>
                <th class="px-5 py-3 text-left font-semibold">Data utworzenia</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users.items" :key="user.id">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <img class="flex-shrink-0 w-10 h-10 w-full h-full rounded-full"
                         :src="`https://ui-avatars.com/api/?name=${user.username}&background=random&format=svg&rounded=true`" alt=""/>
                    <p class="ml-3 text-gray-900 whitespace-no-wrap">{{ user.username }}</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{ user.email }}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{ moment(user.created_at).format('YYYY-MM-DD HH:mm') }}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <span class="text-xs xs:text-sm text-gray-900">
                Liczba rekordów: {{ users.totalCount }}
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button @click="previous" class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l" :disabled="!users.hasPreviousPage">
                Poprzednia
              </button>
              <button @click="nextPage" class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r" :disabled="!users.hasNextPage">
                Nastepna
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useUsersModuleStore} from "@/stores/usersModuleStore";
import {useRouter} from "vue-router";

export default {
  data: () => {
    return {
      actual_page: 1,
      users: null
    }
  },
  mounted() {
    const usersStore = useUsersModuleStore()
    usersStore.findUsers(useRouter(), this.actual_page).then(() => {
      this.users = usersStore.users
    })
  },
  methods: {
    nextPage(){
      if (this.actual_page < this.users.totalPages) {
        this.actual_page = this.actual_page+1
      }
      const usersStore = useUsersModuleStore()
      usersStore.findUsers(useRouter(), this.actual_page).then(() => {
        this.users = usersStore.users
      })
    },
    previous() {
      if (this.actual_page > 1) {
        this.actual_page = this.actual_page - 1
      }
      const usersStore = useUsersModuleStore()
      usersStore.findUsers(useRouter(), this.actual_page).then(() => {
        this.users = usersStore.users
      })
    }
  }
}
</script>
