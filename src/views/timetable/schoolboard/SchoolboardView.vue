<template>
    <div>
        <nav>
            <div class="nav-bar">
                <p>ok</p>
            </div>
        </nav>
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
    data: () => {
        return {
            days: ['Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piątek'],
            hours: [],
            weekdays: [],
            list: []
        }
        },
        created() {
            axios.get('https://zst-timetable-scrapper.ycode.ovh/plans/2CT?direction=Row').then(response => {
                this.list = response.data.weekdays
                this.hours = response.data.hours
                this.weekdays = response.data.weekdays
                })
            }
        }
        </script>
