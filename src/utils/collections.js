import firebase from "./firebase";

export const PeersCollection = firebase.firestore().collection("peers");
