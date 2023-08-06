import React from "react";
import styles from "./Home.module.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import logo from "../../Assets/logo.svg";
import logoBig from "../../Assets/logoBig.svg";

export function Error() {
    return (
        <>
            <section className={styles["home-top"]}>
                <Header />
                <div className={styles["home-top-content"]}>
                    <h1>An Unknown Error Occured</h1>
                    <p>Try again soon</p>
                </div>
            </section>
            <Footer />
        </>
    );
}
