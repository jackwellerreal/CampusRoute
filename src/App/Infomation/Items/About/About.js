import React, { useState, useEffect } from "react";

import styles from "./About.module.css";

import { Header } from "../../../Home/Components/Header";
import { Footer } from "../../../Home/Components/Footer";

import infoAbout from "../../../../Assets/undraw/about.svg";
import infoGoals from "../../../../Assets/undraw/goals.svg";
import infoHistory from "../../../../Assets/undraw/studying.svg";
import infoCode from "../../../../Assets/undraw/code.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function About() {
    return (
        <>
            <section className={styles["about-top"]}>
                <div className={styles["about-background-top"]}></div>
                <Header />
                <div className={styles["about-top-content"]}>
                    <h1 className={styles["about-title"]}>
                        About Campus Route
                    </h1>
                    <div>
                        <div className={styles["about-markdown"]}>
                            <div className={styles["about-item"]}>
                                <div>
                                    <h2>What is Campus Route?</h2>
                                    <p>
                                        Campus Route is an essential student
                                        navigation application that empowers
                                        users to seamlessly manage their
                                        academic journey. With a built-in
                                        calendar displaying upcoming classes, a
                                        real-time map for precise class
                                        navigation, and timely notifications for
                                        upcoming classes, Campus Route
                                        streamlines your academic schedule and
                                        keeps you on track.
                                    </p>
                                </div>
                                <img
                                    alt="Queensland in Australia"
                                    src={infoAbout}
                                />
                            </div>
                            <div className={styles["about-item"]}>
                                <img
                                    alt="Queensland in Australia"
                                    src={infoGoals}
                                />
                                <div>
                                    <h2>Our Mission</h2>
                                    <p>
                                        At Campus Route, our mission is centered
                                        around elevating students' academic
                                        experiences and fostering their success.
                                        We are dedicated to providing a
                                        comprehensive solution that empowers
                                        students to effortlessly manage their
                                        coursework, track their class schedules,
                                        and confidently navigate campus life.
                                        Our commitment to enhancing educational
                                        journeys extends beyond conventional
                                        boundaries as we strive to equip
                                        students with the tools they need to
                                        thrive. By offering a seamless platform
                                        that ensures students are always on top
                                        of their work, aware of their classes,
                                        and equipped with real-time guidance, we
                                        aim to create a supportive environment
                                        that propels them towards their academic
                                        aspirations and beyond.
                                    </p>
                                </div>
                            </div>
                            <div className={styles["about-item"]}>
                                <div>
                                    <h2>History</h2>
                                    <p>
                                        Campus Route originated from our
                                        founder driven by his personal
                                        frustration with the absence of suitable
                                        applications to streamline his study
                                        routine. This frustration led to the
                                        inception of Campus Route, initially
                                        conceived to facilitate schools in
                                        managing student attendance, essay
                                        submissions, assignments, and other
                                        scholastic functions. However, our focus
                                        shifted to prioritize students' needs,
                                        evolving Campus Route into a
                                        comprehensive navigation tool tailored
                                        to enhance students' organizational and
                                        academic experience.
                                    </p>
                                </div>
                                <img
                                    alt="Queensland in Australia"
                                    src={infoHistory}
                                />
                            </div>
                            <div className={styles["about-item"]}>
                                <img
                                    alt="Queensland in Australia"
                                    src={infoCode}
                                />
                                <div>
                                    <h2>Transparency</h2>
                                    <p>
                                        At Campus Route, transparency is at the
                                        core of our approach. We believe in an
                                        open and accountable system, which is
                                        why we've made our source code readily
                                        accessible on an{" "}
                                        <a href="https://github.com/CampusRoute/CampusRoute">
                                            open-source GitHub repository
                                        </a>
                                        . This not only allows our users to see
                                        the inner workings of our technology but
                                        also fosters collaboration and community
                                        contributions. As for data, rest assured
                                        that we adhere to strict data usage
                                        policies. We collect only the essential
                                        information necessary for our product to
                                        function effectively. Your privacy is of
                                        utmost importance to us, and we are
                                        committed to using collected data solely
                                        for the purpose of enhancing your
                                        navigation experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["about-background-bottom"]}></div>
            </section>
            <Footer />
        </>
    );
}
