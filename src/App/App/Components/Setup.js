import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import styles from "../App.module.css";

import infoSchool from "../../../Assets/undraw/school.svg";

export function Setup() {
    const [step, setStep] = useState(0);
    const [totalSteps] = useState(4);
    const [selectedSchool, setSelectedSchool] = useState("");

    const items = [
        {
            id: 0,
            name: "Narangba Valley State High School, 4504",
            coordinates: {
                dict: {
                    latitude: -27.172588348388672,
                    longitude: 152.94122314453125,
                },
                array: [-27.172588348388672, 152.94122314453125],
            },
        },
        {
            id: 1,
            name: "Burpengary State Secondary College, 4505",
            coordinates: {
                dict: {
                    latitude: -27.171745107086906,
                    longitude: 152.9775635172628,
                },
                array: [-27.171745107086906, 152.9775635172628],
            },
        },
        {
            id: 2,
            name: "Caboolture State High School, 4510",
            coordinates: {
                dict: {
                    latitude: -27.0833849,
                    longitude: 152.9618494,
                },
                array: [-27.0833849, 152.9618494],
            },
        },
    ];

    const schoolSearch = (item) => {
        setSelectedSchool(item);
        console.log(selectedSchool);
    };

    const SetupPage = () => {
        if (step === 0) {
            return (
                <>
                    <div>
                        <h1>Let's Get Started</h1>
                        <p>
                            Welcome to the CampusRoute setup page! We're excited
                            to accompany you on your university journey and
                            provide you with a seamless navigation and
                            organization experience. By setting up CampusRoute,
                            you'll gain access to a comprehensive timetable that
                            displays all your classes, receive real-time
                            directions to your classes, and stay informed with
                            class transition notifications. Our user-friendly
                            interface and helpful features allow you to stay
                            focused on your academic goals.
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
            );
        }
        if (step === 1) {
            return (
            <>
                <div>
                    <h1>What School Do You Attend?</h1>
                    <div className={styles["setup-error"]}>
                        <strong>WARNING</strong>
                        <p>
                            Please note that CampusRoute's beta testing is
                            currently limited to the Upper Caboolture region,
                            which includes Caboolture, Burpengary, and Narangba.
                        </p>
                    </div>
                    <div className={styles["setup-input"]}>
                        <ReactSearchAutocomplete
                            items={items}
                            placeholder="Search for your school"
                            onSelect={schoolSearch}
                            inputSearchString={selectedSchool.name}
                            autoFocus
                            styling={{
                                fontSize: "large",
                                fontWeight: "600",
                                border: "none",
                                borderRadius: "10px",
                                padding: "0.75em",
                                backgroundColor: "#555555",
                                hoverBackgroundColor: "#6b6b6b",
                                boxShadow: "none",
                                color: "#ffffff",
                                iconColor: "#b3b3b3",
                                lineColor: "#e6e6e6",
                                placeholderColor: "grey",
                            }}
                        />
                    </div>
                </div>
                <div className={styles["setup-buttons"]}>
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
            </>);
        }
        if (step === 2) {
            return (
            <>
                <div>
                    <h1>Is this the correct school?</h1>
                </div>
                <MapContainer
                    center={selectedSchool.coordinates.array}
                    zoom={17}
                    maxZoom={18}
                    style={{
                        width: "100%",
                        height: "80%",
                    }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    <Marker position={selectedSchool.coordinates.array} />
                </MapContainer>
                <div className={styles["setup-buttons"]}>
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
                        disabled={!selectedSchool}
                        onClick={() => {
                            setStep(step + 1);
                        }}
                    >
                        Yes
                    </button>
                </div>
            </>);
        }
        if (step === 3) {
            return (
            <>
                <div>
                    <h1>Please fill in this form:</h1>
                    <div className={styles["setup-error"]}>
                        <strong>WARNING</strong>
                        <p>
                            You cannot change this infomation once you finish
                            the setup
                        </p>
                    </div>
                    <div className={styles["setup-input-number"]}>
                        <input
                            type="number"
                            min="1"
                            max="7"
                            onChange={(e) => {
                                if (e.target.value > 7) {
                                    e.target.value = 7;
                                }
                                if (e.target.value < 1) {
                                    e.target.value = 1;
                                }
                            }}
                            placeholder="Enter how many classes do you have each day"
                        />
                    </div>
                    <div className={styles["setup-input-number"]}>
                        <input
                            type="number"
                            min="1"
                            max="3"
                            onChange={(e) => {
                                if (e.target.value > 3) {
                                    e.target.value = 3;
                                }
                                if (e.target.value < 1) {
                                    e.target.value = 1;
                                }
                            }}
                            placeholder="Enter how many breaks do you have each day"
                        />
                    </div>
                </div>
                <div className={styles["setup-buttons"]}>
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
            </>);
        }
        if (step === 4) {
            return (<>
            <div></div>
                <div className={styles["setup-buttons"]}>
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
                </>)
        }
    };

    return (
        <div className={`${styles["app-box"]} ${styles["setup"]}`}>
            <div className={styles["setup-content"]}>
                <SetupPage />
            </div>
            <div className={styles["setup-photo"]}>
                <img src={infoSchool} alt="" />
            </div>
        </div>
    );
}
