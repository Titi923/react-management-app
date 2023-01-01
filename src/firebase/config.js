import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAHDBkxAiAZAgLxJhm3249jKpwMu4kfMv0",
  authDomain: "react-management-app.firebaseapp.com",
  projectId: "react-management-app",
  storageBucket: "react-management-app.appspot.com",
  messagingSenderId: "858643330400",
  appId: "1:858643330400:web:b594157372c9574a3c5a05"
};

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize firestore
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// setup the timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }