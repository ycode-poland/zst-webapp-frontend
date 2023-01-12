<template>
	<aside v-if="user" class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
		<div>
			<div class="mt-8 text-center">
				<img :src="`https://ui-avatars.com/api/?name=${user.username}&background=random&format=svg&rounded=true`" class="m-auto w-2/5">
				<h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{{ user.username }}</h5>
				<span class="hidden text-gray-400 lg:block">{{ user.email }}</span>
			</div>

			<ul class="space-y-2 tracking-wide mt-8">
				<li v-for="(item, index) in items" :key="index">
					<template v-if="user.roles.find(role => role.role === item.role)">
						<router-link :to="item.path" :class="item.route.split(' ').includes($route.name) ? 'bg-gradient-to-r text-white' : ''" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:text-white">
							<font-awesome-icon :icon="item.icon" />
							<span>{{ item.name }}</span>
						</router-link>
					</template>
				</li>
			</ul>
		</div>

		<div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
			<button @click="logout" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
				</svg>
				<span class="group-hover:text-gray-700">Wyloguj się</span>
			</button>
		</div>
	</aside>
</template>
<script>
import {useUserAuthorizationStore} from "@/stores/userAuthorizationStore";

export default {
	name: 'SidebarComponent',
	props: ['user'],
	data: () => {
		return {
			items: [
			{
				name: 'Panel',
				icon: 'fa-solid fa-house',
				path: '/panel',
				route: 'PanelView',
				role: 'user'
			},
			{
				name: 'Posty',
				icon: 'fa-solid fa-newspaper',
				path: '/panel/posts',
				route: 'PanelPostsView',
				role: 'user'
			},
			{
				name: 'Moje konto',
				icon: 'fa-solid fa-user',
				path: '/panel/account',
				route: 'PanelMyAccountView',
				role: 'user'
			},
			{
				name: 'Użytkownicy',
				icon: 'fa-solid fa-users',
				path: '/panel/users',
				route: 'PanelUsersView PanelUsersManageView',
				role: 'global_admin'
			},
			]
		}
	},
	methods: {
		logout() {
			const store = useUserAuthorizationStore()
			store.logout()
		}
	}
}
</script>
