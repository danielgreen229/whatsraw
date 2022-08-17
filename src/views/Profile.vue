<template>
  <div class="prifile">
   	<div class="profile-header__container">

      <div class="profile-header__div">
        <h1 class="profile-header__h1">{{user.email}}</h1>
      </div>
    </div>

    <div v-if="!startExcel">

    </div>
   	
   	<linkC v-if="startExcel"/>
  </div>
</template>


<script>
import linkC from '../components/linkCreation'

export default {
  name: 'prifile',
  components: {
  	linkC
  },
  data(){
    return {

      startExcel: false

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
}

</script>


<style>
.profile-header__div {
  position: absolute;
  right: 2vw;
  top: calc(7vw / 2 - 0.65vw);
}
.profile-header__h1 {
  font-size: 1.3vw;
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

</style>