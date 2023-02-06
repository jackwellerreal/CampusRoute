import React from "react";

import "./Home.css";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

import logo from "../../Assets/logo.svg";
import logoBig from "../../Assets/logoBig.svg";

export function NotFound() {
    return (
        <>
            <section className="main-top">
                <Header />
                <div className="main-top-content">
                    <h1>404</h1>
                    <p>
                        This page doesn't exist.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}
