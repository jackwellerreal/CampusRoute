import React from 'react';

import './App.css'

import logo from "../Assets/logo.png"
import logoBig from "../Assets/logoBig.png"
import infoList from "../Assets/undraw/list.svg"
import infoMap from "../Assets/undraw/map.svg"
import infoNotification from "../Assets/undraw/notification.svg"

export function Home() {
    return (
        <>
            <section className="main-top">
                <header className="header">
                    <img src={logo} className="header-logo" alt="" />
                    <nav>
                        <a>Get a Quote</a>
                    </nav>
                </header>
                <div className="main-top-content">
                    <h1>Campus Route</h1>
                    <p>CampusRoute is a navigation app for university students, offering real-time directions to classes, attendance tracking, and class transition notifications for a seamless campus experience.</p>
                </div>
            </section>
            <section className="main-info">
                <h1>Why use Campus Route?</h1>
                <div className="main-info-content">
                    <div className="main-info-content-item">
                        <img src={infoMap} alt="" />
                        <p>Our app is the perfect navigation companion for students, providing real-time directions to all of your classes. Simply input your class schedule and CampusRoute will do the rest, showing you the fastest and most efficient path to your next class. Whether you're walking, cycling, or taking public transport, our app has got you covered with the best route options. With its intuitive interface and easy-to-follow directions, you'll arrive at each class with confidence and on time.</p>
                    </div>
                    <div className="main-info-content-item">
                        <img src={infoList} alt="" />
                        <p>Gone are the days of manual roll calls and keeping track of attendance on paper. You can mark your attendance for each class with just a few taps. Not only is this a time-saver for you, but it's also an accurate and reliable way for you to keep track of class attendance. Whether you have a large lecture hall or a small seminar, CampusRoute ensures that your students are accounted for.</p>
                    </div>
                    <div className="main-info-content-item">
                        <img src={infoNotification} alt="" />
                        <p>Say goodbye to class scheduling confusion. We make transitioning between classes a breeze by sending you real-time notifications when your current class is over. Not only will you never have to worry about losing track of time in class again, but you'll also know exactly what class you have next and how to get there. No more rushing through the hallways trying to find your next class, we got you covered. With our intuitive interface and helpful reminders, you'll arrive at each class on time, organized, and ready to learn.</p>
                    </div>
                </div>
            </section>
            <section className="main-bottom">
                <div className="main-bottom-content">
                    <h1>Frequently Asked Questions</h1>
                    <details className="main-bottom-content-detail">
                        <summary>What is CampusRoute?</summary>
                        <p>CampusRoute is an app designed to help students navigate their way around high school/university campuses by providing real-time directions to their classes.</p>
                    </details>
                    <details className="main-bottom-content-detail">
                        <summary>What features does CampusRoute offer?</summary>
                        <p>CampusRoute offers features such as class scheduling, real-time navigation, attendance tracking, and class transition notifications.</p>
                    </details>
                    <details className="main-bottom-content-detail">
                        <summary>Is CampusRoute available for both iOS and Android devices?</summary>
                        <p>Yes, CampusRoute is available for both iOS and Android devices.</p>
                    </details>
                    <details className="main-bottom-content-detail">
                        <summary>Does CampusRoute work offline?</summary>
                        <p>No, CampusRoute requires an internet connection to function properly.</p>
                    </details>
                    <details className="main-bottom-content-detail">
                        <summary>Can I input my own class schedule into CampusRoute?</summary>
                        <p>CampusRoute offers features such as class scheduling, real-time navigation, attendance tracking, and class transition notifications.</p>
                    </details>
                    <details className="main-bottom-content-detail">
                        <summary>Can I use CampusRoute for other places besides high schools/universities?</summary>
                        <p>CampusRoute is designed specifically for high school and university campuses and may not work for other locations.</p>
                    </details>
                    <details className="main-bottom-content-detail">
                        <summary>How does CampusRoute determine the best route for me?</summary>
                        <p>CampusRoute uses Google Maps satalight technology to determine the quickest and most efficient route to your classes.</p>
                    </details>
                    <details className="main-bottom-content-detail">
                        <summary>Does CampusRoute track my location?</summary>
                        <p>Yes, CampusRoute uses your device's GPS to provide real-time navigation and track your attendance.</p>
                    </details>
                    <details className="main-bottom-content-detail">
                        <summary>Is CampusRoute free?</summary>
                        <p>CampusRoute is free for individual students to use. However, for schools/universities, we offer a paid service that includes additional features and support.</p>
                    </details>
                    <details className="main-bottom-content-detail">
                        <summary>What do the plans of CampusRoute offer?</summary>
                        <ul>
                            <li className="main-bottom-content-detail-plans">The free version of CampusRoute offers basic features such as class scheduling, real-time navigation, and attendance tracking for individual students.</li>
                            <li className="main-bottom-content-detail-plans">The paid version of CampusRoute for schools includes advanced features such as attendence marking, custom branding, and dedicated support.</li>
                        </ul>
                            <p className="main-bottom-content-detail-plans">The cost of the paid version of CampusRoute for schools varies depending on the specific needs and requirements of the school. Contact our sales team for a custom quote.</p>
                    </details>
                    <details className="main-bottom-content-detail">
                        <summary>Can I provide feedback or report a problem with the app?</summary>
                        <p>Yes, you can provide feedback or report any problems through the app's support center or by contacting the developer directly.</p>
                    </details>
                </div>
                <footer className="footer">
                    <div className="footer-container">
                        <div>
                            <img src={logoBig} alt="logo" className="footer-logo" />
                        </div>
                        <div className="footer-item-container">
                            <div className="footer-item">
                                <h1>Links</h1>
                                <ul>
                                    <li>Panel</li>
                                    <li>Status Page</li>
                                    <li>Discord</li>
                                </ul>
                            </div>
                            <div className="footer-item">
                                <h1>Legal</h1>
                                <ul>
                                    <li>Terms of Service</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}