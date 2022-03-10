import * as React from 'react';
import { Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgX41DabKyEPiRtbCcc-UTYmZGtTQticY",
    authDomain: "mav-app-4816d.firebaseapp.com",
    projectId: "mav-app-4816d",
    storageBucket: "mav-app-4816d.appspot.com",
    messagingSenderId: "1095964278897",
    appId: "1:1095964278897:web:b43e8e41ec573a0c725bd0",
    measurementId: "G-X4JR1KLWD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();
const storageRef = ref(storage, 'red.png');

export default function uploadTest() {
    getDownloadURL(storageRef).then((url) =>{
        console.log(url);
    })
}