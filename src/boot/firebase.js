import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyCyKiXwP7iGjwnT6mpdfDnipJ1D18vaziE",
  authDomain: "my-project-1553293384123.firebaseapp.com",
  databaseURL: "https://my-project-1553293384123.firebaseio.com",
  projectId: "my-project-1553293384123",
  storageBucket: "my-project-1553293384123.appspot.com",
  messagingSenderId: "903462417964",
  appId: "1:903462417964:web:458063204a343da2108389"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }