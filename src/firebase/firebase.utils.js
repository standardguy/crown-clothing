import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAu2bld7nWsieIwvNeGtaHYQnzc3SjuMzU",
  authDomain: "crown-db-33675.firebaseapp.com",
  databaseURL: "https://crown-db-33675.firebaseio.com",
  projectId: "crown-db-33675",
  storageBucket: "crown-db-33675.appspot.com",
  messagingSenderId: "116855988670",
  appId: "1:116855988670:web:3eae29c010ed87347e19ef",
  measurementId: "G-CD0RTGB04T",
};

export const createUserProfileDocument = async (
  userAuth,
  ...otherUserAuthProps
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherUserAuthProps,
      });
    } catch (error) {
      console.log("Error createing user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
