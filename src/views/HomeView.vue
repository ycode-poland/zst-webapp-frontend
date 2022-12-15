<template>
  <section class="header_area">
    <div class="navbar-area bg-white shadow-md">
      <div class="container relative">
        <div class="row items-center">
          <div class="w-full">
            <nav class="flex items-center justify-between py-4 navbar">
              <a href="/">
                <img src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5d3e6eeaf65125b0cc668845/picture" width="100px" alt="Logo">
              </a>
              <button class="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>
              <div>
                <ul id="nav" class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                  <li class="nav-item ml-5 lg:ml-11"><a class="active"   href="/">Główna</a></li>
                  <li class="nav-item ml-5 lg:ml-11"><a  href="/informacje">Informacje</a></li>
                </ul>
              </div>
<!--              <div class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">-->
<!--                <ul id="nav" class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">-->
<!--                  <li class="nav-item ml-5 lg:ml-11"><a class="active"   href="/">Główna</a></li>-->
<!--                  <li class="nav-item ml-5 lg:ml-11"><a  href="/informacje">Informacje</a></li>-->
<!--                </ul>-->
<!--              </div>-->
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div id="home" class="h-[900px] bg-gray relative z-10 overflow-hidden lg:flex items-center" style="background: url(https://atlasedukacji.pl/placowki/institution/gallery-photo?institutionGalleryPhotoId=727); background-size: cover; background-repeat: no-repeat;">
      <div class="header_shape hidden lg:block"><img class="logo_bg" src="http://www.zstrzeszow.pl/img/svg_icons/zst_logo.svg" alt="Header Image"></div>
      <div class="header_image flex items-center">
        <div class="image 2xl:pl-25" ><img class="max-w-full p-20" src="http://www.zstrzeszow.pl/img/svg_icons/zst_logo.svg" alt="Header Image"></div>
        <div >
          <h1 style="color: #fff1f1">Zespół Szkół Technicznych</h1>
          <h3 style="color: #fff1f1">
            im. Eugeniusza Kwiatkowskiego w Rzeszowie</h3>
        </div>
      </div>
    </div>
  </section>
  <section class="services_area pt-120" id="about">
    <div class="news_container">
      <h1 class="pt-10">Aktualnosci</h1>
      <hr class="w-[30%] p-3">
      <div class="row justify-center">
        <div class="">


          <div class="grid overflow-hidden gap-2">
            <div class="box row-start-1 row-end-1 col-span-2">
              <CardElement />
            </div>
            <div class="box col-start-3">
              <CardElement />
            </div>
          </div>

          <div class="flex items-center justify-center m-5">
            <ul class="flex list-style-none">
              <li class="page-item disabled"><a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                  href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
              <li class="page-item"><a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#">1</a></li>
              <li class="page-item active"><a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                  href="#">2 <span class="visually-hidden"></span></a></li>
              <li class="page-item"><a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#">3</a></li>
              <li class="page-item"><a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#">Next</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardElement from "@/components/CardElement.vue";

export default {
  name: 'HomeView',
  components: { CardElement }
}
</script>
<style>
.logo_bg{height:220%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:.04}
.navbar-area {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 20;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.container{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
.news_container {
  margin-left: 100px;
  margin-right: 100px;
}
@media (min-width: 540px){
  .container{
    max-width: 540px;
  }
}

@media (min-width: 720px){
  .container{
    max-width: 720px;
  }
}

@media (min-width: 960px){
  .container{
    max-width: 960px;
  }
}

@media (min-width: 1140px){
  .container{
    max-width: 1140px;
  }
}

@media (min-width: 1320px){
  .container{
    max-width: 1320px;
  }
}

.header_shape {
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 50%;
}

.header_shape::before {
  content: '';
  background-color: #F5F5FC;
  background:linear-gradient(0deg,rgba(0,17,43,1) 0%,rgba(11,23,40,1) 100%);
  transform: skewX(-15deg);
  width: 200%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}
.header_image {
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 52px;

  padding-right: 20px;
  top: 0px;
  right: 10px;
  width: 100%;
}
@media (min-width: 960px){
  .header_image{
    height: 100%;
    margin-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    position: absolute;
    width: 50%;
  }
}
.navbar-area {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 20;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.toggler-icon {
  background-color: black;
  display: block;
  position: relative;
  transition-duration: 300ms;
  height: 2px;
  width: 30px;
  margin: 6px 0;
}

.navbar-nav .nav-item a {
  display: inline-block;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;
  color: red;
}

.navbar-nav .nav-item a{
  z-index: 10;
}

@media (min-width: 960px){
  .navbar-nav .nav-item a{
    padding-top: 4px;
    padding-bottom: 4px;
  }
}

.navbar-nav .nav-item a.active {
  color: red;
}
</style>