import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Status() {
    const navigate = useNavigate();

    useEffect(() => {
        window.location.href = "https://stats.uptimerobot.com/2rX63cVqwO";
    }, []);

    return null;
}
