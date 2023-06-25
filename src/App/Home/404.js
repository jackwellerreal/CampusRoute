import React from "react";
import styles from "./Home.module.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import logo from "../../Assets/logo.svg";
import logoBig from "../../Assets/logoBig.svg";

export function NotFound() {
    return (
        <>
            <section className={styles["home-top"]}>
                <Header />
                <div className={styles["home-top-content"]}>
                    <h1>404</h1>
                    <p>You entered the wrong classroom 😭</p>
                </div>
            </section>
            <Footer />
        </>
    );
}
