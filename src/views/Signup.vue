<template>
  <div class="signup">
    <transition name="slide-fade-rev" ><h1 v-if="error != ''" class="error-info__promt">{{error}}</h1></transition>
    <div class="signup-register-card__div">
      <div class="signup-register-card__container">
        <h1 class="signup-register-txt__h">Регистрация</h1>
        <div class="signup-email__container">
          <p class="signup-email-txt__p">Email:</p>
          <input v-model="email" class="signup__input" type="text" placeholder="Email">
        </div>
        <div class="signup-password__container">
          <p class="signup-password-txt__p">Пароль:</p> 
          <input v-model="password" class="signup__input" type="text" placeholder="Пароль">
        </div>
        <div class="signup-conf-password__container">
          <p class="signup-conf-password-txt__p">Подтвердите пароль:</p> 
          <input v-model="confPassword" class="signup__input" type="text" placeholder="Подтвердите пароль">
        </div>
        <div class="signup__line"></div>
        <button @click="checkInput()" class="signup-create-acc__btn">Зарегистрироваться</button>
         <div class="signup-enter-acc__div">
          <a class="signup-enter-acc__p">Уже есть аккаунт?</a><br><a href="http://localhost:8080/#/signin">Войти!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    error: '',
    email: '',
    password: '',
    confPassword: '',
  }
},
methods: {
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
    else if (this.confPassword == '') {
      this.setError(0)
    } 
  }  
}
}
</script>

<style>
.signup {
  height: 100vh;
  width: 100%;
}
.signup-register-card__div {
  box-sizing: border-box;
    padding-right: 2vw;
    padding-left: 2vw;
  height: 30.8vw;
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
.signup-register-card__container {
  width: 100%;
  height: 100%;
  margin-top: 2vw;
    margin-bottom: 2vw;
}
.signup-register-txt__h {
  font-size: 1.8vw;
    position: relative;
    left: 35%;
}
.signup-email-txt__p {
  margin-top: 0;
  margin-bottom: 0.5vw;
  font-size: 1.5vw;
}
.signup-password-quastion-txt__p {
  margin: 0;
    position: absolute;
    left: 31.5vw;
    top: 10.9vw;
    font-size: 1vw;
}
.signup-password__container {
  margin-top: 1vw;
    margin-bottom: 0;
}
.signup-password-txt__p {
  margin: 0;
  font-size: 1.5vw;
  margin-bottom: 0.5vw;
}
.signup-conf-password__container {
  margin-top: 1vw;
}
.signup-conf-password-txt__p {
   margin:0;
   margin-bottom: 0.5vw;
}
.signup__input{
  width: 100%;
    height: 2.5vw;
    color: #6e707e;
    font-size: 1.2vw;
    box-sizing: border-box;
    padding: 0.35vw 0.75vw;
    border-radius: 0.3vw;
    border: 0.12vw solid #d1d3e2;
}
.signup__input:focus {
  outline:none;
  transition: ease-in-out.15s ease-in-out;
  box-shadow: 0px 0px 5px 0px  rgba(81, 203, 238, 1);
} 
.signup__line {
  margin-top: 1vw;
    margin-bottom: 1vw;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
}
.signup-create-acc__btn {
  width: 100%;
    height:3vw;
    /* background-color: dodgerblue; */
    color: #fff;
    background: #1572E8 !important;
    /* border-color: #1572E8 !important; */
    border: none;
    border-radius: 0.5vw;
    font-size: 1vw;
}
.signup-enter-acc__div {
 display: flex;
    justify-content: center;
    margin-top: 1vw;
    font-size: 1vw;
}
.signup-enter-acc__p {
  margin-right: 1.5vw;
}

</style>