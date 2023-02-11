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
      <div class="posts">
        <h1>SZKOLNE WYDARZENIA I OGŁOSZENIA</h1>
<!--        <div class="parent">-->
<!--          <div class="div1">-->
<!--            <div class="blog-slider" v-for="index in 5" :key="index">-->
<!--              <div class="blog-slider__wrp swiper-wrapper">-->
<!--                <div class="blog-slider__item swiper-slide">-->
<!--                  <div class="blog-slider__img">-->
<!--                    <img src="http://www.zstrzeszow.pl/article/2022-2023/talenty_jutra/IMG_5416_t.JPG" alt="">-->
<!--                  </div>-->
<!--                  <div class="blog-slider__content">-->
<!--                    <span class="blog-slider__code">29 Stycznia 2023 | Zamieszczone przez <b>Administrator</b></span>-->
<!--                    <div class="blog-slider__title">Ogólnopolska Gala Finałowa "Talenty Jutra"</div>-->
<!--                    <div class="blog-slider__text">W dniu 10.01.2023r. pięcioro uczniów naszej szkoły uczestniczyło w wycieczce do Planetarium w Chorzowie, gdzie wzięli udział w Ogólnopolskiej Gali Finałowej "Talenty Jutra". W ramach wydarzenia odbyły się dwa wykłady na temat funkcji mózgu oraz początkowej fazy opracowywania leków. Młodzież wraz z przewodnikiem zwiedziła planetarium i obejrzała pokaz audiowizualny pod tytułem „Jesteśmy gwiazdami”, przedstawiający proces powstania kosmosu.</div>-->
<!--                    <a href="#" class="blog-slider__button">Czytaj wiecej</a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="div2">4</div>-->
<!--        </div>-->
        <div class="cards">
          <div class="blog-slider" v-for="index in 1" :key="index">
            <div class="blog-slider__wrp swiper-wrapper">
              <div class="blog-slider__item swiper-slide">
                <div class="blog-slider__img">
                  <img src="http://www.zstrzeszow.pl/article/2022-2023/talenty_jutra/IMG_5416_t.JPG" alt="">
                </div>
                <div class="blog-slider__content">
                  <span class="blog-slider__code">29 Stycznia 2023 | Zamieszczone przez <b>Administrator</b></span>
                  <div class="blog-slider__title">Ogólnopolska Gala Finałowa "Talenty Jutra"</div>
                  <div class="blog-slider__text">W dniu 10.01.2023r. pięcioro uczniów naszej szkoły uczestniczyło w wycieczce do Planetarium w Chorzowie, gdzie wzięli udział w Ogólnopolskiej Gali Finałowej "Talenty Jutra". W ramach wydarzenia odbyły się dwa wykłady na temat funkcji mózgu oraz początkowej fazy opracowywania leków. Młodzież wraz z przewodnikiem zwiedziła planetarium i obejrzała pokaz audiowizualny pod tytułem „Jesteśmy gwiazdami”, przedstawiający proces powstania kosmosu.</div>
                  <a href="#" class="blog-slider__button">Czytaj wiecej</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <button class="arrow">
            <font-awesome-icon icon="fa-solid fa-angle-left" />
          </button>
          <button v-for="index in 7" :key="index" class="pagination__number">{{ index }}</button>
          <button class="pagination__number pagination__number--active">8</button>
          <button class="arrow">
            <font-awesome-icon icon="fa-solid fa-angle-right" />
          </button>
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
