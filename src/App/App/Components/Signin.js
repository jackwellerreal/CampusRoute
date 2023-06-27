import React from "react";
import { Icon } from "@iconify/react";

import styles from "../Signin.module.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { fetchSignInMethodsForEmail } from "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyAeeTvV_czzoX_qxVOgRMxrE1aNEo6SMgQ",
    authDomain: "campusroute-ca268.firebaseapp.com",
    projectId: "campusroute-ca268",
    storageBucket: "campusroute-ca268.appspot.com",
    messagingSenderId: "164037552565",
    appId: "1:164037552565:web:e64461bee2e260d57191fc",
    measurementId: "G-7GN7W7HW1C",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export function Signin() {
    const [user] = useAuthState(auth);

    const usersCollection = firestore.collection("users");

    const addUser = (e) => {
        const userId = auth.currentUser.uid;

        usersCollection
            .where("userID", "==", userId)
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    usersCollection
                        .add({
                            userNAME: auth.currentUser.displayName,
                            userID: userId,
                            authorPFP: auth.currentUser.photoURL,
                            userCREATED:
                                firebase.firestore.FieldValue.serverTimestamp(),
                        })
                        .then(() => {
                            console.log("User account created & signed in!");
                        });
                    console.log("User account already exists!");
                }
            })
            .catch((error) => {
                console.log("Error checking user account:", error);
            });
    };

    const signInWithGoogle = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((res) => {
            addUser();
        });
    };
    const signInWithMicrosoft = () => {
        let provider = new firebase.auth.OAuthProvider("microsoft.com");
        auth.signInWithPopup(provider).then((res) => {
            addUser();
        });
    };

    return (
        <div className={styles["signin-box"]}>
            <h1>Sign In</h1>
            <button
                onClick={signInWithGoogle}
                className={styles["googleButton"]}
            >
                Sign In with Google
            </button>
            <button
                onClick={signInWithMicrosoft}
                className={styles["msButton"]}
            >
                Sign In with Microsoft
            </button>
        </div>
    );
}
