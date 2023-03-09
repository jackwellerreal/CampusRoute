import React from "react";

import "./Home.css";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

import logo from "../../Assets/logo.svg";
import logoBig from "../../Assets/logoBig.svg";
import infoHomework from "../../Assets/undraw/homework.svg";
import infoMap from "../../Assets/undraw/map.svg";
import infoNotification from "../../Assets/undraw/notification.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function Home() {
    return (
        <>
            <section className="main-top">
                <Header />
                <div className="main-top-content">
                    <h1>Campus Route</h1>
                    <p>
                        CampusRoute is a navigation app for university students,
                        offering real-time directions to classes, homework reminders, 
                        and class transition notifications for a
                        seamless campus experience.
                    </p>
                </div>
            </section>
            <section className="main-info">
                <h1>
                    Streamline Your Education Experience with These Features
                </h1>
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOnce={true}
                >
                    <div className="main-info-content">
                        <div className="main-info-content-item">
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
                        <div className="main-info-content-item">
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
                        <div className="main-info-content-item">
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
            <section className="main-bottom">
                <div className="main-bottom-content">
                    <h1>Frequently Asked Questions</h1>
                    <AnimationOnScroll
                        animateIn="animate__fadeIn"
                        animateOnce={true}
                    >
                        <details className="main-bottom-content-detail">
                            <summary>What is CampusRoute?</summary>
                            <p>
                                CampusRoute is an app designed to help students
                                navigate their way around high school/university
                                campuses by providing real-time directions to
                                their classes.
                            </p>
                        </details>
                        <details className="main-bottom-content-detail">
                            <summary>
                                What features does CampusRoute offer?
                            </summary>
                            <p>
                                CampusRoute offers features such as class
                                scheduling, real-time navigation, and class
                                transition notifications.
                            </p>
                        </details>
                        <details className="main-bottom-content-detail">
                            <summary>
                                Is CampusRoute available for both iOS and
                                Android devices?
                            </summary>
                            <p>
                                Yes, CampusRoute is available for both iOS and
                                Android devices.
                            </p>
                        </details>
                        <details className="main-bottom-content-detail">
                            <summary>Does CampusRoute work offline?</summary>
                            <p>
                                No, CampusRoute requires a stable internet
                                connection to function properly.
                            </p>
                        </details>
                        <details className="main-bottom-content-detail">
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
                        <details className="main-bottom-content-detail">
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
                        <details className="main-bottom-content-detail">
                            <summary>
                                How does CampusRoute determine the best route
                                for me?
                            </summary>
                            <p>
                                CampusRoute uses Google Maps satalight
                                technology to determine the quickest and most
                                efficient route to your classes.
                            </p>
                        </details>
                        <details className="main-bottom-content-detail">
                            <summary>
                                Does CampusRoute track my location?
                            </summary>
                            <p>
                                Yes, CampusRoute uses your device's GPS to
                                provide real-time navigation and track your
                                attendance.
                            </p>
                        </details>
                        <details className="main-bottom-content-detail">
                            <summary>Is CampusRoute free?</summary>
                            <p>
                                Yes, CampusRoute is a completely free app
                                available for both Android and iOS devices.
                                There are no hidden fees or in-app purchases
                                required to access any of its features.
                            </p>
                        </details>
                        <details className="main-bottom-content-detail">
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
