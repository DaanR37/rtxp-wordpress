
const FAQR = ({ faqr, index, toggleFAQR }) => {
    return (
        <div
            className={"faq-r " + (faqr.open ? "open" : "")}
            key={index}
            onClick={() => toggleFAQR(index)}
        >
            <div className="faq-r-question">{faqr.question}</div>
            <div className="faq-r-answer">{faqr.answer}</div>
        </div>
    );
}

export default FAQR