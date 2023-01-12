<template>
	<h1>{{ user }}</h1>
</template>
<script>
import {useUsersModuleStore} from "@/stores/usersModuleStore";

export default {
	name: 'PanelUsersManageView',
	data: () => {
		return {
			user: null
		}
	},
	created() {
		const store = useUsersModuleStore()
		store.findUserById(this.$route.params.userId, this.$router).then(() => {
			this.user = store.getUser
		})
	}
}
</script>
