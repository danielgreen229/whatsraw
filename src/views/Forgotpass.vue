<template>
    <div class="vue-tempalte">
        <form @submit.prevent="forgetPassword">
            <h3>Forgot Password</h3>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: {   
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        this.$store.dispatch('FORGOTPASS', this.user.email)
    }
  }
};
</script>
