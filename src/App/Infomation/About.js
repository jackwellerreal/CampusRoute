import React, { useState, useEffect } from "react";

import styles from "./Information.module.css";

import { Header } from "../Home/Components/Header";
import { Footer } from "../Home/Components/Footer";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function About() {
    return (
        <>
            <section className={styles["information-top"]}>
                <div className={styles["information-background-top"]}></div>
                <Header />
                <div className={styles["information-top-content"]}>
                    <h1 className={styles["information-title"]}>About Campus Route</h1>
                    <div></div>
                </div>
                <div className={styles["information-background-bottom"]}></div>
            </section>
            <Footer />
        </>
    );
}
