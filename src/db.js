import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_DB_API_KEY,
    authDomain: process.env.REACT_APP_DB_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_DB_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_DB_APP_ID
};

export const firebaseApp = firebase.initializeApp(firebaseConfig).firestore()