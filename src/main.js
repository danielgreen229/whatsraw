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

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
