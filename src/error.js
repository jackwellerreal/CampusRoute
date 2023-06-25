import React from "react";

import { useRouteError } from "react-router-dom";

import "./App/Home/Home.module.css";

import { Header } from "./App/Home/Components/Header";
import { Footer } from "./App/Home/Components/Footer";

import logo from "./Assets/logo.svg";
import logoBig from "./Assets/logoBig.svg";

export function Error() {
    let error = useRouteError();
    console.error(error);

    return (
        <>
            <section className="main-top">
                <Header />
                <div className="main-top-content">
                    <h1>error</h1>
                    <p>{error}</p>
                </div>
            </section>
            <Footer />
        </>
    );
}
