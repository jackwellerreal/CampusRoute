import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import "../App.css";

export function Menu() {
    const [homeSelected, setHomeSelected] = useState(false);
    const [mapSelected, setMapSelected] = useState(false);
    const [timeSelected, setTimeSelected] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/app/home') {
            setHomeSelected(true);
        } else if (window.location.pathname === '/app/map') {
            setMapSelected(true);
        } else if (window.location.pathname === '/app/timetable') {
            setTimeSelected(true);
        }
    }, []);

    return (
        <div className="app-box menu">
            <div className={"menu-item " + (homeSelected ? "selected" : "")}>
                <a href="./home">
                    <Icon id="menu-icon" icon="fa6-solid:house-chimney" />
                    Home
                </a>
            </div>
            <div className={"menu-item " + (mapSelected ? "selected" : "")}>
                <a href="./map">
                    <Icon id="menu-icon" icon="fa6-solid:map" />
                    Map
                </a>
            </div>
            <div className={"menu-item " + (timeSelected ? "selected" : "")}>
                <a href="./timetable">
                    <Icon id="menu-icon" icon="fa6-solid:calendar-days" />
                    Timetable
                </a>
            </div>
        </div>
    );
}
