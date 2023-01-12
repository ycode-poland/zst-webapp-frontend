<template>
	<header class="header">
		<div class="icons">
			<img src="http://www.zstrzeszow.pl/img/svg_icons/flag.svg" alt="">
			<img src="http://www.zstrzeszow.pl/img/svg_icons/eagle.svg" alt="">
		</div>
		<div class="content">
			<img src="http://www.zstrzeszow.pl/img/svg_icons/zst_logo.svg" alt="">
			<h1>ZESPÓŁ SZKÓŁ TECHNICZNYCH</h1>
			<h3>im. Eugeniusza Kwiatkowskiego w Rzeszowie</h3>
		</div>
	</header>
	<nav class="navbar" id="navbar" :class="{ 'is-hidden': !showHeader }">
		<template v-for="(element, i) in elements" :key="i">
			<a :href="element.path" v-if="element.path.startsWith('http')" class="hua">{{ element.name }}</a>
			<router-link :to="element.path" v-else class="hua">{{ element.name }}</router-link>
		</template>
	</nav>
</template>

<script>
export default {
	name: 'NavbarComponent',
	data: () => ({
		showHeader: true,
		fixed: false,
		elements: [
		{
			name: "O nas",
			path: "/about"
		},
		{
			name: "Plan lekcji",
			path: "/timetable"
		},
		{
			name: "E-dziennik",
			path: "https://adfslight.resman.pl/LoginPage.aspx"
		},
		{
			name: "Rekrutacja",
			path: "/recrutation"
		},
		{
			name: "Lokalizacja",
			path: "/localization"
		}
		]
	}),
	computed: {
		isExternalLink() {
			return typeof this.to === 'string' && this.to.startsWith('http')
		},
	},
	created() {
		window.addEventListener('scroll', this.onScroll)
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.onScroll)
	},
	methods: {
		onScroll() {
			let header = document.querySelector('.header').getBoundingClientRect();
			this.showHeader = window.pageYOffset < header.height
		}
	}
}
</script>

<style scoped lang="less" src="@/assets/style/components/navbar.less" />
