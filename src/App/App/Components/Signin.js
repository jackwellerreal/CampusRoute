import React, { useState, useEffect } from "react";
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const usersCollection = firestore.collection("users");

    const addUser = () => {
        const userId = auth.currentUser.uid;
        const userEmail = auth.currentUser.email;
        const signInMethod = auth.currentUser.providerData[0]?.providerId;

        const userQuery = usersCollection.where("userID", "==", userId);
        userQuery
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    usersCollection
                        .doc(userId)
                        .set({
                            userNAME: auth.currentUser.displayName,
                            userID: userId,
                            userEMAIL: userEmail,
                            signInMethod: signInMethod,
                            userPFP: auth.currentUser.photoURL,
                            userCREATED: firebase.firestore.FieldValue.serverTimestamp(),
                            finishedSetup: false
                        })
                        .then(() => {
                            console.log("User account created & signed in!");
                        })
                        .catch((error) => {
                            console.log("Error creating user account:", error);
                        });
                } else {
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
