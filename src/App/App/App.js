import React from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";

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

export function App() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if (user) {
        console.log(auth.currentUser)
        return (
            <div>
                hi {auth.currentUser.displayName}<br />
                <img src={auth.currentUser.photoURL} /><br />
                <button
                    onClick={() => {
                        auth.signOut();
                        window.location.reload();
                    }}
                >
                    Sign Out
                </button>
            </div>
        );
    } else {
        return navigate("/signup");
    }
}
