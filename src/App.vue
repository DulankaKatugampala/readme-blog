<template>
  <div id="app">
    <div id="nav" class="nav-bar flex flex-row flex-justify-center flex-align-center">
      <div class="nav-brand"><router-link tag="div" :to="{ name: 'home-view' }">Readme</router-link></div>
    </div>
    <div class="app-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Comfortaa:wght@300;400;500;600;700&family=Righteous&display=swap');
* {
    box-sizing: border-box;
}
body {
    position: relative;
    margin: 0;
}

.flex{
    display: flex;
}
.flex-row{
    flex-direction: row;
}
.flex-row-reverse{
    flex-direction: row-reverse;
}
.flex-column{
    flex-direction: column;
}
.flex-column-reverse{
    flex-direction: column-reverse;
}

.flex-justify-start{
    justify-content: flex-start;
}
.flex-justify-end{
    justify-content: flex-end;
}
.flex-justify-center{
    justify-content: center;
}
.flex-justify-space-between{
    justify-content: space-between;
}
.flex-justify-space-around{
    justify-content: space-around;
}
.flex-align-start{
    align-items: flex-start;
}
.flex-align-end{
    align-items: flex-end;
}
.flex-align-center{
    align-items: center;
}

/* navbar styles */
.nav-bar {
    background-color: #2B2B2B;
    color: #ffffff;
    max-height: 55px;
    height: 55px;
    position: fixed;
    width: 100%;
    top: 0;
}
.nav-brand {
    text-align: center;
    font-size: 32px;
    font-family: 'Righteous', cursive;
    letter-spacing: 2px;
    line-height: 100%;
}
.footer .nav-brand {
    text-align: center;
    font-size: 10px;
    font-family: "Comfortaa", cursive;
    letter-spacing: 2px;
    line-height: 100%;
    margin: 20px;
}

.app-body {
    margin: 55px auto 0 auto;
    min-width: 1000px;
    max-width: 1300px;
    width: 1000px;
    margin-bottom: 120px;
}

@media screen and (max-width:1024px) {
    .app-body {
        max-width: unset !important;
        min-width: unset !important;
        width: 90% !important;
    }
}
</style>
