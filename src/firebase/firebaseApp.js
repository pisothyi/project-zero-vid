import firebase from "firebase";
import "firebase/auth";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSHbgY_vn43q_LODQXcJCdMRiJB_l3vGQ",
  authDomain: "project-zero-vid.firebaseapp.com",
  projectId: "project-zero-vid",
  storageBucket: "project-zero-vid.appspot.com",
  messagingSenderId: "1053236613935",
  appId: "1:1053236613935:web:68a478966653de22bcc7da",
});

const db = firebase.firestore();
export { firebaseApp, db };
