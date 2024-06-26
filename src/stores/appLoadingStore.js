import {defineStore} from "pinia";

export const useApplicationLoadingStore = defineStore("LoadingStore", {
    state: () => ({
        loaded: false
    }),
    getters: {
        isApplicationLoading: (state) => {
            return state.loaded
        }
    },
    actions: {
        applicationLoading() {
            this.loaded = false;
        },
        applicationLoaded() {
            setTimeout(() => {
                this.loaded = true
            }, 500)
        }
    }
})
