import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "./Home.module.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import logo from "../../Assets/logo.svg";
import logoBig from "../../Assets/logoBig.svg";

export function Error() {
    let error = useRouteError();
    console.error(error);

    return (
        <>
        <section className={styles["home-top"]}>
            <Header />
            <div className={styles["home-top-content"]}>
                <h1>An Error Occured</h1>
                <p>Try again soon</p>
                <small>{error}</small>
            </div>
        </section>
        <Footer />
        </>
    );
}