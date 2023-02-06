import React from "react";

import "../Home.css";

import logo from "../../../Assets/logo.svg";
import logoBig from "../../../Assets/logoBig.svg";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-container-content">
                    <div>
                        <img src={logoBig} alt="logo" className="footer-logo" />
                    </div>
                    <div className="footer-item-container">
                        <div className="footer-item">
                            <h1>Links</h1>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                                <li>Copywrite</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h1>Legal</h1>
                            <ul>
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
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
                <div className="footer-acknowledgement">
                    <p className="footer-acknowledgement-content">
                        We acknowledge the Traditional Owners of the land where
                        we work and live. We pay our respects to Elders past,
                        present and emerging. We celebrate the stories, culture
                        and traditions of Aboriginal and Torres Strait Islander
                        Elders of all communities who also work and live on this
                        land.
                    </p>
                </div>
            </div>
        </footer>
    );
}
