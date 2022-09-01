<template>
  <div class="signin">
    <transition name="slide-fade-rev" ><h1 v-if="error != ''" class="error-info__promt">{{error}}</h1></transition>
    <div class="signin-login-card__div">
      <div class="signin-login-card-container">
        <h1 class="signin-login-txt__h">Вход</h1>
        <div class="signin-email__container">
          <p class="signin-email-txt__p">Email:</p>
          <input v-model="email" class="signin__input" type="text" placeholder="Email">
        </div>
        <div class="signin-password__container">
          <p class="signin-password-txt__p">Пароль:</p> 
          <p @click="goToForgotPass()" class="signin-password-quastion-txt__p">Забыли пароль?</p>
          <input v-model="password" class="signin__input" type="password" placeholder="Пароль">
        </div>
        <div class="signin__line"></div>
        <button @click="checkInput()" class="signin-login__btn">Войти</button>
        <div class="signin-create-acc__div">
          <a class="signin-crte-acc__p">Еще не успели создать аккаунт?</a><br><a href="http://localhost:8080/#/signup">Создать аккаунт!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data(){
    return {
      error: '',
      email: '',
      password: '',
    }
  },
  watch: {
   
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
  methods: {
    userLogin() {
      const data = {
            email: this.email,
            password: this.password
        }
      this.$store.dispatch('LOGIN', data)
    },
    setError (ind) {
        if(ind == 0)
          this.error = 'Заполните все поля!'
        setTimeout(()=>{this.error = ''}, 1500)
      },
    checkInput() {
      if (this.email == '') {
        this.setError(0)
      } 
      else if (this.password == '') {
        this.setError(0)
      } 
      else if (this.email != '' && this.password != '') {
          this.userLogin()
      }
    },
    goToForgotPass() {
      this.$router.push('/forgotpass')
    }  
  }
}
</script>

<style>
.signin {
  height: 100vh;
  width: 100%;
}
.signin-login-card__div {
  background: white;
  box-sizing: border-box;
  box-shadow: 0 1vw 3vw rgb(0 0 0 / 18%) !important;
    padding-right: 2vw;
    padding-left: 2vw;
  height: 24.7vw;
    width: 41.3vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
    display: flex;
    flex-direction: column;
    /* min-width: 0; */
    /* word-wrap: break-word; */
    /* background-color: #fff; */
    background-clip: border-box;
    border: 1px solid #e3e6f0;
    /* border-radius: 0.35rem; */
    align-items: center;
}
.signin-login-card-container {
  width: 100%;
  height: 100%;
  margin-top: 2vw;
    margin-bottom: 2vw;
}
.signin-login-txt__h {
  font-size: 1.8vw;
   justify-content: center;
    align-items: center;
    /* left: 45%; */
    display: flex;

}
.signin-email-txt__p {
  margin-top: 0;
  margin-bottom: 0.5vw;
  font-size: 1.5vw;
}
.signin-password-quastion-txt__p {
  margin: 0;
    position: absolute;
    left: 31.5vw;
    top: 10.9vw;
    font-size: 1vw;
  cursor: pointer;
}
.signin-password__container {
  margin-top: 1vw;
    margin-bottom: 0;
}
.signin-password-txt__p {
  margin: 0;
  font-size: 1.5vw;
}
.signin__input{
  width: 100%;
    height: 3vw;
    color: #6e707e;
    font-size: 1.2vw;
    box-sizing: border-box;
    padding: 0.35vw 0.75vw;
    border-radius: 0.3vw;
    border: 0.12vw solid #d1d3e2;
}
.signin__input:focus {
  outline:none;
  transition: ease-in-out.15s ease-in-out;
  box-shadow: 0px 0px 5px 0px  rgba(81, 203, 238, 1);
} 
.signin__line {
  margin-top: 1vw;
    margin-bottom: 1vw;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
}
.signin-login__btn {
  width: 100%;
    height: 3vw;
    /* background-color: dodgerblue; */
    color: #fff;
    background: #1572E8 !important;
    /* border-color: #1572E8 !important; */
    border: none;
    border-radius: 0.5vw;
    font-size: 1vw;
}
.signin-create-acc__div {
 display: flex;
    justify-content: center;
    margin-top: 1vw;
    font-size: 1vw;
}
.signin-crte-acc__p {
  margin-right: 1.5vw;
}
@media (max-width: 480px) {
.signin-login-card__div {
  height: 40%;
  width: 90%;
  padding-right: 0;
    padding-left: 0;
}
.signin-login-txt__h {
  font-size: 4.5vw;
}
.signin-login-card-container {
  box-sizing: border-box;
    padding: 5vw;
}
.signin-email-txt__p {
  margin-bottom: 1.5vw;
    font-size: 4vw;
}
.signin__input {
  height: 7vw;
  padding: 4vw 3vw;
  border-radius: 1.3vw;
  font-size: 3.5vw;
  border: 0.3vw solid #d1d3e2;
}
.signin-password__container {
  margin-top: 3vw;
}
.signin-password-txt__p {
  font-size: 4vw;
  margin-bottom: 1.5vw;
}
.signin-password-quastion-txt__p{
  left: 55.5vw;
    top: 31.9vw;
    font-size: 3vw;
}
.signin__line{
  margin-top: 4vw;
    margin-bottom: 4vw;
}
.signin-login__btn{
  height: 8vw;
  font-size: 3.5vw;
}
.signin-create-acc__div {
  margin-top: 5vw;
    font-size: 2.5vw;
}
}
</style>
<style scoped>
body {
   background-image: url('../assets/signup/signupin.svg');
   background-repeat: no-repeat;
}
</style>
