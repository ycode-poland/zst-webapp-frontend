<template>
    <div>
        <main>
            <div class="pos-search">
                <x-input label="szukaj..." v-model="name"/>
            </div>
            <div class="pos-obj">
                <div class="class-obj" v-for="item in list" :key="item.id">
                    <h1> {{item.year}}{{item.name}}</h1>
                </div>
            </div> 
        </main>
    </div>
</template>
<style scoped lang="less" src="@/assets/style/views/timetable/timetable.less"></style>
<script>
import axios from "axios"
    export default {
    data: () => ({
      name: "",
      list:[]
    }),
  async mounted(){
    let result = await axios.get("https://zst-timetable-scrapper.ycode.ovh/plans");
    this.list=result.data;
    console.log(this.list);
  }
}
</script>
