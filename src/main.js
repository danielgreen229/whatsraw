import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueKinesis from 'vue-kinesis'

Vue.use(VueKinesis)



import VueXlsx from 'vue-js-xlsx'

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: true,
    //connection: 'https://whatssendlerserver.herokuapp.com',
    connection: 'https://whatssendlerserver.herokuapp.com/',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
  
}))


Vue.config.productionTip = false

import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';



firebase.initializeApp({
  apiKey: "AIzaSyChVMYLJgeGpVM09Vk0_klixiuHnGoMuP4",
  authDomain: "wats-raw.firebaseapp.com",
  projectId: "wats-raw",
  storageBucket: "wats-raw.appspot.com",
  messagingSenderId: "173277583897",
  appId: "1:173277583897:web:787ebfc1432e8980aa6888",
  measurementId: "G-X60BT6QHZM"
})



let app



firebase.auth().onAuthStateChanged(() => {
  if(!app) {
	app = new Vue({
  		router,
  		store,
  		
  		render: function (h) { return h(App) }
		}).$mount('#app')
	}
})
