<template>
  <section class="header_area">
    <div class="navbar-area bg-white">
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
              <div class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                <ul id="nav" class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                  <li class="nav-item ml-5 lg:ml-11"><a class="active"   href="/">Główna</a></li>
                  <li class="nav-item ml-5 lg:ml-11"><a  href="/informacje">Informacje</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div id="home" class="h-[900px] bg-gray relative z-10 overflow-hidden lg:flex items-center" style="background: url(https://atlasedukacji.pl/placowki/institution/gallery-photo?institutionGalleryPhotoId=727); background-size: cover; background-repeat: no-repeat;">
      <div class="container">
        <div class="row">

        </div>
      </div>
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
</template>

<script>
export default {
  name: 'HomeView'
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
  transition-duration: 300ms;
}

.sticky {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  position: fixed;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.collapse.show {
  display: block;
}

.toggler-icon {
  --tw-bg-opacity: 1;
  background-color: rgba(56, 66, 77, var(--tw-bg-opacity));
  display: block;
  position: relative;
  transition-duration: 300ms;
  height: 2px;
  width: 30px;
  margin: 6px 0;
}

.sticky .toggler-icon {
  --tw-bg-opacity: 1;
  background-color: rgba(56, 66, 77, var(--tw-bg-opacity));
}

.active>.toggler-icon:nth-child(1) {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-rotate: 45deg;
  top: 7px;
}

.active>.toggler-icon:nth-child(2) {
  opacity: 0;
}

.active>.toggler-icon:nth-child(3) {
  top: -8px;
  transform: rotate(135deg);
}

.navbar-nav .nav-item a {
  display: inline-block;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;
  --tw-text-opacity: 1;
  color: rgba(116, 126, 136, var(--tw-text-opacity));
}

.navbar-nav .nav-item a:hover{
  --tw-text-opacity: 1;
  color: rgba(249, 79, 79, var(--tw-text-opacity));
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
  --tw-text-opacity: 1;
  color: rgba(249, 79, 79, var(--tw-text-opacity));
}
</style>