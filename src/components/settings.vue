<template>
  <div class="settings">
    <div class="settings__container">
      <h1>Задать новый пароль</h1>
      <button @click="changePass" class="buttons-0">Задать</button>
      <h1>Выйти из профия</h1>
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
</style>