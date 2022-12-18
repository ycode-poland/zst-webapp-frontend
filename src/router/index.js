import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import PanelView from "@/views/dashboard/PanelView.vue";
import LoginView from "@/views/dashboard/LoginView.vue";
import DashboardRouteView from "@/views/dashboard/DashboardRouteView.vue";
import PanelUsersView from "@/views/dashboard/PanelUsersView.vue";
import PanelUsersManageView from "@/views/dashboard/PanelUsersManageView.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
