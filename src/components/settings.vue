<template>
  <div class="settings">
    <div class="settings__container">
      <h1 class="settings__h1">Задать новый пароль</h1>
      <button @click="changePass" class="buttons-0">Задать</button>
      <h1 class="settings__h1">Выйти из профия</h1>
      <button @click="logout" class="buttons-0">Выйти</button>
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
    padding-top: 150%;
}
.profile-back-profile__button {
  margin-top: 90% !important;
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
}
</style>