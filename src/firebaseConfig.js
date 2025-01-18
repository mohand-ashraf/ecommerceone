/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyTHUMxVgQJzcUa78iln4xjvVIMBfVnl0",
    authDomain: "e-commerce-two-1a4c6.firebaseapp.com",
    projectId: "e-commerce-two-1a4c6",
    storageBucket: "e-commerce-two-1a4c6.firebasestorage.app",
    messagingSenderId: "863200395944",
    appId: "1:863200395944:web:1ca4730383a6e7e8d3789d",
    measurementId: "G-ZLXRGWD05L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);