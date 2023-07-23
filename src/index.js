import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./App/Home/Home";
import { TermsOfService } from "./App/Infomation/tos";
import { Privacy } from "./App/Infomation/Privacy";
import { Plus } from "./App/Infomation/Plus/Plus";
import { Status } from "./App/Infomation/Status"

import { AppRedirect } from "./App/App/Redirect";
import { AppHome } from "./App/App/Pages/Home";
import { AppSetup } from "./App/App/Pages/Setup";
import { AppMap } from "./App/App/Pages/Map";
import { AppTimetable } from "./App/App/Pages/Timetable";
import { AppEdit } from "./App/App/Pages/Edit";
import { AppSettings } from "./App/App/Pages/Settings";

import { AppSignin } from "./App/App/Signin";

import { NotFound } from "./App/Home/404";
import { Error } from "./error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/tos",
        element: <TermsOfService />,
    },
    {
        path: "/privacy",
        element: <Privacy />,
    },
    {
        path: "/status",
        element: <Status />,
    },
    {
        path: "/plus",
        element: <Plus />,
    },
    {
        path: "/signin",
        element: <AppSignin />,
    },
    {
        path: "/app",
        element: <AppRedirect />,
    },
    {
        path: "/app/home",
        element: <AppHome />,
    },,
    {
        path: "/app/setup",
        element: <AppSetup />,
    },
    {
        path: "/app/map",
        element: <AppMap />,
    },
    {
        path: "/app/edit",
        element: <AppEdit />,
    },
    {
        path: "/app/settings",
        element: <AppSettings />,
    },
    {
        path: "/app/timetable",
        element: <AppTimetable />,
    },
    {
        path: "*",
        element: <NotFound />,
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
