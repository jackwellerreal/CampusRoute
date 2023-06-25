import React from "react";
import { Header } from "../Home/Components/Header";
import { Footer } from "../Home/Components/Footer";
import styles from "./Information.module.css";

export function Privacy() {
    return (
        <>
            <section className={styles["information-top"]}>
            <Header/>
                <div
                    className={styles["information-top-content"]}
                    style={{ textAlign: "start" }}
                >
                    <h1>Privacy Policy</h1>
                    <p style={{ height: "60vh", overflowY: "scroll" }}>
                        <pre>
                            <strong>
                                Privacy Policy for CampusRoute (based on
                                Australian laws):
                            </strong>
                            {"\n"}
                            CampusRoute is committed to protecting the privacy
                            {"\n"}
                            and personal information of our users. We comply
                            {"\n"}
                            with the Australian Privacy Principles (APPs) set
                            {"\n"}
                            out in the Privacy Act 1988 (Cth) and the privacy
                            {"\n"}
                            laws of Australia.{"\n"}
                            {"\n"}
                            <strong>Collection of Personal Information:</strong>
                            {"\n"}
                            We may collect personal information from you when
                            {"\n"}
                            you sign up for our services, use our website or
                            {"\n"}
                            mobile application, or contact us for support. The
                            {"\n"}
                            information we may collect includes your name, email
                            {"\n"}
                            address, phone number, and other information you may
                            {"\n"}
                            provide to us.{"\n"}
                            {"\n"}
                            <strong>
                                Use and Disclosure of Personal Information:
                            </strong>
                            {"\n"}
                            We use your personal information to provide you with
                            {"\n"}
                            our services, improve our services, and communicate
                            {"\n"}
                            with you about our services. We do not sell your
                            {"\n"}
                            personal information to third-party services. We may
                            {"\n"}
                            share your personal information with our trusted
                            {"\n"}
                            partners to provide you with better services, but
                            {"\n"}
                            only if they are subject to strict confidentiality
                            {"\n"}
                            requirements.{"\n"}
                            {"\n"}
                            <strong>Data Security:</strong>
                            {"\n"}
                            We take reasonable steps to protect your personal
                            {"\n"}
                            information from misuse, interference, loss,{"\n"}
                            unauthorized access, modification, or disclosure. We
                            {"\n"}
                            store your personal information securely on our
                            {"\n"}
                            servers and take appropriate measures to ensure that
                            {"\n"}
                            it is protected from unauthorized access, use, or
                            {"\n"}
                            disclosure.{"\n"}
                            {"\n"}
                            <strong>
                                Access to Your Personal Information:
                            </strong>
                            {"\n"}
                            You have the right to access your personal{"\n"}
                            information held by CampusRoute and request{"\n"}
                            corrections or updates if necessary. You can also
                            {"\n"}
                            request that we delete your personal information
                            {"\n"}
                            from our systems. We will take reasonable steps to
                            {"\n"}
                            respond to your request in a timely manner.{"\n"}
                            {"\n"}
                            <strong>Changes to our Privacy Policy:</strong>
                            {"\n"}
                            We reserve the right to update or modify this{"\n"}
                            Privacy Policy at any time without prior notice. We
                            {"\n"}
                            will notify you of any changes to our Privacy Policy
                            {"\n"}
                            by posting the updated policy on our website or
                            {"\n"}
                            mobile application.{"\n"}
                            {"\n"}
                            <strong>Contact Us:</strong>
                            {"\n"}
                            If you have any questions or concerns about our
                            {"\n"}
                            Privacy Policy, or if you wish to exercise your
                            {"\n"}
                            rights to access, correct, or delete your personal
                            {"\n"}
                            information, please contact us at{" "}
                            <a href="mailto:campusroute.au@gmail.com?subject=Privacy%20Policy%20Concerns">
                                campusroute.au@gmail.com
                            </a>
                            .
                        </pre>
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}
