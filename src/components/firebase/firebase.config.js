// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyC5yYLODrd4BhcrwaP9oecegfdDd5riJYs",
  authDomain: "assignment-10-e98fe.firebaseapp.com",
  projectId: "assignment-10-e98fe",
  storageBucket: "assignment-10-e98fe.appspot.com",
  messagingSenderId: "307420214319",
  appId: "1:307420214319:web:f6a37b016c3c5b963b82da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
