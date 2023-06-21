import React from "react";

import "./App.css";

import { Header } from "../Home/Components/Header";
import { Footer } from "../Home/Components/Footer";

import logo from "../../Assets/logo.svg";
import logoBig from "../../Assets/logoBig.svg";
import infoHomework from "../../Assets/undraw/homework.svg";
import infoMap from "../../Assets/undraw/map.svg";
import infoNotification from "../../Assets/undraw/notification.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Icon } from "@iconify/react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export function AppHome() {
    return (
        <>
            <section className="main-top">
                <Header />
                <div
                    className="main-top-content main-top-content-app"
                    style={{ textAlign: "start" }}
                >
                    <Menu />
                    <Map />
                    <TimeTable />
                </div>
            </section>
            <Footer />
        </>
    );
}

function Map() {
    return (
        <MapContainer
            className="app-box map"
            center={[51.0, 19.0]}
            zoom={4}
            maxZoom={18}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={[49.8397, 24.0297]} />
            <Marker position={[52.2297, 21.0122]} />
            <Marker position={[51.5074, -0.0901]} />
        </MapContainer>
    );
}

function TimeTable() {
    return <div className="app-box timetable"></div>;
}

function Menu() {
    return (
        <div className="app-box menu">
            <div className="menu-item selected">
                <p>
                    <Icon id="menu-icon" icon="fa6-solid:house-chimney" />
                    Home
                </p>
            </div>
            <div className="menu-item">
                <p>
                    <Icon id="menu-icon" icon="fa6-solid:map" />
                    Map
                </p>
            </div>
            <div className="menu-item">
                <p>
                    <Icon id="menu-icon" icon="fa6-solid:calendar-days" />
                    Timetable
                </p>
            </div>
        </div>
    );
}
