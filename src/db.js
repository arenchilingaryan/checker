import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBnvAa5Of-ub3xs5_GNf_qtwmX_12ESvPs",
    authDomain: "checker-a4855.firebaseapp.com",
    projectId: "checker-a4855",
    storageBucket: "checker-a4855.appspot.com",
    messagingSenderId: "362894472332",
    appId: "1:362894472332:web:63086442149ca09c8637a9"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig).firestore()