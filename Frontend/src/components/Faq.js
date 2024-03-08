import React, { useState } from "react";

function FAQItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="faq-item">
      <div className="question" onClick={toggleAnswer}>
        {question}
        <span className="arrow">▲</span>
      </div>
      {showAnswer && <div className="answer">{answer}</div>}
    </div>
  );
}

function Faq() {
  return (
    <div className="app">
      <FAQItem
        question="Why do dogs need blood transfusion?"
        answer="Dogs may need blood transfusions due to various reasons such as anemia, trauma, surgery, or certain medical conditions."
      />
      {/* Add more FAQItems here */}
    </div>
  );
}

export default Faq;
