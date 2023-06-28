import React from "react";
import { Icon } from "@iconify/react";

import styles from "../App.module.css";

export function Setup() {
    return (
        <div className={`${styles["app-box"]} ${styles["under-construction"]}`}>
            <Icon
                icon="fa6-solid:hammer"
                className={styles["under-construction-icon"]}
            />
            <p className={styles["under-construction-text"]}>
                Section under construction
            </p>
        </div>
    );
}
