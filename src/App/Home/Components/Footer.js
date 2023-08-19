import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";

import logo from "../../../Assets/logo.svg";
import logoBig from "../../../Assets/logoBig.svg";

import { useNavigate } from "react-router-dom";
import i18next from "i18next";

const languages = [
    {
        code: "en",
        language: "English",
        country_code: "gb",
    },
    {
        code: "fr",
        language: "Français",
        country_code: "fr",
    },
    {
        code: "mi",
        language: "Māori",
        country_code: "nz",
    },
    {
        code: "nl",
        language: "Dutch",
        country_code: "nl",
    },
    {
        code: "sv",
        language: "Svenska",
        country_code: "se",
    },
    {
        code: "zu",
        language: "Zulu",
        country_code: "za",
    },
    {
        code: "jp",
        language: "日本語",
        country_code: "jp",
    },
];

export function Footer() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <footer className={styles["footer"]}>
                <div className={styles["footer-container"]}>
                    <div className={styles["footer-container-content"]}>
                        <div>
                            <img
                                src={logoBig}
                                alt="logo"
                                className={styles["footer-logo"]}
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                    navigate("/");
                                }}
                            />
                            <div
                                className={`${styles["footer-item"]} ${styles["social"]}`}
                            >
                                <ul>
                                    <li>
                                        <a
                                            href="https://github.com/CampusRoute/CampusRoute"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 496 512"
                                            >
                                                {/*Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/campusroute_au"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 496 512"
                                            >
                                                {/*Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:contact@campusroute.net"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                {/*Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles["footer-item-container"]}>
                            <div className={styles["footer-item"]}>
                                <h1>{t("footer_column_products_title")}</h1>
                                <ul>
                                    <li>
                                        <a href="../../../app">
                                            {t("footer_column_products_app")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../../../plus">
                                            {t("footer_column_products_plus")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://stats.uptimerobot.com/2rX63cVqwO"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {t("footer_column_products_status")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["footer-item"]}>
                                <h1>{t("footer_column_company_title")}</h1>
                                <ul>
                                    <li>
                                        <a href="../../../about">
                                            {t("footer_column_company_about")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://drive.proton.me/urls/PW17KC2XNR#J3hFBaJJQWpi"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {t("footer_column_company_media")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:contact@campusroute.net">
                                            {t("footer_column_company_contact")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["footer-item"]}>
                                <div className={styles["footer-dropdown"]}>
                                    <button
                                        className={
                                            styles["footer-dropdown-button"]
                                        }
                                        onClick={handleOpen}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                                        </svg>
                                        <h1>Language</h1>
                                    </button>

                                    {open ? (
                                        <ul
                                            className={
                                                styles["footer-dropdown-items"]
                                            }
                                            name="Languages"
                                            id="selected-language"
                                        >
                                            {languages.map(
                                                ({
                                                    code,
                                                    language,
                                                    country_code,
                                                }) => (
                                                    <li key={country_code}>
                                                        <button
                                                            className={
                                                                styles[
                                                                    "footer-dropdown-item"
                                                                ]
                                                            }
                                                            onClick={() => {
                                                                i18next.changeLanguage(
                                                                    code
                                                                );
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            {language}
                                                        </button>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["footer-acknowledgement"]}>
                        <p className={styles["footer-acknowledgement-content"]}>
                            {t("footer_bottom_acknowledgement")}
                        </p>
                    </div>
                    <div className={styles["footer-legal"]}>
                        <ul className={styles["footer-legal-content"]}>
                            <li>
                                <a href="../../../tos">
                                    {t("footer_bottom_tos")}
                                </a>
                            </li>
                            <li>
                                <a href="../../../privacy">
                                    {t("footer_bottom_privacy")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/what-question-mark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {t("footer_bottom_copyright")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className={styles["footer-gradient"]}></div>
        </>
    );
}
