import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCAzUpKEQhVfjMLtQU57b2ML40tA8q0qTw",
    authDomain: "think-piece-m.firebaseapp.com",
    projectId: "think-piece-m",
    storageBucket: "think-piece-m.appspot.com",
    messagingSenderId: "355578043621",
    appId: "1:355578043621:web:3f4a8d577b7a8a3d50880c"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

firestore.settings({timestampsInSnapshots: true});

window.firebase = firebase;

export default firebase;

