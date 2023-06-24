import React from "react";

import "../Home.css";

import logo from "../../../Assets/logo.svg";
import logoBig from "../../../Assets/logoBig.svg";

export function Header() {
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="" />
            <nav>
                <a href="">Coming Soon!</a>
            </nav>
        </header>
    );
}
