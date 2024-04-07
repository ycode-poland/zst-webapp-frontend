<template>
  <div class="footer">
    <div class="partner">
      <Carousel :autoplay="2000" :itemsToShow="slidesToShow" :wrapAround="true" :transition="500">
        <Slide v-for="slide in images" :key="slide">
          <div class="carousel__item"><img :src="slide.imageUrl"></div>
        </Slide>
      </Carousel>
    </div>
    <div class="sponsors">
      <a v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.url">
        <img :src="sponsor.imageUrl" :alt="sponsor.name">
      </a>
    </div>
    <footer>
      <h3 tabindex="0">&copy; 2022 - {{ new Date().getFullYear() }} Concept, Design & Code: <a href="https://ycode.pl">ycode</a></h3>
    </footer>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
  name: 'FooterComponent',
  components: { Carousel, Slide },
  data: () => ({
    slidesToShow: 4,
    sponsors: [
      { url: 'https://zetorzeszow.pl/', imageUrl: 'https://cdn.yshop.pl/files/J9WWi.webp', name: 'ZETO-Rzeszów' },
      { url: 'https://fibrain.pl/', imageUrl: 'https://cdn.yshop.pl/files/iX7jS.webp', name: 'fibrain' },
      { url: 'https://pl.asseco.com/', imageUrl: 'https://cdn.yshop.pl/files/kj7X6.webp', name: 'asseco' },
      { url: 'https://roxart.pl/', imageUrl: 'https://cdn.yshop.pl/files/NqrJ6.webp', name: 'roxart' },
      { url: 'https://pwrze.com/', imageUrl: 'https://cdn.yshop.pl/files/7WuJj.webp', name: 'pwrze' }
    ],
    images: [
      { imageUrl: 'https://cdn.yshop.pl/files/kmPBo.webp', name: 'mobitouch' },
      { imageUrl: 'https://cdn.yshop.pl/files/EylnG.webp', name: 'asseco' },
      { imageUrl: 'https://cdn.yshop.pl/files/fF9E3.webp', name: 'g2a' },
      { imageUrl: 'https://cdn.yshop.pl/files/IXe8x.webp', name: 'zeto' },
      { imageUrl: 'https://cdn.yshop.pl/files/nRtWQ.webp', name: 'pratt&whiteney' },
      { imageUrl: 'https://cdn.yshop.pl/files/W6uN0.webp', name: 'fibrain' },
      { imageUrl: 'https://cdn.yshop.pl/files/luIjh.webp', name: 'primebit' },
      { imageUrl: 'https://cdn.yshop.pl/files/LBK1A.webp', name: 'roxart' },
      { imageUrl: 'https://cdn.yshop.pl/files/zX5WX.webp', name: 'cc-metal' },
      { imageUrl: 'https://cdn.yshop.pl/files/gOFka.webp', name: 'WSIiZ' },
      { imageUrl: 'https://cdn.yshop.pl/files/MV5fa.webp', name: 'politechnika' },
      { imageUrl: 'https://cdn.yshop.pl/files/fjJgH.jpg', name: 'bsh' },
      { imageUrl: 'https://cdn.yshop.pl/files/legU0.webp', name: 'ff' },
      { imageUrl: 'https://cdn.yshop.pl/files/GLKek.webp', name: 'wbx' }
    ]
  }),
  created() {
    window.addEventListener('resize', () => {
      this.slidesToShow = 4;
      if (window.innerWidth < 757) {
        this.slidesToShow = 1
      }
    })
  }
}
</script>

<style scoped lang="less" src="@/assets/style/components/footer.less"></style>
<style scoped lang="less">
.carousel__item {
  user-select: none;
}
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
