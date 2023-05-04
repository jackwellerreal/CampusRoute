import React from "react";

import "../../Home/Home.css";

import { Header } from "../../Home/Components/Header";
import { Footer } from "../../Home/Components/Footer";

import logo from "../../../Assets/logo.svg";
import logoBig from "../../../Assets/logoBig.svg";
import infoHomework from "../../../Assets/undraw/homework.svg";
import infoMap from "../../../Assets/undraw/map.svg";
import infoNotification from "../../../Assets/undraw/notification.svg";

import ReactMarkdown from 'react-markdown';

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function Blog() {
    return (
        <>
            <section className="main-top">
                <Header />
                <div
                    className="main-top-content"
                    style={{ textAlign: "start" }}
                >
                    <h1>Blog</h1>
                </div>
            </section>
            <Footer />
        </>
    );
}
