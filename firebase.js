// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAxJ0lVNqY8LChK4AWlVbGus_4fw3MN9Kw",
//   authDomain: "user-auth-841fa.firebaseapp.com",
//   projectId: "user-auth-841fa",
//   storageBucket: "user-auth-841fa.appspot.com",
//   messagingSenderId: "960526677457",
//   appId: "1:960526677457:web:4ae7ebbf6fdb9e8f979cf0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHslErZhFts6udKqKd9U0HCJSJLcmHZfk",
  authDomain: "newuserapp-23ec4.firebaseapp.com",
  projectId: "newuserapp-23ec4",
  storageBucket: "newuserapp-23ec4.appspot.com",
  messagingSenderId: "398817699124",
  appId: "1:398817699124:web:44454eb59c95f3390d3161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// let app;
// if (firebase.apps.length === 0) {
//   // app = firebase.initializeApp(firebaseConfig);
//    app = initializeApp(firebaseConfig);
// } else {
//   // firebase.app()
//   app = initializeApp.app() 
// }

// const auth = firebase.auth()
const auth = getAuth(app);

export { auth };