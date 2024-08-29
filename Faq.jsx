import React, { useState } from "react";
import "./Faq.css"; // Import the CSS file for styling

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is borehole drilling?",
      answer:
        "Borehole drilling is the process of drilling into the ground to access underground water sources.",
    },
    {
      question: "How long does the drilling process take?",
      answer:
        "The drilling process typically takes between a few days to a week, depending on the depth and complexity of the site.",
    },
    {
      question: "What is well development?",
      answer:
        "Well development involves cleaning and enhancing the performance of a well to ensure a stable water supply.",
    },
    {
      question: "Do you offer maintenance services?",
      answer:
        "Yes, we offer maintenance services to ensure that your borehole and pump systems operate efficiently over time.",
    },
    {
      question: "How much does it cost to drill a borehole?",
      answer:
        "The cost of drilling a borehole varies depending on factors such as depth, location, and soil conditions. Contact us for a detailed quote.",
    },
    // Add more FAQs as needed
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h2>{faq.question}</h2>
              <span className="toggle-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
