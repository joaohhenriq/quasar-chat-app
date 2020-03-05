import { firebaseAuth, firebaseDb } from 'boot/firebase'

const state = {
    userDetails: {}
}

const mutations = {
    setUserDetails(state, payload) {
        state.userDetails = payload
    }
}

const actions = {
    registerUser({ commit }, payload) {
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
            .then(res => {
                let userId = firebaseAuth.currentUser.uid
                firebaseDb.ref('users/' + userId).set({
                    "name": payload.name,
                    "email": payload.email,
                    "online": true
                })
            })
            .catch(err => {
                console.log(err.message);
            })
    },
    loginUser({ commit }, payload) {
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.message);
            })
    },
    logoutUser() {
        firebaseAuth.signOut()
    },
    handleAuthStateChanged({ commit, dispatch, state }) {
        firebaseAuth.onAuthStateChanged(user => {
            if (user) {
                // user logged in

                let userId = firebaseAuth.currentUser.uid
                firebaseDb.ref('users/' + userId).once('value', snapshot => {
                    let userDetails = snapshot.val()
                    commit('setUserDetails', {
                        name: userDetails.name,
                        email: userDetails.email,
                        userId
                    })
                })
                dispatch('firebaseUpdateUser', {
                    userId,
                    updates: {
                        online: true
                    }
                })
                this.$router.push('/')
            } else {
                //user logged out

                dispatch('firebaseUpdateUser', {
                    userId: state.userDetails.userId,
                    updates: {
                        online: false
                    }
                })
                commit('setUserDetails', {})
                this.$router.replace('/auth')
            }
        })
    },
    firebaseUpdateUser({ }, payload) {
        firebaseDb.ref('users/' + payload.userId).update(payload.updates)
    }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}