import React from "react";

import "../Home/Home.css";

import { Header } from "../Home/Components/Header";
import { Footer } from "../Home/Components/Footer";

import logo from "../../Assets/logo.svg";
import logoBig from "../../Assets/logoBig.svg";
import infoHomework from "../../Assets/undraw/homework.svg";
import infoMap from "../../Assets/undraw/map.svg";
import infoNotification from "../../Assets/undraw/notification.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function TermsOfService() {
    return (
        <>
            <section className="main-top">
                <Header />
                <div className="main-top-content" style={{margin: "0 10%", textAlign: "start"}}>
                    <h1>Terms of Service</h1>
                    <p style={{height: "75vh", overflowY: "scroll"}}>
                        <pre>
                            The following terms of service ("Terms") apply to
                            every{"\n"}
                            registered user account on Campus Route{"\n"}
                            ("We"/"Us"/"Our") website ("Website") and all{"\n"}
                            corresponding services ("Services"), including your
                            {"\n"}
                            servers on the panel. When registering for an
                            account on{"\n"}
                            the website You agree with the Terms. Violating any
                            of{"\n"}
                            these terms can result in your Account getting{"\n"}
                            terminated. {"\n"}
                            {"\n"}
                            <strong>Acceptance of Terms:</strong>{"\n"}By using the CampusRoute
                            app, you agree to be bound by these terms of{"\n"}
                            service. {"\n"}
                            {"\n"}
                            <strong>Appropriate Use:</strong> {"\n"}
                            You agree to use the CampusRoute app only for its
                            intended purpose of{"\n"}
                            providing navigation and organization tools for
                            {"\n"}
                            university students. You will not use the app for
                            any{"\n"}
                            illegal or unauthorized purposes. {"\n"}
                            {"\n"}
                            <strong>Privacy:</strong>{"\n"}
                            CampusRoute will collect and use your personal{"\n"}
                            information in compliance with the Australian
                            Privacy{"\n"}
                            Principles (APPs) under the Privacy Act 1988 (Cth).
                            By{"\n"}
                            using the app, you consent to the collection,
                            storage,{"\n"}
                            and use of your personal information as outlined in
                            the{"\n"}
                            app's privacy policy. {"\n"}
                            {"\n"}
                            <strong>Intellectual Property:</strong>{"\n"}
                            The CampusRoute app and all associated intellectual
                            {"\n"}
                            property, including but not limited to trademarks,
                            {"\n"}
                            logos, and software, are owned by CampusRoute or its
                            {"\n"}
                            licensors. You agree not to use any of this
                            intellectual{"\n"}
                            property without the express written consent of
                            {"\n"}
                            CampusRoute. {"\n"}
                            {"\n"}
                            <strong>Consumer Guarantees:</strong>{"\n"}
                            You are entitled to certain guarantees under the
                            Australian{"\n"}
                            Consumer Law, including guarantees as to the quality
                            and{"\n"}
                            fitness for purpose of goods and services. Nothing
                            in{"\n"}
                            these terms of service is intended to exclude,
                            restrict{"\n"}
                            or modify any of these guarantees. {"\n"}
                            {"\n"}
                            <strong>Limitation of Liability:</strong>{"\n"}To the extent
                            permitted by law,{"\n"}
                            CampusRoute excludes all liability for any loss or
                            {"\n"}
                            damage suffered by you as a result of your use of
                            the{"\n"}
                            app, including but not limited to indirect,
                            incidental,{"\n"}
                            special, or consequential damages. However, if{"\n"}
                            CampusRoute is found to be liable for any loss or
                            {"\n"}
                            damage, its liability is limited to the cost of
                            {"\n"}
                            resupplying the relevant goods or services. {"\n"}
                            {"\n"}
                            <strong>Termination:</strong>{"\n"}CampusRoute may terminate your use
                            of the{"\n"}
                            app at any time, for any reason or no reason,
                            without{"\n"}
                            notice to you. {"\n"}
                            {"\n"}
                            <strong>Governing Law:</strong> {"\n"}
                            These terms of service shall be governed by and
                            construed in accordance{"\n"}
                            with the laws of the State or Territory of Australia
                            in{"\n"}
                            which CampusRoute is based, without giving effect to
                            any{"\n"}
                            principles of conflicts of law. {"\n"}
                            {"\n"}
                            <strong>Changes to Terms:</strong>{"\n"}
                            CampusRoute reserves the right to modify these{"\n"}
                            terms of service at any time. Any changes will be
                            {"\n"}
                            effective immediately upon posting the updated terms
                            of{"\n"}
                            service on the app. {"\n"}
                            {"\n"}
                            <strong>Entire Agreement:</strong>{"\n"}
                            These terms of service constitute the entire
                            agreement between{"\n"}
                            you and CampusRoute regarding your use of the app,
                            {"\n"}
                            superseding any prior agreements between you and
                            {"\n"}
                            CampusRoute.{"\n"}
                        </pre>
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}
