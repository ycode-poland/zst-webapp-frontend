<template>
	<h1>rer</h1>
</template>
<script>
export default {
	name: 'PanelView',
	props: ['user', 'loggedIn'],
	created() {
		if (!this.loggedIn)
			this.$router.push('/panel/login')
	}
}
</script>
