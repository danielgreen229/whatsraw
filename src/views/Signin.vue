<template>
  <div class="signin">
    <div class="signin-login-card__div">
      <div class="signin-login-card-container">
        <h1 class="signin-login-txt__h">Вход</h1>
        <div class="signin-email__container">
          <p class="signin-email-txt__p">Email:</p>
          <input v-model="email" class="signin__input" type="text" placeholder="Email">
        </div>
        <div class="signin-password__container">
          <p class="signin-password-txt__p">Пароль:</p> 
          <p class="signin-password-quastion-txt__p">Забыли пароль?</p>
          <input v-model="password" class="signin__input" type="text" placeholder="Пароль">
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
export default {
data(){
  return {
    error: '',
    email: '',
    password: ''
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
  box-sizing: border-box;
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
    position: relative;
    left: 45%;
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
</style>
