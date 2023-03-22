import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Setup.css";
import "../App/App.css";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

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
    const [step, setStep] = useState(0);
    const [totalSteps] = useState(4);
    const [selectedSchool, setSelectedSchool] = useState("");

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const items = [
        {
            id: 0,
            name: "Narangba Valley State High School, 4504",
            coordinates: {
                latitude: -27.172588348388672,
                longitude: 152.94122314453125,
            },
        },
        {
            id: 1,
            name: "Burpengary State Secondary College, 4505",
            coordinates: {
                latitude: -27.171745107086906,
                longitude: 152.9775635172628,
            },
        },
        {
            id: 2,
            name: "Caboolture State High School, 4510",
            coordinates: {
                latitude: -27.0833849,
                longitude: 152.9618494,
            },
        },
    ];

    const schoolSearch = (item) => {
        setSelectedSchool(item);
        console.log(selectedSchool);
    };

    if (user) {
        return (
            <div className="setup-container">
                <div className="setup-main">
                    <div className="setup-content">
                        {step === 0 ? (
                            <>
                                <div>
                                    <h1>Let's Get Started</h1>
                                    <p>
                                        Welcome to the CampusRoute setup page!
                                        We're excited to join you on your
                                        university journey and provide you with
                                        a seamless navigation and organization
                                        experience. By setting up CampusRoute,
                                        you'll have access to real-time
                                        directions to classes, reminders for
                                        homework and assignments, and class
                                        transition notifications. With our
                                        user-friendly interface and helpful
                                        features, you can focus on what's
                                        important - your academic goals.
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        setStep(step + 1);
                                    }}
                                >
                                    Got it!
                                </button>
                            </>
                        ) : (
                            <>
                                {step === 1 ? (
                                    <>
                                        <div>
                                            <h1>What School Do You Attend?</h1>
                                            <div className="setup-error">
                                                <strong>WARNING</strong>
                                                <p>
                                                    Please note that
                                                    CampusRoute's beta testing
                                                    is currently limited to the
                                                    Upper Caboolture region,
                                                    which includes Caboolture,
                                                    Burpengary, and Narangba.
                                                </p>
                                            </div>
                                            <div className="setup-input">
                                                <ReactSearchAutocomplete
                                                    items={items}
                                                    placeholder="Search for your school"
                                                    onSelect={schoolSearch}
                                                    autoFocus
                                                    styling={{
                                                        height: "44px",
                                                        border: "none",
                                                        borderRadius: "24px",
                                                        backgroundColor:
                                                            "#121212",
                                                        boxShadow: "none",
                                                        hoverBackgroundColor:
                                                            "#181818",
                                                        color: "#ffffff",
                                                        iconColor: "#b3b3b3",
                                                        lineColor: "#e6e6e6",
                                                        placeholderColor:
                                                            "grey",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="setup-buttons">
                                            <button
                                                onClick={() => {
                                                    setStep(step - 1);
                                                }}
                                            >
                                                Back
                                            </button>
                                            <h1>
                                                {step}/{totalSteps}
                                            </h1>
                                            <button
                                                disabled={!selectedSchool}
                                                onClick={() => {
                                                    setStep(step + 1);
                                                }}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {step === 2 ? (
                                            <>
                                                <div>
                                                    <h1>
                                                        Is this the correct
                                                        school?
                                                    </h1>
                                                    <iframe
                                                        src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedSchool.coordinates.longitude}%2C${selectedSchool.coordinates.latitude}`}
                                                        style={{
                                                            border: "none",
                                                            marginTop: "0.5em",
                                                            width: "85%",
                                                            height: "20em",
                                                        }}
                                                    ></iframe>
                                                </div>
                                                <div className="setup-buttons">
                                                    <button
                                                        onClick={() => {
                                                            setStep(step - 1);
                                                        }}
                                                    >
                                                        No
                                                    </button>
                                                    <h1>
                                                        {step}/{totalSteps}
                                                    </h1>
                                                    <button
                                                        disabled={
                                                            !selectedSchool
                                                        }
                                                        onClick={() => {
                                                            setStep(step + 1);
                                                        }}
                                                    >
                                                        Yes
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div>
                                                    <h1>
                                                        Please fill in this
                                                        form:
                                                    </h1>
                                                    <div className="setup-error">
                                                        <strong>WARNING</strong>
                                                        <p>
                                                            You cannot change
                                                            this infomation once
                                                            you go to the next
                                                            page!
                                                        </p>
                                                    </div>
                                                    <div className="setup-input-number">
                                                        <input
                                                            type="number"
                                                            min="1"
                                                            max="7"
                                                            onChange={(e) => {
                                                                if(e.target.value > 7) {e.target.value = 7}
                                                                if(e.target.value < 1) {e.target.value = 1}
                                                            }}
                                                            placeholder="Enter how many classes you have each day"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="setup-buttons">
                                                    <button
                                                        onClick={() => {
                                                            setStep(step - 1);
                                                        }}
                                                    >
                                                        No
                                                    </button>
                                                    <h1>
                                                        {step}/{totalSteps}
                                                    </h1>
                                                    <button
                                                        disabled={
                                                            !selectedSchool
                                                        }
                                                        onClick={() => {
                                                            setStep(step + 1);
                                                        }}
                                                    >
                                                        Yes
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        )}
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
