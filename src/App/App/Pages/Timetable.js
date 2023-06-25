import React from "react";

import styles from "../App.module.css";

import { Header } from "../../Home/Components/Header";
import { Footer } from "../../Home/Components/Footer";

import { Menu } from "../Components/Menu";
import { TimeTable } from "../Components/Timetable";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function AppTimetable() {
    return (
        <>
            <section className={styles["app-top"]}>
                <Header />
                <div
                    className={`${styles["app-top-content"]} ${styles["app-top-content-app"]}`}
                    style={{ textAlign: "start" }}
                >
                    <Menu />
                    <TimeTable />
                </div>
            </section>
            <Footer />
        </>
    );
}
