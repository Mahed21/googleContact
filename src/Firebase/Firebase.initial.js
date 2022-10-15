import { initializeApp } from "firebase/app";
const initializeAuthentication = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCyK39KLT_VYUTVtz5hjqe6lruoGSwscvE",
    authDomain: "contact-8ee9e.firebaseapp.com",
    projectId: "contact-8ee9e",
    storageBucket: "contact-8ee9e.appspot.com",
    messagingSenderId: "607830200735",
    appId: "1:607830200735:web:d65edc14e95ead399c2daa",
  };
  const app = initializeApp(firebaseConfig);
};

export default initializeAuthentication;
