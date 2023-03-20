import React from "react";

import "../Home.css";

import logo from "../../../Assets/logo.svg";
import logoBig from "../../../Assets/logoBig.svg";

import brandGithub from "../../../Assets/brands/github.svg";
import brandTwitter from "../../../Assets/brands/twitter.svg";

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-container-content">
                        <div>
                            <img
                                src={logoBig}
                                alt="logo"
                                className="footer-logo"
                            />
                        </div>
                        <div className="footer-item-container">
                            <div className="footer-item">
                                <h1>Legal</h1>
                                <ul>
                                    <li>
                                        <a href="../tos">Terms of Service</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-item">
                                <h1>Made by:</h1>
                                <h3 style={{ textAlign: "start" }}>
                                    <a
                                        href="https://github.com/what-question-mark"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Jack Weller
                                    </a>
                                </h3>
                            </div>
                            <div className="footer-item social">
                                <ul>
                                    <li>
                                        <a
                                            href="https://github.com/What-Question-Mark/campusRoute"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={brandGithub} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/CampusRouteAU"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={brandTwitter} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-acknowledgement">
                        <p className="footer-acknowledgement-content">
                            We acknowledge the Traditional Owners of the land
                            where we work and live. We pay our respects to
                            Elders past, present and emerging. We celebrate the
                            stories, culture and traditions of Aboriginal and
                            Torres Strait Islander Elders of all communities who
                            also work and live on this land.
                        </p>
                    </div>
                </div>
            </footer>
            <div className="footer-gradient"></div>
        </>
    );
}
