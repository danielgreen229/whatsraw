<template>
  <div class="settings">
    <!--<div class="profile-info__container">
      <div class="profile-info-user-balance__h1">Баланс</div>
      <div class="profile-info-user-sendings__h1">Кол-во рассылок</div>
      <div class="profile-info-user-lol__h1">Не придумал</div>
    </div>-->
    <div class="settings__container">
       <div class="exit_setting__div">
        <div class="settings-info-reset__div">
          <h1 class="settings__h1">Язык</h1>
          <p class="settings__p">Выбор языка интерфейса</p>
        </div>
        <button class="buttons-0 settings__btn">Русский</button>
        </div>
      </div>
      <div class="password_setting__div">
        <div class="settings-info-reset__div">
          <h1 class="settings__h1">Новый пароль</h1>
          <p class="settings__p">Защитите свои данные</p>
        </div>
        <button @click="changePass" class="buttons-0 settings__btn">Изменить</button>
      </div>
      <div class="exit_setting__div">
        <div class="settings-info-reset__div">
          <h1 class="settings__h1">Аккаунт</h1>
          <p class="settings__p">Используйте разные аккаунты</p>
        </div>
        <button @click="logout" class="buttons-0 settings__btn">Выйти</button>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'settings',
  components: {
  },
  data(){
    return {
      newPass: ''
      

    }
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT')
    },
    changePass() {
      console.log(this.user.email)
      this.$store.dispatch('FORGOTPASS', this.user.email)
    },
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
}

</script>


<style>
.settings-info-reset__div {
  display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.settings__p {
  font-size: 1.5vw;
  margin: 0vw;
}
.settings {
  position: relative
}
.settings__container {
  padding-top: 16vw;
}
.password_setting__div, .exit_setting__div {
  margin-bottom: 2vw;
}

.password_setting__div, .exit_setting__div {
  box-shadow: 0px 1vw 3vw rgb(0 0 0 / 10%);
  border-radius: 0vw;
  padding: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.settings__h1 {
  font-family: "Poppins", sans-serif;
    color: #222222;
    line-height: 1.2em !important;
    margin-bottom: 0.5vw;
    margin-top: 0;
    font-weight: 600;
    font-size: 2vw;
}

@media(max-width: 480px) {
.settings__container {
  display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    align-content: stretch;
        padding-top: 79vw;
}
.profile-back-profile__button {
  margin-top: 21vw !important;
}
.settings__p {
  font-size: 3.5vw;
}
.password_setting__div, .exit_setting__div {
  padding: 4vw;
}
.settings__h1 {
  font-family: "Poppins", sans-serif;
    color: #222222;
    line-height: 1.2em !important;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 600;
    font-size: 6vw;
}
.password_setting__div {
  align-items: flex-start;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
}
.exit_setting__div, .password_setting__div {
      margin-top: 3vw;
    align-items: flex-start;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
       width: calc(100% - 8vw);
}
.settings__btn {
  margin-top: 1.5vw;
}
}
</style>