<template>
	<div class="nav">
		<header class="header">
			<div class="content">
				<img src="http://www.zstrzeszow.pl/img/svg_icons/zst_logo.svg" alt="">
				<h1>ZESPÓŁ SZKÓŁ TECHNICZNYCH</h1>
				<h3>im. Eugeniusza Kwiatkowskiego w Rzeszowie</h3>
			</div>
		</header>
		<nav class="navbar" :class="{ 'is-hidden': !showHeader }">
			<ul>
				<!-- Update props with li -->
				<li>O nas</li>
				<li>Plan lekcji</li>
				<li>E-dziennik</li>
				<li>Rekrutacja</li>
				<li>Lokalizacja</li>
			</ul>
		</nav>
	</div>
</template>


<script>
export default {
	data: () => ({
		showHeader: true,
		scrollOffset: 750,
	}),
	async created() {
		window.addEventListener('scroll', this.onScroll)
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.onScroll)
	},
	methods: {
     // Toggle if navigation is shown or hidden
		onScroll() {
			let header = document.querySelector('.header').getBoundingClientRect();
			this.showHeader = window.pageYOffset+ 100 < header.height
		},
	}
}
</script>

<style scoped lang="less" src="@/assets/style/components/nav.less">
</style>
