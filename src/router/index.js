import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import AboutUsView from "@/views/aboutus/AboutUsView.vue";
import TimetableView from "@/views/timetable/TimetableView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUsView
    // children: [
    //   {
    //   path: 'blog',
    //   name: 'blog',
    //   component: ok
    //   },
    //   {
    //     path: 'contact',
    //     name: 'contact',
    //     component: ok
    //   },
    //   {
    //     path: 'schoolboard',
    //     name: 'schoolboard',
    //     component:ok
    //   }
    // ]
  },
  {
    path: '/timetable',
    name: 'timetable',
    component: TimetableView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;

