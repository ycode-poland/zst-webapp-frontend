import {defineStore} from "pinia";
import axios from "axios";
import {useToast} from "vue-toastification";
import useModal from "@/hooks/useModal";
import {useApplicationLoadingStore} from "@/stores/appLoadingStore";

export const useUsersModuleStore = defineStore('UsersModuleStore', {
    state: () => ({
        users: [],
        user: null
    }),
    getters: {
        getUsers: (state) => {
            return state.users
        },
        getUser: (state) => {
            return state.user;
        }
    },
    actions: {
        async findUsers(router, page){
            try {
                const response = await axios.get(`/users?pageNumber=${page}&pageSize=6`)
                this.users = response.data
            }catch (error) {
                router.push('/panel/login')
                useToast().error('Nie masz uprawnien do tego zasobu!')
            }
        },
        async findUserById(id, router) {
            try {
                const response = await axios.get(`/users/${id}`)
                this.user = response.data
            }catch (error) {
                router.push('/panel/login')
                useToast().error('Nie masz uprawnien do tego zasobu!')
            }
        },
        createUser(email, username, password) {
            axios.post('/users', {
                email: email,
                username: username,
                password: password
            }).then(() => {
                useToast().success('Dodano nowego uzytkownika!')
                useModal.close()
                useApplicationLoadingStore().applicationLoaded()
            }).catch((error) => {
                if(!error.response) return useToast().error('Wystapil niespodziewany blad podczas komunikacji z API!')
                const message = error.response.data['message']
                useToast().error(Array.isArray(message) ? message[0] : message)
            })
        }
    }
})