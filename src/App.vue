<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><h1 class="logo" :class="{'logo-nav-profile': pather}">Whats Raw</h1></router-link>
      <div class="navigation" v-if="!pather">
        <router-link to="/about">О нас</router-link> 
        <router-link to="/signin">Вход</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'apper',
  data() {
    return {
      pather: false
    }
  },
  computed: {
    user () {
      try {
        const data = Object.assign({}, this.$store.getters.user);
        return  data        
      }
      catch (e){ console.log(e)}
    },
  },
  watch: {
    '$route' (to, from){
        //console.log(to, "asdzx")
        if(to.path != '/') {
          this.pather = true
        }
        else {
          this.pather = false
        }

        if(to.path == '/signin') !!this.user.email? this.$router.push('/profile') : {}
    }
  },
  created() {
    this.$store.dispatch('CHECKAUTH')
  },
  mounted() {
   
    if(this.$route.path != '/') {
      this.pather = true
    }
    else {
      this.pather = false
    }
  }, 
  
}
</script>

<style>
.error-info__promt {
      background-color: black;
    margin-top: 2vw;
    position: absolute;
    font-weight: bold;
    z-index: 5;
    color: white;
    font-size: 1.6vw;
    padding: 0.5vw 1vw 0.5vw 1vw;
    border-radius: 3vw;
    transition: 1s;
    position: fixed;
    top: 0;
}
.logo-nav-profile {
  margin-left: -16vw;
    margin-top: 4vw;
}
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
  min-width: 10vw;
}
.buttons-0:hover, .buttons-1:hover {
  opacity: 0.85;
}
.buttons-1 {
  background-color: #477bf8;
  color: white;
  border-radius: 0;
  border: none;
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
    margin-top: 1.7vw;
    position: absolute;
    font-weight: 100;
    font-variant: petite-caps;
    z-index: 5;
    color: white;
    font-size: 2vw;
    padding: 0.5vw 1vw 0.5vw 1vw;
    border-radius: 3vw;
    transition: 1s;
}



@media (max-width: 480px){
  .link__video-yt {
    margin-top: 20vw !important;
  }
  .card {
        padding-top: 17vw;
  }
  .link-step-info__block {
        padding: 1vw 1vw 1vw 12vw !important;
    margin: 6vw 0vw 3vw 0vw !important;
    background-color: #f1f1f1 !important;
  }
  .link-step-info__block:before {
    width: 12vw !important;
    height: 12vw !important;
  
    margin-left: -12vw !important;
  }
  .nav-bottom-buttons__container {
        width: calc(100% - 6vw) !important;
  }
  .link-block-nav__div {
    display: none;
  }
  .home-block-footer__container {
    
  }
  #app {
    margin-left: 3vw;
    margin-right: 3vw;
  }
  .error-info__promt {
      background-color: black;
    margin-top: 2vw;
    position: absolute;
    font-weight: bold;
    z-index: 5;
    color: white;
    font-size: 5vw;
    padding: 0.5vw 1vw 0.5vw 1vw;
    border-radius: 3vw;
    transition: 1s;
    position: fixed;
    top: 0;
}
  .logo {
      font-size: 6vw;
      padding: 1.5vw 4vw 1.5vw 4vw;
      border-radius: 6vw;
      margin-top: 3vw;
          margin-left: 0vw;

  }
  .navigation a {
        font-size: 3.5vw;
  }
  .navigation {
    margin-top: 3vw;
    display: none;
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
    font-size: 5vw;
  }
  .home-reg__button {
   /* width: 94% !important;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-top: -33vw !important;*/
  }
  .home-block-1-ex__div {
    display:none !important;
  }
  .home-block-0-sol-div__container {
        display: flex;
    flex-direction: column !important;
        align-items: center !important;
  }
  .home-block-0-sol-main__h1 {
        font-size: 5vw !important;
    text-align: left !important;
  }
  .home-block-0-sol-h1__content {
    width: 100% !important;
        margin-top: 5vw !important;
  }
  .home-block-0-sol__img {
        width: 20vw !important;
    height: 20vw !important;
  }
  .home-block-0-sol__h1 {
      font-size: 5vw !important;
  }
}



















</style>
