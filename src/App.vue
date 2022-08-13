<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><h1 class="logo">Whats Raw</h1></router-link>
      <div class="navigation">
        <router-link to="/about">О нас</router-link> 
        <router-link to="/profile">Вход</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
p {
  color: #777777;
  font-size: 1.5vw;
  font-family: "Roboto", sans-serif;
      font-weight: 400;
      line-height: 1.625em;
}
html {
  overflow-x: hidden;
}
body {
    color: #777777;
    font-family: "Roboto", sans-serif;
    
    font-weight: 400;
    
    position: relative;
    margin: 0;
       /* overflow-x: hidden;*/
}
h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
    color: #222222;
    line-height: 1.2em !important;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 600;
    font-size: 1.1vw;
  
}
.buttons-0 {
  background-color: black;
  color: white;
  border-radius: 0;
  border-color: black;
  font-size: 1.5vw;
  font-weight: bold;
  padding: 1vw;
  cursor: pointer;
}
.navigation {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10vw;
  margin-top: 2.5vw;
   font-weight: bold;
  color: white;
  z-index: 2;
}
.navigation a {
    text-decoration: none;
    padding: 0.5vw 0 0.5vw 1vw;

   font-weight: bold;
  color: white;
  font-size: 1.5vw;
}
#app {
      margin-left: 18vw;
    margin-right: 18vw;

}



#nav a.router-link-exact-active {
  color: #42b983;
}
.logo {
      background-color: black;
    margin-top: 2vw;
    position: absolute;
    font-weight: 100;
    font-variant: petite-caps;
    z-index: 5;
    color: white;
    font-size: 2vw;
    padding: 0.5vw 1vw 0.5vw 1vw;
    border-radius: 3vw;
}



@media (max-width: 480px){
  #app {
    margin-left: 3vw;
    margin-right: 3vw;
  }
  .logo {
      font-size: 6vw;
      padding: 1.5vw 4vw 1.5vw 4vw;
      border-radius: 6vw;
      margin-top: 3vw;
  }
  .navigation a {
        font-size: 3.5vw;
  }
  .navigation {
    margin-top: 3vw;
  }
  .home-title__h1 {
        font-size: 8vw !important;
  }
  .home-title__container {
    width: calc(100% - 6vw) !important;
    height: 100vh !important;
  }
  p {
    font-size: 3.5vw;
    line-height: 1.625em;
  }
  .home-title__p {
    margin: 6vw 0 0 0 !important;
  }
  .buttons-0 {
    font-size: 8vw;
  }
  .home-reg__button {
    margin-top: 10vw !important;
    margin-bottom: 8vw !important;
   
    width: 100% !important;
  }

}























</style>
