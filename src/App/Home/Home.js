import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

import styles from "./Home.module.css";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

import logo from "../../Assets/logo.svg";
import logoBig from "../../Assets/logoBig.svg";

import ad from "../../Assets/branding/ad.png";
import infoSchedule from "../../Assets/undraw/schedule.svg";
import infoMap from "../../Assets/undraw/map.svg";
import infoNotification from "../../Assets/undraw/notification.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function Home() {
    const { t } = useTranslation();

    return (
        <>
            <section className={styles["home-top"]}>
                <Header />
                <div className={styles["home-top-content"]}>
                    <h1>{t("app_name")}</h1>
                    <div>
                        <p>{t("home_description")}</p>
                    </div>
                </div>
            </section>
            <section className={styles["home-info"]}>
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOnce={true}
                >
                    <h1>{t("home_features_title")}</h1>
                    <div className={styles["home-info-content"]}>
                        <div className={styles["home-info-content-item"]}>
                            <img src={infoMap} alt="" />
                            <p>{t("home_features_one")}</p>
                        </div>
                        <div className={styles["home-info-content-item"]}>
                            <img src={infoSchedule} alt="" />
                            <p>{t("home_features_two")}</p>
                        </div>
                        <div className={styles["home-info-content-item"]}>
                            <img src={infoNotification} alt="" />
                            <p>{t("home_features_three")}</p>
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>
            <section className={styles["home-bottom"]}>
                <div className={styles["home-bottom-content"]}>
                    <AnimationOnScroll
                        animateIn="animate__fadeIn"
                        animateOnce={true}
                    >
                        <h1>{t("home_faq_title")}</h1>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>{t("home_faq_one_q")}</summary>
                            <p>{t("home_faq_one_a")}</p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>{t("home_faq_two_q")}</summary>
                            <p>{t("home_faq_two_a")}</p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>{t("home_faq_three_q")}</summary>
                            <p>{t("home_faq_three_a")}</p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>{t("home_faq_four_q")}</summary>
                            <p>{t("home_faq_four_a")}</p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>{t("home_faq_five_q")}</summary>
                            <p>{t("home_faq_five_a")}</p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>{t("home_faq_six_q")}</summary>
                            <p>{t("home_faq_six_a")}</p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>{t("home_faq_seven_q")}</summary>
                            <p>{t("home_faq_seven_a")}</p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>{t("home_faq_eight_q")}</summary>
                            <p>{t("home_faq_eight_a")}</p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>{t("home_faq_nine_q")}</summary>
                            <p>{t("home_faq_nine_a")}</p>
                        </details>
                        <details
                            className={styles["home-bottom-content-detail"]}
                        >
                            <summary>{t("home_faq_ten_q")}</summary>
                            <p>{t("home_faq_ten_a")}</p>
                        </details>
                    </AnimationOnScroll>
                </div>
                <Footer />
            </section>
        </>
    );
}
