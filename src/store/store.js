import { firebaseAuth, firebaseDb } from 'boot/firebase'

const state = {

}

const mutations = {

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