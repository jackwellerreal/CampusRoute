import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.css";

import logo from "../../../Assets/logo.svg";
import logoBig from "../../../Assets/logoBig.svg";

import { useNavigate } from "react-router-dom";

export function Header() {
    const { t } = useTranslation();
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
                <a href="../../../about">{t("header_menu_about")}</a>
                <a
                    href="https://stats.uptimerobot.com/2rX63cVqwO"
                    target="_blank"
                    rel="noreferrer"
                >
                    {t("header_menu_status")}
                </a>
                <a href="mailto:contact@campusroute.net">
                    {t("header_menu_contact")}
                </a>
            </nav>
            <nav>
                <a href="">{t("header_menu_signin")}</a>
            </nav>
        </header>
    );
}
