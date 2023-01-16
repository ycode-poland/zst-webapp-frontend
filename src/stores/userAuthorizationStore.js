import {defineStore} from "pinia";
import axios from "axios";
import {useApplicationLoadingStore} from "@/stores/appLoadingStore";

export const useUserAuthorizationStore = defineStore("UserAuthorizationStore", {
    state: () => ({
        isLoggedIn: false,
        userProfile: null
    }),
    getters: {
        isUserLoggedIn: (state) => {
            return state.isLoggedIn
        },
        getProfile: (state) => {
            return state.userProfile
        }
    },
    actions: {
        logIn(username, password, toast) {
            axios.post('http://localhost:3000/auth/login', {
                email: username,
                password: password
            }).then(response => {
                localStorage.setItem('accessToken', response.data.accessToken)
                this.isLoggedIn = true
                window.location.replace('/panel')
                toast.success('Poprawnie zalogowano!')
            }).catch((error) => {
                if(!error.response) return toast.error('Wystapil niespodziewany blad podczas komunikacji z API!')
                const message = error.response.data['message']
                toast.error(Array.isArray(message) ? message[0] : message)
            })
        },
        getUserProfile(){
            axios.get('http://localhost:3000/auth/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(response => {
                useApplicationLoadingStore().applicationLoaded()
                this.userProfile = response.data
                this.isLoggedIn = true
            }).catch(() => {
                useApplicationLoadingStore().applicationLoaded()
                this.isLoggedIn = false
            })
        },
        logout() {
            axios.delete('http://localhost:3000/auth/logout', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(() => {
                useApplicationLoadingStore().applicationLoaded()
                this.userProfile = null
                this.isLoggedIn = false
            }).catch(() => {
                this.isLoggedIn = false
            })
            window.location.replace('/panel/login')
            localStorage.clear()
        }
    }
})