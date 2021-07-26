import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCgTF0zTP3gL9K8iaxPjhUCmEUqKhlAZHU",
  authDomain: "social-ledger-989d6.firebaseapp.com",
  projectId: "social-ledger-989d6",
  storageBucket: "social-ledger-989d6.appspot.com",
  messagingSenderId: "1004014402141",
  appId: "1:1004014402141:web:d7e271172e3bd16cc56bb4",
  measurementId: "G-D8GBBG08BR",
};
// Initialize Firebase
if (firebase) {
  if (firebase.initializeApp) {
    firebase.initializeApp(firebaseConfig);
  }
}

export default firebase;
