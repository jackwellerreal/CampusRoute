import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";

import { Header } from "../Components/Header";
import { Setup } from "../Setup/Setup";

import logo from "../../../Assets/logo.svg";
import logoBig from "../../../Assets/logoBig.svg";

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
        return (
            <section className="main-top">
                <Header />
                <div className="main-content">
                    <div className="main-content-table-container">
                        <Timetable />
                    </div>
                    <div className="main-content-table-container map">
                        <SchoolMap />
                    </div>
                </div>
            </section>
        );
    } else {
        return navigate("/signin");
    }
}

function Timetable() {
    return (
        <div className="main-content-table">
            <span />
            <h1>Monday</h1>
            <h1>Tuesday</h1>
            <h1>Wensday</h1>
            <h1 id="current-day">Thursday</h1>
            <h1>Friday</h1>

            <h2>Period 1</h2>

            <div>
                <h1>8:30 - 9:30</h1>
                <h1>Media</h1>
            </div>
            <div>
                <h1>8:30 - 9:30</h1>
                <h1>Science</h1>
            </div>
            <div>
                <h1>8:30 - 9:30</h1>
                <h1>Japanese</h1>
            </div>
            <div id="current-day">
                <h1>8:30 - 9:30</h1>
                <h1>Maths</h1>
            </div>
            <div>
                <h1>8:30 - 9:30</h1>
                <h1>Japanese</h1>
            </div>

            <h2>Period 2</h2>

            <div>
                <h1>9:30 - 10:30</h1>
                <h1>Hass</h1>
            </div>
            <div>
                <h1>9:30 - 10:30</h1>
                <h1>English</h1>
            </div>
            <div>
                <h1>9:30 - 10:30</h1>
                <h1>ACT</h1>
            </div>
            <div id="current-day">
                <h1>9:30 - 10:30</h1>
                <h1>Japanese</h1>
            </div>
            <div>
                <h1>9:30 - 10:30</h1>
                <h1>Digital Technologies</h1>
            </div>

            <h2>Break 1</h2>

            <div>
                <h1>10:30 - 11:00</h1>
            </div>
            <div>
                <h1>10:30 - 11:00</h1>
            </div>
            <div>
                <h1>10:30 - 11:00</h1>
            </div>
            <div id="current-day">
                <h1>10:30 - 11:00</h1>
            </div>
            <div>
                <h1>10:30 - 11:00</h1>
            </div>

            <h2>Period 3</h2>

            <div>
                <h1>11:00 - 12:00</h1>
                <h1>Maths</h1>
            </div>
            <div>
                <h1>11:00 - 12:00</h1>
                <h1>Hass</h1>
            </div>
            <div>
                <h1>11:00 - 12:00</h1>
                <h1>Media</h1>
            </div>
            <div id="current-day">
                <h1>11:00 - 12:00</h1>
                <h1>Science</h1>
            </div>
            <div>
                <h1>11:00 - 12:00</h1>
                <h1>Science</h1>
            </div>

            <h2>Period 4</h2>

            <div>
                <h1>12:00 - 1:00</h1>
                <h1>Digital Technologies</h1>
            </div>
            <div>
                <h1>12:00 - 1:00</h1>
                <h1>Digital Technologies</h1>
            </div>
            <div>
                <h1>12:00 - 1:00</h1>
                <h1>Maths</h1>
            </div>
            <div id="current-day">
                <h1>12:00 - 1:00</h1>
                <h1>Media</h1>
            </div>
            <div>
                <h1>12:00 - 1:00</h1>
                <h1>Hass</h1>
            </div>

            <h2>Break 2</h2>

            <div>
                <h1>1:00 - 1:30</h1>
            </div>
            <div>
                <h1>1:00 - 1:30</h1>
            </div>
            <div>
                <h1>1:00 - 1:30</h1>
            </div>
            <div id="current-day">
                <h1>1:00 - 1:30</h1>
            </div>
            <div>
                <h1>1:00 - 1:30</h1>
            </div>

            <h2>Period 5</h2>

            <div>
                <h1>1:30 - 2:30</h1>
                <h1>English</h1>
            </div>
            <div>
                <h1>1:30 - 2:30</h1>
                <h1>Maths</h1>
            </div>
            <div>
                <h1>1:30 - 2:30</h1>
                <h1>Conenct</h1>
            </div>
            <div id="current-day">
                <h1>1:30 - 2:30</h1>
                <h1>English</h1>
            </div>
            <div>
                <h1>1:30 - 2:30</h1>
                <h1>English</h1>
            </div>
        </div>
    );
}
function SchoolMap() {
    return (
        <iframe
            src="https://www.openstreetmap.org/export/embed.html"
            style={{ border: "none" }}
        ></iframe>
    );
}
