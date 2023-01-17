<template>
    <div>
        <header>
            <div class="nav-bar">
                <p>ok</p>
            </div>
        </header>
        <main>
            <div class="time-table">
                <div class="table">
                    <div class="thead">
                        <p> godz. </p>
                        <p v-for="(item,index) in list.weekdays" :key="item.id"> {{weekdays[index]}}</p>
                    </div>
                    <div class="tbody">
                        <div class="hours">
                            <p v-for="item in list.hours" :key="item">{{item}}</p>
                        </div>
                        <div class="tbody-content-0">
                            <p>--</p>
                            <p>--</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>--</p>
                            <p>--</p>
                        </div>
                        <div class="tbody-content-1">
                            <p>--</p>
                            <p>--</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>--</p>
                            <p>--</p>
                        </div>
                        <div class="tbody-content-2">
                            <p>--</p>
                            <p>--</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>--</p>
                            <p>--</p>
                        </div>
                        <div class="tbody-content-3">
                            <p>--</p>
                            <p>--</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>--</p>
                            <p>--</p>
                        </div>
                        <div class="tbody-content-4">
                            <p>--</p>
                            <p>--</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>85</p>
                            <p>--</p>
                            <p>--</p>
                        </div>
                    </div>
                </div>
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
