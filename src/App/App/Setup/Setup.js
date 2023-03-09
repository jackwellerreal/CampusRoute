import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Setup.css";
import "../App/App.css";

import { Header } from "../Components/Header";

import logo from "../../../Assets/logo.svg";
import logoBig from "../../../Assets/logoBig.svg";

import infoSchool from "../../../Assets/undraw/school.svg";

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

export function Setup() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if (user) {
        return (
            <div class="setup-container">
                <div className="setup-main">
                    <div className="setup-content">

                    </div>
                    <div className="setup-photo">
                        <img src={infoSchool} alt="" />
                    </div>
                </div>
            </div>
        );
    } else {
        return navigate("/signin");
    }
}
