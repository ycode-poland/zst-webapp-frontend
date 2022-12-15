<template>
  <header class="header">
    <div class="content">
      <img src="http://www.zstrzeszow.pl/img/svg_icons/zst_logo.svg" alt="">
      <h1>ZESPÓŁ SZKÓŁ TECHNICZNYCH</h1>
      <h3>im. Eugeniusza Kwiatkowskiego w Rzeszowie</h3>
    </div>
  </header>
  <nav class="navbar">
    <ul>
      <li>O nas</li>
      <li>Plan lekcji</li>
      <li>E-dziennik</li>
      <li>Rekrutacja</li>
      <li>Lokalizacja</li>
    </ul>
  </nav>
</template>
<style scoped lang="less">
.navbar {
  padding: 0;
  background-color: #D9D9D9;
  width: 80%;
  margin: auto;
  position: relative;
  top: -40px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    li {
      display: inline-block;
      padding-right: 30px;
      font-size: 30px;
      cursor: pointer;
    }
  }
}
.header {
  background-image: url("https://cdn.discordapp.com/attachments/1051812367723409468/1053027734550491196/image.png");
  background-size: cover;
  min-height: 870px;
  .content {
    padding: 10%;
    h1 {
      text-align: center;
      color: white;
    }
    h3 {
      text-align: center;
      color: white;
    }
    img {
      margin: auto;
    }
  }
}
</style>