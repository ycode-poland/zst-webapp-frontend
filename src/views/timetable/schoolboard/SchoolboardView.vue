<template>
    <div>
        <nav>
            <div class="nav-bar">
                <a href="http://localhost:8080/"><font-awesome-icon icon="fa-solid fa-house" /></a>
                <p>{{ $route.params.class }}</p>
                <p>ok</p>
            </div>
        </nav>
        <div class="side-bar">
            <div class="elements-sidebar">
                <p @click="up = !up">odział<font-awesome-icon v-if="!up" icon="fa-solid fa-caret-down" /><font-awesome-icon v-else icon="fa-solid fa-caret-up" /></p>
                <div class="unit">
                    <ul v-if='up' class="unit-down">
                        <template v-for="item in list1" :key="item.id">
                            <li><router-link :to="`/timetable/${item.year}${item.name}`">{{ item.year }}{{ item.name }}</router-link></li>
                        </template>
                    </ul>
                    <ul v-else class="unit-up"></ul>
                </div>
                <p>sala<font-awesome-icon icon="fa-solid fa-caret-down" /> </p>
                <p>nauczyciel<font-awesome-icon icon="fa-solid fa-caret-down" /></p>
            </div>
        </div>
        <main>
            <div class="time-table">
                <table>
                    <thead>
                        <tr>
                            <th class="number">Nr.</th>
                            <th class="hours"> godz. </th>
                            <th v-for="(day,index) in days" :key="day"> {{days[index]}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,i) in weekdays" :key="item">
                            <td class="number">{{i+1}}.</td>
                            <td class="hours">
                                {{hours[i]}}
                            </td>
                            <td v-for="lesson in item" :key="lesson" class="td-tbody">
                                <template v-if="lesson">
                                    <template v-for="subject in lesson.subjects" :key="subject">
                                        <p> {{subject.subject}} <span>S.{{subject.classroom}} <span class="teacher">{{subject.teacher}}</span></span></p><br>
                                    </template>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</template>
<style scoped lang="less" src="@/assets/style/views/timetable/classTimetable/schoolboard.less"/>
<script>
import axios from "axios";

export default {
    name: 'ErrorView',
    data: () => ({
        days: ['Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piątek'],
        hours: [],
        weekdays: [],
        list: [],
        list1: [],
        unit: false,
    }),
    async created() {
        let result = await axios.get("https://zst-timetable-scrapper.ycode.ovh/plans");
        axios.get(`https://zst-timetable-scrapper.ycode.ovh/plans/${this.$route.params.class}?direction=Row`).then(response => {
            this.list1=result.data;
            this.list = response.data.weekdays;
            this.hours = response.data.hours;
            this.weekdays = response.data.weekdays;
        })
    },
    async updated(){
        let result = await axios.get("https://zst-timetable-scrapper.ycode.ovh/plans");
        axios.get(`https://zst-timetable-scrapper.ycode.ovh/plans/${this.$route.params.class}?direction=Row`).then(response => {
            this.list1=result.data;
            this.list = response.data.weekdays
            this.hours = response.data.hours
            this.weekdays = response.data.weekdays
        })
    }
}
</script>
