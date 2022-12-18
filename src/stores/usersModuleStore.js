import {defineStore} from "pinia";
import axios from "axios";
import {useToast} from "vue-toastification";

export const useUsersModuleStore = defineStore('UsersModuleStore', {
    state: () => ({
        users: []
    }),
    getters: {
        getUsers: (state) => {
            return state.users
        }
    },
    actions: {
        async findUsers(router, page){
            try {
                const response = await axios.get(`http://localhost:3000/users?pageNumber=${page}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                this.users = response.data
            }catch (error) {
                router.push('/panel/login')
                useToast().error('Nie masz uprawnien do tego zasobu!')
            }
        }
    }
})