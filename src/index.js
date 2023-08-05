import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./App/Home/Home";
import { Plus } from "./App/Infomation/Plus/Plus";
import { Status } from "./App/Infomation/Status"

import InformationTOS from "./App/Infomation/Legal/TOS.md";
import InformationPrivacy from "./App/Infomation/Legal/Privacy.md";

import { Information, InformationItem } from "./App/Infomation/Information"

import InformationDevlogOne from "./App/Infomation/Devlog/One.md"
import InformationSocialGuidelines from "./App/Infomation/Social/Guidelines.md"

import { AppRedirect } from "./App/App/Redirect";
import { AppHome } from "./App/App/Pages/Home";
import { AppSetup } from "./App/App/Pages/Setup";
import { AppMap } from "./App/App/Pages/Map";
import { AppTimetable } from "./App/App/Pages/Timetable";
import { AppEdit } from "./App/App/Pages/Edit";
import { AppSettings } from "./App/App/Pages/Settings";

import { AppSignin } from "./App/App/Signin";

import { NotFound } from "./App/Home/404";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/tos",
        element: <InformationItem file={InformationTOS} />  
    },
    {
        path: "/privacy",
        element: <InformationItem file={InformationPrivacy} />  
    },
    {
        path: "/plus",
        element: <Plus />,
    },
    {
        path: "/information",
        element: <Information />  
    },
    {
        path: "/information/status",
        element: <Status />
    },
    {
        path: "/information/devlog/one",
        element: <InformationItem file={InformationDevlogOne} />  
    },
    {
        path: "/information/social/guidelines",
        element: <InformationItem file={InformationSocialGuidelines} />  
    },
    {
        path: "/signin",
        element: <AppSignin />
    },
    {
        path: "/app",
        element: <AppRedirect />
    },
    {
        path: "/app/home",
        element: <AppHome />
    },
    {
        path: "/app/setup",
        element: <AppSetup />
    },
    {
        path: "/app/map",
        element: <AppMap />
    },
    {
        path: "/app/edit",
        element: <AppEdit />
    },
    {
        path: "/app/settings",
        element: <AppSettings />
    },
    {
        path: "/app/timetable",
        element: <AppTimetable />
    },
    {
        path: "*",
        element: <NotFound />
    },
]);

for (let i = 0; i < 10; i++) {
    console.log(
        "%cStop!",
        "color:red;font-family:system-ui;font-size:3rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
    console.log(
        "%cThis is a browser feature intended for developers. If someone told you to copy-paste something here it is a scam and will give them access to your account.",
        "color:white;font-family:system-ui;font-size:1rem;font-weight:bold"
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className="branding-blue">
            <RouterProvider router={router} errorElement={<h1>error lol</h1>} />
        </div>
    </React.StrictMode>
);
