import firebase from 'firebase'
import router from '@/router/index'

export default {
  state: {
    user: {}
  },
  getters: {
    user: s => s.user,
  },
  mutations: {
    async UPDATE_USER(state, data) {
      console.log(data)

      state.user = Object.assign({}, data);
    }
  },
  actions: {
    async CHECKAUTH ({dispatch, commit}) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log (user)
          dispatch('GET_USER', user.uid)
        } else {
         // alert('Повторите вход!')
        }
      });
    },
    async FORGOTPASS({dispatch, commit}, email) {
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          alert('Check your registered email to reset the password!')
          commit('UPDATE_USER', {})
          router.push('/signin')
        }).catch((error) => {
          alert(error)
        })
    },
    async LOGOUT({dispatch, commit}) {
      commit('UPDATE_USER', {})
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          router.push('/signin')
        })
      })

    },
    async SIGNUP({dispatch, commit}, data) {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        const newData = {
          email: data.email,
          money: 0
        }
        dispatch('UPDATE_USER', {data: newData, uid: res.user.uid})
        const result = dispatch('GET_USER', res.user.uid)
        commit('UPDATE_USER', result)
      })
      .catch((error) => {
         alert(error.message);
      });
    },
    async UPDATE_USER({dispatch, commit}, data) {
      firebase.database().ref(`/users/${data.uid}/`).update(data.data);
      commit('UPDATE_USER', data.data)
    },
    async GET_USER({dispatch, commit}, uid) {
      
      const getted = ((await firebase.database().ref(`/users/${uid}`).once('value')).val())

      const data = Object.assign({}, getted);
      commit('UPDATE_USER', data)
      
      
      
    },
    async LOGIN({dispatch, commit}, data) {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log(res.user)

        const result = dispatch('GET_USER', res.user.uid)
        commit('UPDATE_USER', result)

        router.push('/profile')

      })
      .catch((error) => {
        alert(error.message);
      });

    }
  },
}

