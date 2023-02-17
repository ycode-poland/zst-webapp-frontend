<template>
    <div>
        <nav class="navbar" id="navbar" :class="{ 'is-hidden': !showHeader }">
            <a href="/"><font-awesome-icon icon="fa-solid fa-house" /></a>
            <template v-for="(element, i) in elements" :key="i">
                <a :href="element.path" v-if="element.path.startsWith('http')" class="hua" >{{ element.name }}</a>
                <router-link :to="element.path" v-else class="hua">{{ element.name }}</router-link>
            </template>
        </nav>
        <main>
            <div class="pos-obj">
                <div class="class-obj" v-for="item in list" :key="item.id">
                    <router-link :to="`/plan/${item.year}${item.name}`"><h1>{{item.year}}{{item.name}}</h1></router-link>
                </div>
            </div>
        </main>
    </div>
</template>
<style scoped lang="less" src="@/assets/style/views/timetable/timetable.less"/>
<script>
import {useTimetableStore} from "@/stores/useTimetableStore";
import {useApplicationLoadingStore} from "@/stores/appLoadingStore";
import {computed} from "vue";

export default {
    data: () => ({
        name: "",
        props: ['elements'],
        elements: [
            {
                name: 'odziały',
                path: '/plan/1AT'
            },
            {
                name: 'nauczyciele',
                path: '/plan/2AT'
            },
            {
                name: 'sale',
                path: '/plan/3AT'
            }
        ]
    }),
    setup() {

        const appLoading = useApplicationLoadingStore();
        appLoading.applicationLoading();
        const store = useTimetableStore()
        store.findAllClasses().then(() => {
            appLoading.applicationLoaded();
        })
        return {
            list: computed(() => store.getClasses)
        }
    }
// async mounted(){
//     let result = await axios.get("https://zst-timetable-scrapper.ycode.ovh/plans");
//     this.list=result.data;
// }
}
</script>
