import React from "react";
import { Header } from "../Home/Components/Header";
import { Footer } from "../Home/Components/Footer";
import styles from "./Information.module.css";

export function TermsOfService() {
    return (
        <>
            <section className={styles["information-top"]}>
            <Header/>
                <div
                    className={styles["information-top-content"]}
                    style={{ textAlign: "start" }}
                >
                    <h1>Terms of Service</h1>
                    <p style={{ height: "60vh", overflowY: "scroll" }}>
                        <pre>
                            The following terms of service ("Terms") apply to{"\n"}
                            every registered user account on Campus Route{"\n"}
                            ("We"/"Us"/"Our") website ("Website") and all{"\n"}
                            corresponding services ("Services"), including your{"\n"}
                            servers on the panel. When registering for an{"\n"}
                            account on the website You agree with the Terms.{"\n"}
                            Violating any of these terms can result in your{"\n"}
                            Account getting terminated.{"\n"}{"\n"}
                            <strong>Acceptance of Terms:</strong>{"\n"}
                            By using the CampusRoute app, you agree to be bound{"\n"}
                            by these terms of service.{"\n"}{"\n"}
                            <strong>Appropriate Use:</strong>{"\n"}
                            You agree to use the CampusRoute app only for its{"\n"}
                            intended purpose of providing navigation and{"\n"}
                            organization tools for university students. You will{"\n"}
                            not use the app for any illegal or unauthorized{"\n"}
                            purposes.{"\n"}{"\n"}
                            <strong>Privacy:</strong>{"\n"}
                            CampusRoute will collect and use your personal{"\n"}
                            information in compliance with the Australian{"\n"}
                            Privacy Principles (APPs) under the Privacy Act 1988{"\n"}
                            (Cth). By using the app, you consent to the{"\n"}
                            collection, storage, and use of your personal{"\n"}
                            information as outlined in the app's privacy policy.{"\n"}{"\n"}
                            <strong>Intellectual Property:</strong>{"\n"}
                            The CampusRoute app and all associated intellectual{"\n"}
                            property, including but not limited to trademarks,{"\n"}
                            logos, and software, are owned by CampusRoute or its{"\n"}
                            licensors. You agree not to use any of this{"\n"}
                            intellectual property without the express written{"\n"}
                            consent of CampusRoute.{"\n"}{"\n"}
                            <strong>Consumer Guarantees:</strong>{"\n"}
                            You are entitled to certain guarantees under the{"\n"}
                            Australian Consumer Law, including guarantees as to{"\n"}
                            the quality and fitness for purpose of goods and{"\n"}
                            services. Nothing in these terms of service is{"\n"}
                            intended to exclude, restrict or modify any of these{"\n"}
                            guarantees.{"\n"}{"\n"}
                            <strong>Limitation of Liability:</strong>{"\n"}
                            To the extent permitted by law, CampusRoute excludes{"\n"}
                            all liability for any loss or damage suffered by you{"\n"}
                            as a result of your use of the app, including but{"\n"}
                            not limited to indirect, incidental, special, or{"\n"}
                            consequential damages. However, if CampusRoute is{"\n"}
                            found to be liable for any loss or damage, its{"\n"}
                            liability is limited to the cost of resupplying the{"\n"}
                            relevant goods or services.{"\n"}{"\n"}
                            <strong>Termination:</strong>{"\n"}
                            CampusRoute may terminate your use of the app at any{"\n"}
                            time, for any reason or no reason, without notice to{"\n"}
                            you.{"\n"}{"\n"}
                            <strong>Governing Law:</strong>{"\n"}
                            These terms of service shall be governed by and{"\n"}
                            construed in accordance with the laws of the State{"\n"}
                            or Territory of Australia in which CampusRoute is{"\n"}
                            based, without giving effect to any principles of{"\n"}
                            conflicts of law.{"\n"}{"\n"}
                            <strong>Changes to Terms:</strong>{"\n"}
                            CampusRoute reserves the right to modify these terms{"\n"}
                            of service at any time. Any changes will be{"\n"}
                            effective immediately upon posting the updated terms{"\n"}
                            of service on the app.{"\n"}{"\n"}
                            <strong>Entire Agreement:</strong>{"\n"}
                            These terms of service constitute the entire{"\n"}
                            agreement between you and CampusRoute regarding your{"\n"}
                            {"use of"} the app, superseding any prior agreements{"\n"}
                            between you and CampusRoute.{"\n"}
                        </pre>
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}
