<template>
    <div class="footer">
        <div class="partner">
            <Carousel :autoplay="2000" :itemsToShow="3.95" :wrapAround="true" :transition="500">
                <Slide v-for="slide in images" :key="slide">
                    <div class="carousel__item"><a href=""><img :src="slide.imageUrl"></a></div>
                </Slide>
            </Carousel> 
        </div>
        <div class="sponsors">
            <a href="https://zetorzeszow.pl/">
                <img src="http://www.zstrzeszow.pl/img/partner_logos/xzetorzeszow.png.pagespeed.ic.mgpsVZUxQq.webp" alt="">
            </a>
            <a href="https://fibrain.pl/">
                <img src="http://www.zstrzeszow.pl/img/partner_logos/xfibrain.png.pagespeed.ic.twamiqpulL.webp" alt="">
            </a>
            <a href="https://pl.asseco.com/">
                <img src="http://www.zstrzeszow.pl/img/partner_logos/xasseco_white.png.pagespeed.ic.236UJLdCwU.webp" alt="">
            </a>
            <a href="https://roxart.pl/">
                <img src="http://www.zstrzeszow.pl/img/partner_logos/xroxart.png.pagespeed.ic.I8Q2Z97vtd.webp" alt="">
            </a>
            <a href="https://pwrze.com/">
                <img src="http://www.zstrzeszow.pl/img/partner_logos/xpratt_w_white.png.pagespeed.ic.GTJG363hqM.webp" alt="">
            </a>
        </div>
        <footer>
            <h3 tabindex="0">&copy; 2022 Concept, Design & Code: <a href="https://ycode.ovh">ycode</a></h3>
        </footer>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    name: 'FooterComponent',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        currentSlide: 0,
        images: [
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xmobitouch.jpg.pagespeed.ic.cP01m29W0Z.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xasseco.jpg.pagespeed.ic.unsgEuSrMR.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xg2a.png.pagespeed.ic.2A8XZYouLB.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xzeto.png.pagespeed.ic.Ij4IPvbVYJ.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xpratt.png.pagespeed.ic.e6CQnIS13m.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xfibrain-logo.png.pagespeed.ic.9oui3ZycVD.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xprimebit.png.pagespeed.ic.7hmPdd6wxU.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xroxart_logo_kolor.png.pagespeed.ic.5FCEGBLMI-.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xcc-metal.jpg.pagespeed.ic.J70Ax2YPAp.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xlogo-wsiiz.png.pagespeed.ic.9XXt-xVCJY.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xpolitechnika.jpg.pagespeed.ic.6hUNk-XTUX.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xbsh.jpg.pagespeed.ic.J2_hKp0MXJ.jpg', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xff.jpg.pagespeed.ic.Yes9lrXz9g.webp', name: 'mobitouch' },
            { imageUrl: 'http://www.zstrzeszow.pl/img/partner_logos/xwbx.jpg.pagespeed.ic.--GkZBI9hi.webp', name: 'mobitouch' }
        ]
     }),
    methods: {
        slideTo(val) {
        this.currentSlide = val
    },
  },
}

</script>

<style scoped lang="less" src="@/assets/style/components/footer.less"></style>
<style scoped lang="less">

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);

}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);

}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

</style>
