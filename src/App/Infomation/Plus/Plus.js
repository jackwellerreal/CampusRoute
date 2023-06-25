import React, { useState, useEffect } from "react";

import styles from "./Plus.module.css";

import { Header } from "../../Home/Components/Header";
import { Footer } from "../../Home/Components/Footer";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function Plus() {
    return (
        <>
            <section className={styles["plus-top"]}>
                <Header />
                <div className={styles["plus-top-content"]}>
                    <h1>Navigator +</h1>
                    <h3>
                        CampusRoute but{" "}
                        <span className={styles.emphasis}>
                            better
                        </span>
                    </h3>
                    <ul className={styles["plus-top-content-plan-list"]}>
                        <li className={styles["plus-top-content-plan-list-item"]}></li>
                    </ul>
                    <div className={styles["plus-top-content-plans"]}>
                        <div className={styles["plus-top-content-plan"]}>
                            <h2 className={styles["plus-top-content-plan-header"]}>
                                Subscription
                            </h2>

                            <h4 className={styles["plus-top-content-plan-price"]}>
                                <span
                                    className={styles["plus-top-content-plan-price-int"]}
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(0deg,var(--red-50),var(--yellow-50))",
                                    }}
                                >
                                    2.99
                                </span>{" "}
                                / month
                            </h4>

                            <button className={styles["plus-top-content-plan-button"]}>
                                <span className={styles["plus-top-content-plan-button-text"]}>
                                    Soon™
                                </span>
                            </button>
                        </div>
                        <div className={styles["plus-top-content-plan"]}>
                            <h2 className={styles["plus-top-content-plan-header"]}>
                                Lifetime
                            </h2>

                            <h4 className={styles["plus-top-content-plan-price"]}>
                                <span
                                    className={styles["plus-top-content-plan-price-int"]}
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(0deg,var(--purple-50),var(--blue-50))",
                                    }}
                                >
                                    24.99
                                </span>{" "}
                                once
                            </h4>

                            <button className={styles["plus-top-content-plan-button"]}>
                                <span className={styles["plus-top-content-plan-button-text"]}>
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
