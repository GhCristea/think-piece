import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSoRiAyLirbmLcFnCNOSChBGJEJOrNBkM",
    authDomain: "sportofolio.firebaseapp.com",
    projectId: "sportofolio",
    storageBucket: "sportofolio.appspot.com",
    messagingSenderId: "581335893208",
    appId: "1:581335893208:web:1f4e9030a44584e74c03ad",
    measurementId: "G-L5LRBZXJLX"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
firestore.settings({timestampsInSnapshots: true});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOut =()=> auth.signOut();



window.firebase = firebase;

export default firebase;

