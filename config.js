import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
      apiKey: "AIzaSyB1I8Rqx8eIiq-rf3BZmZ9_h6MFZX5j3m0",
      authDomain: "e-library-57ef1.firebaseapp.com",
      projectId: "e-library-57ef1",
      storageBucket: "e-library-57ef1.appspot.com",
      messagingSenderId: "200021619937",
      appId: "1:200021619937:web:3e058246ec9a76655e33a0"
      }

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();