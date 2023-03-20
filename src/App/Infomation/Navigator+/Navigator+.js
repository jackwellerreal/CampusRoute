import React, { useState, useEffect } from "react";

import "./Navigate+.css";

import { Header } from "../../Home/Components/Header";
import { Footer } from "../../Home/Components/Footer";

import logo from "../../../Assets/logo.svg";
import logoBig from "../../../Assets/logoBig.svg";
import infoHomework from "../../../Assets/undraw/homework.svg";
import infoMap from "../../../Assets/undraw/map.svg";
import infoNotification from "../../../Assets/undraw/notification.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function NavigatorPlus() {
    return (
        <>
            <section className="main-top">
                <Header />
                <div className="main-top-content">
                    <h1>
                        CampusRoute but{" "}
                        <span className="main-top-content-emphasis">
                            better
                        </span>
                    </h1>
                    <div className="main-top-content-plans">
                        <div className="main-top-content-plan">
                            <h2 className="main-top-content-plan-header">
                                Subscription
                            </h2>

                            <h4 className="main-top-content-plan-price">
                                ${" "}
                                <span
                                    className="main-top-content-plan-price-int"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(0deg,var(--red-50),var(--yellow-50))",
                                    }}
                                >
                                    2.99
                                </span>{" "}
                                / month
                            </h4>

                            <button className="main-top-content-plan-button">
                                <span className="main-top-content-plan-button-text">
                                    Soon™
                                </span>
                            </button>
                        </div>
                        <div className="main-top-content-plan">
                            <h2 className="main-top-content-plan-header">
                                Lifetime
                            </h2>

                            <h4 className="main-top-content-plan-price">
                                ${" "}
                                <span
                                    className="main-top-content-plan-price-int"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(0deg,var(--purple-50),var(--blue-50))",
                                    }}
                                >
                                    24.99
                                </span>{" "}
                                once
                            </h4>

                            <button className="main-top-content-plan-button">
                                <span className="main-top-content-plan-button-text">
                                    Soon™
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
