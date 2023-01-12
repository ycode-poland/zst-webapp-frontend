<template>
	<div class="home">
		<div class="jobs" :class="{ 'up': !navDetached }">

			<div class="card">
				<div class="card-inner">
					<div class="card-front">
						<img src="http://www.zstrzeszow.pl/_incl/xcode.jpg.pagespeed.ic.OWznRazLmz.webp" alt="">
						<h2>Technik<br>programista</h2>
					</div>
					<div class="card-back">
						<p>Projektowanie i programowanie stron/aplikacji webowych, aplikacji mobilnych oraz desktopowych wraz z obsługą relacyjnych baz danych</p>
						<router-link to="/profession/programmer">Odwiedź</router-link>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-inner">
					<div class="card-front">
						<img src="http://www.zstrzeszow.pl/_incl/x2019_028.jpg.pagespeed.ic._ihyZaXdOs.webp" alt="">
						<h2>Technik<br>mechanik</h2>
					</div>
					<div class="card-back">
						<p>Użytkowanie obrabiarek skrawających, organizacja i nadzorowanie procesów produkcji maszyn i urządzeń, komputerowe wspomaganie projektowania CAD</p>
						<router-link to="/profession/mechanican">Odwiedź</router-link>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-inner">
					<div class="card-front">
						<img src="http://www.zstrzeszow.pl/_incl/xreklama.jpg.pagespeed.ic.ZC9rIIZfJM.webp" alt="">
						<h2>Technik<br>reklamy</h2>
					</div>
					<div class="card-back">
						<p>Ekonomia, marketing, public-relations, grafika komputerowa, fotografia cyfrowa, marketing, planowanie i tworzenie reklamy wizualnej </p>
						<router-link to="/profession/advertising">Odwiedź</router-link>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-inner">
					<div class="card-front">
						<img src="http://www.zstrzeszow.pl/_incl/xelektronik.jpg.pagespeed.ic.Un_-3p7Dks.webp" alt="">
						<h2>Technik<br>elektronik</h2>
					</div>
					<div class="card-back">
						<p>Montaż, instalacja i eksploatacja układów i urządzeń elektronicznych, projektowanie inteligentnych domów, automatyka, robotyka, informatyka </p>
						<router-link to="/profession/electronican">Odwiedź</router-link>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-inner">
					<div class="card-front">
						<img src="http://www.zstrzeszow.pl/_incl/xinformatyk_1.jpg.pagespeed.ic.Z85UaMbs7S.webp" alt="">
						<h2>Technik<br>informatyk</h2>
					</div>
					<div class="card-back">
						<p>Projektowanie i programowanie stron/aplikacji webowych, projektowanie i administrowanie sieciami LAN oraz serwerowymi systemami operacyjnymi</p>
						<router-link to="/profession/informatican">Odwiedź</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: () => ({
		navDetached: false,
	}),
	created() {
		window.addEventListener('scroll', this.onScroll)
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.onScroll)
	},
	methods: {
		onScroll() {
			let header = document.querySelector('.header').getBoundingClientRect();
			this.navDetached = window.pageYOffset < header.height
		}
	}
}
</script>
<style scoped lang="less" src="@/assets/style/views/home.less"/>
