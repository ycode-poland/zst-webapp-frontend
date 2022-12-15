<template>
  <router-view/>
</template>

<style lang="less">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #454545;
}

h1, h2, h3, h4, h5, h6, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a{
  font-weight: 600;
  margin: 0px;
}

h1 {
  font-size: 45px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 25px;
}

h4 {
  font-size: 20px;
}

h5 {
  font-size: 18px;
}

h6 {
  font-size: 16px;
}
</style>
