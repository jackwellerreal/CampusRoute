import React from "react";
import { Icon } from "@iconify/react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import styles from "../App.module.css";

export function Map() {
    return (
        <MapContainer
            className={`${styles["app-box"]} ${styles["map"]}`}
            center={[-27.172444, 152.941163]}
            zoom={17}
            maxZoom={18}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={[-27.172444, 152.941163]} />
        </MapContainer>
    );
}
