import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

import styles from "../App.module.css";

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
const firestore = firebase.firestore();

const notyf = new Notyf({
    duration: 3000,
    position: {
        x: "right",
        y: "top",
    },
});

export function Settings() {
    const [user] = useAuthState(auth);
    const userID = user.uid;

    const usersCollection = firestore.collection("users");

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                console.log("User logged out");
            })
            .catch((error) => {
                console.error("Error logging out", error);
            });
    };

    const handleDeleteAccount = async () => {
        try {
            const tempData = await usersCollection.doc(userID);
            await usersCollection.doc(userID).delete();
            try {
                await auth.currentUser.delete();
            } catch (error) {
                notyf.error(
                    "To proceed, please sign in again and retry the operation."
                );
                console.error(error);
                await usersCollection.doc(userID).set(tempData.data());
            }
            console.log("User account deleted successfully");
        } catch (error) {
            console.error(error);
        }
    };

    const handleDataExport = async () => {
        try {
            const userDataSnapshot = await usersCollection.doc(user.uid).get();
            const userData = userDataSnapshot.data();

            const userDataBlob = new Blob([JSON.stringify(userData)], {
                type: "application/json",
            });
            const userDataURL = URL.createObjectURL(userDataBlob);

            const downloadLink = document.createElement("a");
            downloadLink.href = userDataURL;
            downloadLink.download = `userdata_${user.uid}.json`;
            downloadLink.click();

            URL.revokeObjectURL(userDataURL);
        } catch (error) {
            console.error("Error exporting user data: ", error);
        }
    };

    return (
        <div className={`${styles["app-box"]} ${styles["settings"]}`}>
            <h2>Account Settings</h2>

            <div className={styles["settings-info"]}>
                <div className={styles["settings-info-containter"]}>
                    <h4>Name:</h4>
                    <p className={styles["settings-info-data"]}>
                        {user.displayName}
                    </p>
                </div>

                <div className={styles["settings-info-containter"]}>
                    <h4>Email:</h4>
                    <p className={styles["settings-info-data"]}>{user.email}</p>
                </div>
            </div>

            <button
                className={`${styles["settings-button"]} ${styles["danger"]}`}
                onClick={handleLogout}
            >
                Logout
            </button>
            <button
                className={`${styles["settings-button"]} ${styles["danger"]}`}
                onClick={handleDeleteAccount}
            >
                Delete Account
            </button>

            <button
                className={styles["settings-button"]}
                onClick={handleDataExport}
            >
                Request Data Export
            </button>
        </div>
    );
}
