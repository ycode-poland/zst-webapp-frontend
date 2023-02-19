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
import SchoolboardView from "@/views/timetable/schoolboard/SchoolboardView.vue";
import ApplicationView from  "@/views/application/ApplicationView.vue";
import ProgrammerView from  "@/views/jobs/ProgrammerView.vue";
import MechanicView from  "@/views/jobs/MechanicView.vue";
import InformaticanView from  "@/views/jobs/InformaticanView.vue";
import MarketerView from  "@/views/jobs/MarketerView.vue";
import ElectronicanView from  "@/views/jobs/ElectronicanView.vue";


const routes = [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/onas',
            name: 'aboutus',
            component: AboutUsView,
        },
        {
            path: '/rekrutacja',
            name: 'application',
            component: ApplicationView,
        },
        {
            path: '/plan',
            name: 'timetable',
            component: TimetableView,
        },
        {
            path: '/plan/:class',
            name: 'schoolboard',
            component: SchoolboardView
        },

        {
            path: '/zawod/programista',
            name: 'programmer',
            component: ProgrammerView
        },
        {
            path: '/zawod/mechanik',
            name: 'mechanican',
            component: MechanicView
        },
        {
            path: '/zawod/informatyk',
            name: 'informatican',
            component: InformaticanView
        },
        {
            path: '/zawod/elektronik',
            name: 'electronican',
            component: ElectronicanView
        },
        {
            path: '/zawod/raklama',
            name: 'marketer',
            component: MarketerView
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
