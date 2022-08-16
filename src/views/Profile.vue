<template>
  <div class="prifile">
   	<div class="profile-header__container">

   	</div>
   	
   	<linkC/>
  </div>
</template>


<script>
import linkC from '../components/linkCreation'

export default {
  name: 'prifile',
  components: {
  	linkC
  },
}

</script>


<style>

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