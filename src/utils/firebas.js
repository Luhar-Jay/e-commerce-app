// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAls5xJfUAZgzhFdXfXNP9q6BnvqqnYxIg",
  authDomain: "ecommerce-app-a71b4.firebaseapp.com",
  projectId: "ecommerce-app-a71b4",
  storageBucket: "ecommerce-app-a71b4.appspot.com",
  messagingSenderId: "488008860446",
  appId: "1:488008860446:web:c220717ef5632959c2ff0f",
  measurementId: "G-QWDZ6HLJZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
