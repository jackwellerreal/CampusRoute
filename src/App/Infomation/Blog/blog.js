import React, { useState, useEffect } from "react";

import "./blog.css";

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

// Unuesed code
// No plan for use
// https://dev.to/whatqm

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
                    <div style={{ height: "60vh", overflowY: "scroll" }}>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export function BlogItem(props) {
    const [ markdown, setMarkdown ] = useState()

    useEffect(() => {
        fetch(props.file)
          .then((response) => response.text())
          .then((data) => setMarkdown(data))
          .catch((error) => console.log(error));
      }, []);
    
    return (
        <>
            <section className="main-top">
                <Header />
                <div
                    className="main-top-content"
                    style={{ textAlign: "start" }}
                >
                    <h1 id="title">{props.name}</h1>
                    <div className="markdown" style={{ height: "60vh", overflowY: "scroll" }}>
                        <ReactMarkdown>
                            {markdown}
                        </ReactMarkdown>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}