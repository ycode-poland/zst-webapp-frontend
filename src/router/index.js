import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import AboutUsView from "@/views/aboutus/AboutUsView.vue";
import TimetableView from "@/views/timetable/TimetableView.vue";
import PanelView from "@/views/dashboard/PanelView.vue";
import LoginView from "@/views/dashboard/LoginView.vue";
import DashboardRouteView from "@/views/dashboard/DashboardRouteView.vue";
import PanelUsersView from "@/views/dashboard/PanelUsersView.vue";
import PanelUsersManageView from "@/views/dashboard/PanelUsersManageView.vue";
import ErrorView from "@/views/ErrorView.vue";
import Schoolboard from "@/views/timetable/classTimetable/ClassTimetableView.vue";
import Application from  "@/views/application/ApplicationView.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUsView,
    },
    {
        path: '/application',
        name: 'application',
        component: Application,
    },
    {
        path: '/timetable',
        name: 'timetable',
        component: TimetableView,
    },
    {
        path: '/timetable/schoolboard',
        name: 'schoolboard',
        component: Schoolboard
    },
    {
        path: '/panel',
        name: 'Panel',
        component: DashboardRouteView,
        props: true,
        children: [
            {
                path: '',
                name: 'PanelView',
                component: PanelView,
                props: true
            },
            {
                path: 'users',
                name: 'PanelUsersView',
                component: PanelUsersView
            },
            {
                path: 'users/:userId',
                name: 'PanelUsersManageView',
                component: PanelUsersManageView
            },
            {
                path: 'posts',
                name: 'PanelPostsView',
                component: PanelView
            },
            {
                path: 'account',
                name: 'PanelMyAccountView',
                component: PanelView
            },
            {
                path: 'login',
                name: 'PanelLoginView',
                component: LoginView
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'ErrorView',
        component: ErrorView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
