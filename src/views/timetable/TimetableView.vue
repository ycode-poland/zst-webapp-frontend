<template>
    <div>
        <Navbar :elements="elements"/>
        <main>
            <div class="pos-obj">
                <div class="class-obj" v-for="item in list" :key="item.id">
                    <router-link :to="`/plan/${item.year}${item.name}`"><h1>{{item.year}}{{item.name}}</h1></router-link>
                </div>
            </div>
        </main>
    </div>
</template>
<style scoped lang="less" src="@/assets/style/views/timetable/timetable.less"></style>

<script>
import {useTimetableStore} from "@/stores/useTimetableStore";
import {computed} from "vue";
import Navbar from '@/components/NavbarComponent.vue';

export default {
    data: () => ({
        elements: [
            {
                name: 'Odziały',
                path: '/plan/1AT'
            },
            {
                name: 'Nauczyciele',
                path: '/plan/2AT'
            },
            {
                name: 'Sale',
                path: '/plan/3AT'
            }
        ]
    }),
    components: {
        Navbar
    },
    setup() {
        const store = useTimetableStore()
        store.findAllClasses()
        return {
        list: computed(() => store.getClasses)
    }
  }

}
</script>
