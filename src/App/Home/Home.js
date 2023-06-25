import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import styles from "./Home.module.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import logo from "../../Assets/logo.svg";
import logoBig from "../../Assets/logoBig.svg";
import ad from "../../Assets/branding/ad.png";
import infoHomework from "../../Assets/undraw/homework.svg";
import infoMap from "../../Assets/undraw/map.svg";
import infoNotification from "../../Assets/undraw/notification.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function Home() {
    useEffect(() => {
        new Typewriter(document.getElementById("home-top-description"), {
            strings: ["success", "advancement", "growth"],
            autoStart: true,
            loop: true,
            delay: 75,
            cursor: "",
        }).start();
    }, []);

    return (
        <>
            <section className={styles["home-top"]}>
                <Header />
                <div className={styles["home-top-content"]}>
                    <h1>Campus Route</h1>
                    <div>
                        <p>
                            Navigate your way to{" "}
                            <span className={styles["home-top-description"]} id="home-top-description"></span> with Campus
                            Route.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles["home-info"]}>
                <h1>
                    Streamline Your Education Experience with These Features
                </h1>
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOnce={true}
                >
                    <div className={styles["home-info-content"]}>
                        <div className={styles["home-info-content-item"]}>
                            <img src={infoMap} alt="" />
                            <p>
                                Our app is the perfect navigation companion for
                                students, providing real-time directions to all
                                of your classes. Simply input your class
                                schedule and CampusRoute will do the rest,
                                showing you the fastest and most efficient path
                                to your next class. Whether you're walking,
                                cycling, or taking public transport, our app has
                                got you covered with the best route options.
                                With its intuitive interface and easy-to-follow
                                directions, you'll arrive at each class with
                                confidence and on time.
                            </p>
                        </div>
                        <div className={styles["home-info-content-item"]}>
                            <img src={infoHomework} alt="" />
                            <p>
                                Homework Management is a feature that allows
                                students to keep track of their assignments, set
                                reminders for upcoming due dates, and receive
                                notifications when new homework is assigned by
                                their teachers. With this feature, students can
                                stay organized and prioritize their workload,
                                ensuring they complete all of their homework on
                                time and to the best of their ability.
                            </p>
                        </div>
                        <div className={styles["home-info-content-item"]}>
                            <img src={infoNotification} alt="" />
                            <p>
                                Say goodbye to class scheduling confusion. We
                                make transitioning between classes a breeze by
                                sending you real-time notifications when your
                                current class is over. Not only will you never
                                have to worry about losing track of time in
                                class again, but you'll also know exactly what
                                class you have next and how to get there. No
                                more rushing through the hallways trying to find
                                your next class, we got you covered. With our
                                intuitive interface and helpful reminders,
                                you'll arrive at each class on time, organized,
                                and ready to learn.
                            </p>
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>
            <section className={styles["home-bottom"]}>
                <div className={styles["home-bottom-content"]}>
                    <h1>Frequently Asked Questions</h1>
                    <AnimationOnScroll
                        animateIn="animate__fadeIn"
                        animateOnce={true}
                    >
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>What is CampusRoute?</summary>
                            <p>
                                CampusRoute is an app designed to help students
                                navigate their way around high school/university
                                campuses by providing real-time directions to
                                their classes.
                            </p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>
                                What features does CampusRoute offer?
                            </summary>
                            <p>
                                CampusRoute offers features such as class
                                scheduling, real-time navigation, and class
                                transition notifications.
                            </p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>
                                Is CampusRoute available for both iOS and
                                Android devices?
                            </summary>
                            <p>
                                Yes, CampusRoute is available for both iOS and
                                Android devices.
                            </p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>Does CampusRoute work offline?</summary>
                            <p>
                                No, CampusRoute requires a stable internet
                                connection to function properly.
                            </p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>
                                Can I input my own class schedule into
                                CampusRoute?
                            </summary>
                            <p>
                                Yes, you can easily input your class schedule
                                into CampusRoute and it will provide you with
                                the quickest route to each class.
                            </p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>
                                Can I use CampusRoute for other places besides
                                high schools/universities?
                            </summary>
                            <p>
                                CampusRoute is designed specifically for high
                                school and university campuses and may not work
                                for other locations.
                            </p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>
                                How does CampusRoute determine the best route
                                for me?
                            </summary>
                            <p>
                                CampusRoute uses OpenStreet technology to
                                determine the quickest and most efficient route
                                to your classes.
                            </p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>
                                Does CampusRoute track my location?
                            </summary>
                            <p>
                                Yes, CampusRoute utilizes your device's GPS to
                                offer real-time navigation without storing any
                                personal data.
                            </p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>Is CampusRoute free?</summary>
                            <p>
                                Indeed, CampusRoute is a fully free app
                                accessible on Android and iOS devices. While
                                there is a premium subscription available, it
                                does not restrict any of the essential features.
                            </p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>
                                Can I provide feedback or report a problem with
                                the app?
                            </summary>
                            <p>
                                Yes, you can provide feedback or report any
                                problems through the app's support center or by
                                contacting the developer directly.
                            </p>
                        </details>
                    </AnimationOnScroll>
                </div>
                <Footer />
            </section>
        </>
    );
}
