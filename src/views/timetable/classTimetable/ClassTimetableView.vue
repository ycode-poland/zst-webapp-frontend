<template>
    <div>
        <header>
            <div class="nav-bar">
                <p>ok</p>
            </div>
        </header>
        <main>
            <div class="time-table">
                <table>
                    <thead class="table-head">
                        <tr>
                            <th> godz. </th>
                            <th v-for="(item,index) in list.weekdays" :key="item.id"> {{weekdays[index]}} </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-for="item in list.hours" :key="item"></td>
                        </tr>
                        <tr>
                            <td v-for="item in list.weekdays" :key="item">
                                {{item[0]}}
                                <!-- <template v-if="item!=null">
                                  {{item[0].subjects}}
                                </template> -->

                            </td>
                        </tr>
                        <!-- <tr>
                            <td v-for="item in list.weekdays['1']" :key="item"></td>
                        </tr>
                        <tr>
                            <td v-for="item in list.weekdays['2']" :key="item"></td>
                        </tr>
                        <tr>
                            <td v-for="item in list.weekdays['3']" :key="item"></td>
                        </tr>
                        <tr>
                            <td v-for="item in list.weekdays['4']" :key="item"></td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</template>

<style scoped lang="less" src="@/assets/style/views/timetable/classTimetable/schoolboard.less"/>
<script>
import axios from "axios"
export default {
    data: () => ({
        name: "",
        list:[],
        weekdays:["Poniedziałek","Wtorek","Środa","Czwartek","Piątek"]

        }),
        async mounted(){
            let result = await axios.get("https://zst-timetable-scrapper.ycode.ovh/plans/2CT");
            this.list=result.data;
        }
    }
    </script>
