import {defineStore} from "pinia";
import axios from "axios";
import {useApplicationLoadingStore} from "@/stores/appLoadingStore";

export const useTimetableStore = defineStore('TimetableModuleStore', {
    state: () => ({
        classes: []
    }),
    getters: {
        getClasses: (state) => {
            return state.classes
        }
    },
    actions: {
        async findAllClasses(){
            useApplicationLoadingStore().applicationLoading()
            try {
                const response = await axios.get("https://zst-timetable-scrapper.ycode.ovh/plans")
                // useApplicationLoadingStore().applicationLoaded();
                this.classes = response.data
            }catch (error) {
                window.location.replace('/500')
            }
        }
    }
})
