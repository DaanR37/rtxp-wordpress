import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import FAQ from "./Faq/FAQ";
import FAQR from "./Faqr/FAQR";
import Animatedpage from "../Animatedpage";
import "./info.scss";

export default function Info() {

    //// LEFT SIDE FAQ TABLE
    const [faqs, setFaqs] = useState([
        {
            question: "When",
            answer: "Our grand openening will be at the 22nd of December.",
            open: false
        },
        {
            question: "Where can I get tickets?",
            answer: "At the door or buy them via our website.",
            open: false
        },
        {
            question: "Minimum age",
            answer: "All ages",
            open: false
        },
        {
            question: "Food & Drinks",
            answer: "Lorem Ipsum Ballzium",
            open: false
        },
        {
            question: "Dissability Acces",
            answer: "We are situated on ground floor, therefore we are wheelchair friendly.",
            open: false
        },
        {
            question: "House Rules",
            answer: "Lorem Ipsum Ballzium",
            open: false
        },
        {
            question: "Identification",
            answer: "Lorem Ipsum Ballzium",
            open: false
        },
        {
            question: "Lost & Found",
            answer: "Lorem Ipsum Ballzium",
            open: false
        },
        {
            question: "Contact us",
            answer: "Lorem Ipsum Ballzium",
            open: false
        },
    ]);
    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }
                return faq;
            })
        );
    };
    //// RIGHT SIDE FAQ TABLE
    const [faqsr, setFaqsr] = useState([
        {
            question: "When",
            answer: "Our grand openening will be at the 22nd of December.",
            open: false
        },
        {
            question: "Where can I get tickets?",
            answer: "At the door or buy them via our website.",
            open: false
        },
        {
            question: "Minimum age",
            answer: "All ages",
            open: false
        },
        {
            question: "Food & Drinks",
            answer: "Lorem Ipsum Ballzium",
            open: false
        },
        {
            question: "Dissability Acces",
            answer: "We are situated on ground floor, therefore we are wheelchair friendly.",
            open: false
        },
        {
            question: "House Rules",
            answer: "Lorem Ipsum Ballzium",
            open: false
        },
        {
            question: "Identification",
            answer: "Lorem Ipsum Ballzium",
            open: false
        },
        {
            question: "Lost & Found",
            answer: "Lorem Ipsum Ballzium",
            open: false
        },
        {
            question: "Contact us",
            answer: "Lorem Ipsum Ballzium",
            open: false
        },
    ]);
    const toggleFAQR = index => {
        setFaqsr(
            faqsr.map((faqr, i) => {
                if (i === index) {
                    faqr.open = !faqr.open;
                } else {
                    faqr.open = false;
                }
                return faqr;
            })
        );
    };

    return (
        <Animatedpage>
            <section id="info-container">
                <div className="background-image-info" style={{
                    backgroundImage: "url(images/background-image-hp.jpg)"
                }}>
                    <div className="navbar-info">
                        <NavBar />
                    </div>
                    <div className="faq-container">
                        <div className="faqs font-face-at">
                            {faqs.map((faq, index) => (
                                <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                            ))}
                        </div>
                        <div className="faqs-r font-face-at">
                            {faqsr.map((faqr, index) => (
                                <FAQR faqr={faqr} index={index} key={index} toggleFAQR={toggleFAQR} />
                            ))}
                        </div>
                    </div>
                    <div className="blue-cross-info">
                        <img src="images/blue-cross-icon.svg" alt="blue cross" />
                    </div>
                    <div className="purple-arrows">
                        <img src="images/purple-arrows-icon.svg" alt="purple arrows" />
                    </div>
                    <div className="chat-icon">
                        <img src="images/chat-icon.svg" alt="chat icon" />
                    </div>
                </div>
            </section>
        </Animatedpage>
    )
}
