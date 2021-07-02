import firebase from "firebase";
import "firebase/auth";
const firebaseApp = firebase.initializeApp({
  apiKey: REACT_APP_API_KEY,
  authDomain: "project-zero-vid.firebaseapp.com",
  projectId: "project-zero-vid",
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_SENDER_ID,
  appId: REACT_APP_APP_ID,
});

const db = firebase.firestore();
export { firebaseApp, db };
