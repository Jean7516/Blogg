// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authreact-a4269.firebaseapp.com",
  projectId: "authreact-a4269",
  storageBucket: "authreact-a4269.appspot.com",
  messagingSenderId: "645905433616",
  appId: "1:645905433616:web:186a66d49953a146d07695"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
