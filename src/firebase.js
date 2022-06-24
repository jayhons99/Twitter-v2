import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpHtBxbFUfB4N4AX7Nw8GzWwnqKf-GA98",
    authDomain: "twitter-v2-20463.firebaseapp.com",
    projectId: "twitter-v2-20463",
    storageBucket: "twitter-v2-20463.appspot.com",
    messagingSenderId: "127445131085",
    appId: "1:127445131085:web:36bb96b5cb2dade12aa104",
    measurementId: "G-ZWXFR4MY3Y"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();

  export default db; 