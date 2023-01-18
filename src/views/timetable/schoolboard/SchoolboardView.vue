<template>
    <div>
        <nav>
            <div class="nav-bar">
                <p>ok</p>
            </div>
        </nav>
        <main>
            <div class="time-table">
                <div class="table parent">
                    <div class="thead div1">
                        <p> godz. </p>
                        <p v-for="day in days" :key="day"> {{ day }}</p>
                    </div>
                    <div class="tbody div2 parent2">
                        <div class="hours">
                            <p v-for="item in hours" :key="item">{{item}}</p>
                        </div>
                        <div v-for="(item, index) in weekdays" :key="index" :class="`tbody-content-${index}`">
                            <p v-for="lesson in item" :key="lesson">
                                <template v-if="lesson">
                                    <div v-for="subject in lesson.subjects" :key="subject">
                                        <p> {{ subject.subject }}</p>
                                        <a> {{ subject.classroom }} </a>
                                        <a> {{ subject.teacher }}</a>
                                    </div>
                                </template>
                                <template v-else>--</template>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<style scoped lang="less" src="@/assets/style/views/timetable/classTimetable/schoolboard.less"/>
<script>
import axios from "axios";

export default {
    name: 'ErrorView',
    data: () => {
        return {
            days: ['Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piątek'],
            hours: [],
            weekdays: []
        }
        },
        created() {
            axios.get('https://zst-timetable-scrapper.ycode.ovh/plans/2CT').then(response => {
                this.hours = response.data.hours
                this.weekdays = response.data.weekdays
                })
            }
        }
        </script>
