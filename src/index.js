import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./App/Home/Home";
import { TermsOfService } from "./App/Infomation/tos";
import { Privacy } from "./App/Infomation/Privacy";
import { NavigatorPlus } from "./App/Infomation/Navigator+/Navigator+";
/*
import { SignIn } from "./App/App/SignIn/SignIn";
import { App } from "./App/App/App/App";
import { AppEdit } from "./App/App/Edit/Edit";
import { AppSettings } from "./App/App/Settings/Settings";
*/
import { NotFound } from "./App/Home/404";

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
    /*
    {
        path: "/plus",
        element: <NavigatorPlus />,
    },
    */
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
            <RouterProvider router={router} />
        </div>
    </React.StrictMode>
);
