import React from "react";

import "../App.css";

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

export function Header() {
    return (
        <header className="header">
            <nav></nav>
            <nav></nav>

            <nav className="header-pfp-dropdown">
                <a className="header-pfp-dropdown-btn">
                    <img
                        src={auth.currentUser.photoURL}
                        className="header-pfp"
                        alt=""
                        referrerPolicy="no-referrer"
                    />
                </a>
                <div className="header-pfp-dropdown-content">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                verticalAlign: "-0.125em",
                                marginRight: "0.5em",
                            }}
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
                            />
                        </svg>
                        Settings
                    </button>
                    <button
                        onClick={() => {
                            auth.signOut();
                            window.location.reload();
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                verticalAlign: "-0.125em",
                                marginRight: "0.5em",
                            }}
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 512"
                        >
                            <rect
                                x="0"
                                y="0"
                                width="512"
                                height="512"
                                fill="none"
                                stroke="none"
                            />
                            <path
                                fill="currentColor"
                                d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                            />
                        </svg>
                        Sign Out
                    </button>
                </div>
            </nav>
        </header>
    );
}
