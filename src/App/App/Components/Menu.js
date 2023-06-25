import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import styles from "../App.module.css";

import { useNavigate } from "react-router-dom";

export function Menu() {
    const navigate = useNavigate();

    const [homeSelected, setHomeSelected] = useState(false);
    const [mapSelected, setMapSelected] = useState(false);
    const [timeSelected, setTimeSelected] = useState(false);

    useEffect(() => {
        if (window.location.pathname === "/app/home") {
            setHomeSelected(true);
        } else if (window.location.pathname === "/app/map") {
            setMapSelected(true);
        } else if (window.location.pathname === "/app/timetable") {
            setTimeSelected(true);
        }
    }, []);

    return (
        <div className={`${styles["app-box"]} ${styles["menu"]}`}>
            <div
                className={`${styles["menu-item"]} ${
                    homeSelected ? styles["selected"] : ""
                }`}
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    navigate("/app/home");
                }}
            >
                <p>
                    <Icon
                        className={styles["menu-icon"]}
                        icon="fa6-solid:house-chimney"
                    />
                    Home
                </p>
            </div>
            <div
                className={`${styles["menu-item"]} ${
                    mapSelected ? styles["selected"] : ""
                }`}
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    navigate("/app/map");
                }}
            >
                <p>
                    <Icon
                        className={styles["menu-icon"]}
                        icon="fa6-solid:map"
                    />
                    Map
                </p>
            </div>
            <div
                className={`${styles["menu-item"]} ${
                    timeSelected ? styles["selected"] : ""
                }`}
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    navigate("/app/timetable");
                }}
            >
                <p>
                    <Icon
                        className={styles["menu-icon"]}
                        icon="fa6-solid:calendar-days"
                    />
                    Timetable
                </p>
            </div>
        </div>
    );
}
