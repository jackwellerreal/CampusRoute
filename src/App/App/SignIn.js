import React from "react";
import { useNavigate } from "react-router-dom";

import "./SignIn.css";

import logo from "../../Assets/logo.svg";
import logoBig from "../../Assets/logoBig.svg";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";

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

export function SignIn() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };
    const signInWithMicrosoft = () => {
        let provider = new firebase.auth.OAuthProvider("microsoft.com");
        auth.signInWithPopup(provider);
    };

    if (!user) {
        return (
            <div className="body">
                <div className="container">
                    <h1>Sign In</h1>
                    <button onClick={signInWithGoogle} id="googleButton">
                        Sign In with Google
                    </button>
                    <button onClick={signInWithMicrosoft} id="msButton">
                        Sign In with Microsoft
                    </button>
                </div>
            </div>
        );
    } else {
        return navigate("/app");
    }
}
