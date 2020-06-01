import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCAYtSIoAPDcaXpRExQ5Ku0ja2SEwWP5Pk",
  authDomain: "article-website.firebaseapp.com",
  databaseURL: "https://article-website.firebaseio.com",
  projectId: "article-website",
  storageBucket: "article-website.appspot.com",
  messagingSenderId: "127426309582",
  appId: "1:127426309582:web:7b044f23af534eebf28f9f",
  measurementId: "G-0B58NSLM04",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
