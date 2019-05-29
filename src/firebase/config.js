import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBZgL1gKHAcaY-4Y4PGCNfnssztb8IarZU",
    authDomain: "moviewebsite-b7ffe.firebaseapp.com",
    databaseURL: "https://moviewebsite-b7ffe.firebaseio.com",
    projectId: "moviewebsite-b7ffe",
    storageBucket: "moviewebsite-b7ffe.appspot.com",
    messagingSenderId: "348587192024",
    appId: "1:348587192024:web:f4e99bc6e3346a78"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)


export default firebaseApp;