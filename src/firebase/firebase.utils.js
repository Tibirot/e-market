import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD5rsP8xDI5-QYN9WxhgjF3Puk7MA6cf3c",
    authDomain: "emarket-c6b18.firebaseapp.com",
    databaseURL: "https://emarket-c6b18.firebaseio.com",
    projectId: "emarket-c6b18",
    storageBucket: "emarket-c6b18.appspot.com",
    messagingSenderId: "613281217416",
    appId: "1:613281217416:web:8efb62c73e7f8e5fe4d83d",
    measurementId: "G-PM48HXNDM6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
