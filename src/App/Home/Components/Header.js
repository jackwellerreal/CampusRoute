import React from "react";

import styles from "./Header.module.css";

import logo from "../../../Assets/logo.svg";
import logoBig from "../../../Assets/logoBig.svg";

import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    return (
        <header className={styles["header"]}>
            <img
                src={logo}
                className={styles["header-logo"]}
                alt=""
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    navigate("/");
                }}
            />
            <nav className={styles["header-items"]}>
                <a href="../../../about">About</a>
                <a
                    href="https://stats.uptimerobot.com/2rX63cVqwO"
                    target="_blank"
                    rel="noreferrer"
                >
                    Status
                </a>
                <a href="mailto:contact@campusroute.net">Contact</a>
            </nav>
            <nav>
                <a href="">Coming Soon!</a>
            </nav>
        </header>
    );
}
