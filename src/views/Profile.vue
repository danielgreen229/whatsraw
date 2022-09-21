<template>
  <div class="prifile">
    <div v-if="Wwidth < 480 && !showSettings" class="background-profile__svg" ></div>
   	<div class="profile-header__container">

    



      <div class="profile-header__div" @click="goTo(0), startExcel = false">
        <h1 class="profile-header__h1">{{user.email}}</h1>
        <div class="profile-header__avatar" :class="{'profile-header-1__avatar': showSettings == false}" ></div>
      </div>
    </div>

    <button v-if="showSettings" @click="startExcel = false, showSettings = false"  class="buttons-0 profile-back-profile__button">← Назад</button>
    <settings v-if="showSettings"></settings>

    <div v-if="!startExcel && !showSettings" class="profile-home__block">

        <div class='profile-animation__container'>
          <div class='animation'>
            <div class='i-mail'>
              <div class='mail-anim'></div>
            </div>
            <div class='line'></div>
            <div class='i-success'>
              <div class='success-anim'></div>
            </div>
          </div>
          <div class='message'>
          </div>
        </div>
      
        <button class="buttons-0 profile-history__btn" @click="startExcel = true, showSettings = false">Начать рассылку</button>

        <button class="buttons-0 profile-history__btn">История отправок</button>
    
    </div>
   	
   	<linkC v-if="startExcel"/>
  </div>
</template>


<script>
import linkC from '../components/linkCreation'
import settings from '../components/settings'


export default {
  name: 'prifile',
  components: {
  	linkC, settings
  },
  data(){
    return {
      
      startExcel: false,
      showSettings: false
    }
  },
  methods: {
     goTo(ind) {
      if(ind == 0) { this.showSettings = true }
      else if(ind == 1) { this.$router.push('/profile') }
      else if(ind == 2) { this.$router.push('/about') }
    }
  },
  computed: {
    Wwidth () {
      return window.innerWidth
    },
    user () {
      try {
        const data = Object.assign({}, this.$store.getters.user);
        return  data        
      }
      catch (e){ console.log(e)}
    },
  },
}

</script>


<style>
.settings {
      padding-bottom: 15vw;
}
.background-profile__svg {
   background-image: url(/img/signupin.aad50cb3.svg);
      background-repeat: no-repeat;
    width: 100%;
    height: 117vw;
    position: absolute;
    background-size: 200%;
    margin-left: -3vw;
    top: 0;
    transform-origin: center;
    transform: rotate(180deg);
  z-index: -1;
      margin-top: 12vw;
}

.profile-header__avatar {
  font-size: 2vw;
  background-image: url('../assets/profile/avatar.svg');
  position: absolute;
    /* max-height: 100%; */
    width: 4vw;
    margin-right: 14vw;
    height: 4vw;
    border-radius: 50%;
    background-color: black;
    background-repeat: no-repeat;
}

.profile-back-profile__button {
      position: absolute;
    margin-top: 10vw;
        z-index: 3;
}
.profile-history__btn {
      width: calc(100% - 6vw);
}
.profile-home__block {
      height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.profile-header__div {
  position: absolute;
  right: 2vw;
  top: calc(7vw / 2 - 0.65vw);
  display: flex;
    flex-direction: row-reverse;
    align-items: center;
}
.profile-header__h1 {
  font-size: 1.3vw;
  cursor: pointer;
}
.profile-header__container {
	    width: 100vw;
    height: 7vw;
    margin-left: -18vw;
    margin-top: 0vw;
    position: absolute;
    background-color: white;
    box-shadow: 0 1vw 2.5vw 0 rgb(58 59 69 / 15%);
}
.i-mail:after, .i-mail .mail-anim:after {
  content: "";
  position: absolute;
  bottom: 0.347vw;
  left: 0.347vw;
  width: 1.042vw;
  height: 0.278vw;
  border-bottom: 0.139vw solid black;
  border-top: 0.139vw solid black;
}

.i-mail:before, .i-mail .mail-anim:before {
  content: "";
  position: absolute;
  top: 0.347vw;
  right: 0.347vw;
  width: 0.486vw;
  height: 0.417vw;
  background: black;
}

.i-success:after, .i-success .success-anim:after {
  content: "";
  position: absolute;
  bottom: 0.833vw;
  left: 0.764vw;
  width: 1.042vw;
  height: 0.556vw;
  border-bottom: 0.139vw solid black;
  border-left: 0.139vw solid black;
  transform: rotate(-45deg);
}

.profile-animation__container {
  position: absolute;
    top: 30%;
    /* left: calc(50% - 240px); */
    width: 37.5vw;
}

.animation {
  width: 37.5vw;
  height: 2.361vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.i-mail, .i-mail .mail-anim {
  width: 2.778vw;
  height: 2.083vw;
  border-radius: 5% 5%;
  border: 0.139vw solid black;
  position: relative;
  animation: transformS 0.3s linear;
}
@keyframes transformS {
  50% {
    transform: scale(0.5, 0.5);
    opacity: 0.5;
  }
}
.i-mail .mail-anim {
  margin: -0.139vw 0 0 -0.139vw;
  animation: moveL 0.8s linear;
}
@keyframes moveL {
  100% {
    transform: translateX(15.278vw) rotateY(90deg);
  }
}

.line {
  padding: 0.069vw 14.583vw;
  background-image: linear-gradient(to right, #000 30%, rgba(255, 255, 255, 0) 0%);
  background-position: top;
  background-size: 1.042vw 0.139vw;
  background-repeat: repeat-x;
}

.i-success, .i-success .success-anim {
  width: 2.778vw;
  height: 2.083vw;
  border-radius: 5% 5%;
  border: 0.139vw solid black;
  position: relative;
  animation: transformB 0.3s 1.4s linear forwards;
}
.i-success:after, .i-success .success-anim:after {
  animation: transformBA 0.3s 1.4s linear forwards;
}
@keyframes transformB {
  50% {
    transform: scale(1.5, 1.5);
    background: black;
  }
  100% {
    background: black;
  }
}
@keyframes transformBA {
  100% {
    border-bottom: 0.139vw solid #fff;
    border-left: 0.139vw solid #fff;
  }
}
.i-success .success-anim {
  margin: -0.139vw 0 0 -0.139vw;
  animation: moveR 0.8s 1s linear;
}
@keyframes moveR {
  0% {
    transform: translateX(-15.278vw) rotateY(90deg);
  }
  50% {
    transform: translateX(0) rotateY(0);
  }
}

.message {
  text-align: center;
  margin-top: 0.694vw;
  font-family: Roboto, sans-serif;
}
@media (max-width: 480px) {
.profile-header__container {
      height: 16vw;
  margin-left: -3vw;
}
.profile-header__h1 {
    font-size: 4.3vw;
        margin-top: 3vw;
}
.profile-home__block {
  flex-direction: column;
}
.profile-history__btn {
  margin-top: 7vw;
}
.profile-animation__container {
  opacity: 0;
}
.profile-header__avatar {
    background-image: url(/img/avatar.f3676609.svg);
    position: absolute;
    background-position: center;
    /* max-height: 100%; */
    width: 35vw;
    margin-right: 30vw;
    height: 35vw;
    margin-top: 100vw;
    border-radius: 50%;
    background-color: black;
    background-repeat: no-repeat;
}
.profile-header-1__avatar {
  display: none;
}
.background-profile-1__svg {
  opacity: 0;
}
}
</style>