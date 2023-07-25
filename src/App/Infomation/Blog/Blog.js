import React, { useState, useEffect } from "react";

import styles from "./Blog.module.css";

import { Header } from "../../Home/Components/Header";
import { Footer } from "../../Home/Components/Footer";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import ReactMarkdown from "react-markdown";

export function Blog() {
    return (
        <>
            <section className={styles["blog-top"]}>
                <div className={styles["blog-background-top"]}></div>
                <Header />
                <div className={styles["blog-top-content"]}>
                    <h1 className={styles["blog-title"]}>Blog</h1>
                    <div></div>
                </div>
                <div className={styles["blog-background-bottom"]}></div>
            </section>
            <Footer />
        </>
    );
}

export function BlogItem(props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(props.file)
            .then((response) => response.text())
            .then((data) => {
                const configRegex =
                    /<->\s*title:\s*(.*)\s*author:\s*(.*)\s*<->/s;
                const match = data.match(configRegex);
                if (match) {
                    const extractedTitle = match[1].trim();
                    const extractedAuthor = match[2].trim();
                    setTitle(extractedTitle);
                    setAuthor(extractedAuthor);
                }
                const cleanedContent = data.replace(configRegex, "").trim();
                setContent(cleanedContent);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <section className={styles["blog-top"]}>
                <div className={styles["blog-background-top"]}></div>
                <Header />
                <div className={styles["blog-top-content"]}>
                    <div className={styles["blog-markdown"]}>
                        <h1 className={styles["blog-title"]}>{title}</h1>
                        <h5 className={styles["blog-author"]}>
                            Written by: {author}
                        </h5>
                        <ReactMarkdown
                            allowedElements={[
                                "h1",
                                "h2",
                                "h3",
                                "p",
                                "strong",
                                "em",
                                "code",
                                "a",
                                "img",
                            ]}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </div>
                <div className={styles["blog-background-bottom"]}></div>
            </section>
            <Footer />
        </>
    );
}
