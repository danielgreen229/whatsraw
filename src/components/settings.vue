<template>
  <div class="settings">
    <div class="settings__container">
      <div class="password_setting__div">
        <h1 class="settings__h1">Задать новый пароль</h1>
        <button @click="changePass" class="buttons-0 settings__btn">Задать</button>
      </div>
      <div class="exit_setting__div">
        <h1 class="settings__h1">Выйти из профия</h1>
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
.settings {
  position: relative
}
.settings__container {
  padding-top: 16vw;
}
.settings__h1 {
  font-family: "Poppins", sans-serif;
    color: #222222;
    line-height: 1.2em !important;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 600;
    font-size: 1.1vw;
}

@media(max-width: 480px) {
.settings__container {
  display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    align-content: stretch;
    padding-top: calc(100% + 65vw);
}
.profile-back-profile__button {
  margin-top: calc(100% + 24vw) !important;
}
.settings__h1 {
  font-family: "Poppins", sans-serif;
    color: #222222;
    line-height: 1.2em !important;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 600;
    font-size: 4vw;
}
.password_setting__div {
  align-items: flex-end;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
}
.exit_setting__div {
  margin-top: 3vw;
  align-items: flex-end;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
}
.settings__btn {
  margin-top: 1.5vw;
}
}
</style>