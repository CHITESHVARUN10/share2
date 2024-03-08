import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import "../routes/Faq.css";

function FAQItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="faq-item">
      <div className="question" onClick={toggleAnswer}>
        {question}
        {!showAnswer ? (
          <span className="arrow">▼</span>
        ) : (
          <span className="arrow">▲</span>
        )}
      </div>
      {showAnswer && <div className="answer">{answer}</div>}
    </div>
  );
}

// Add prop type validation for FAQItem
FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

function App() {
  return (
    <div className="app">
      <FAQItem
        question="Why do dogs need blood transfusion?"
        answer="Like humans, pets may require lifesaving transfusions when undergoing surgery or suffering from trauma (after an automobile accident and other injuries), auto-immune disease, heat stroke, or other illnesses. Our blood banks are dedicated to providing a safe and plentiful blood supply to animals in need."
      />
      <FAQItem
        question="How much blood is drawn during a donation?"
        answer="Your pet's body weight correlates with the blood volume circulating in their blood vessels. This is why there are strict bodyweight requirements to ensure it is safe for them to donate.

        For canines, the standard donation volume is 450mls (approximately one pint of blood).
        
        For felines, the standard donation volume is 52mls (two ounces)."
      />
      <FAQItem
        question="Do dogs and cats have different blood types like people?"
        answer="Animals have different blood types from humans, related specifically to their species. Determination of blood type is incredibly important prior to transfusions to avoid potential adverse transfusion reactions."
      />
      <FAQItem
        question="Is a blood donation risky or painful to my pet?"
        answer="Blood donation is a short, painless process. Although uncommon, there are some risks associated with pets donating blood, including but not limited to swelling, bruising or clipper burn at the needle site, prolonged sedation and lethargy after receiving a sedative, diarrhea, vomiting, or in rare cases, hypotension. All pets are continuously monitored throughout donation."
      />
      <FAQItem
        question="Will my pet require sedation during donation?"
        answer="Part of the blood donor participant criteria taken into consideration is temperament and personality.

        Friendly and cooperative pets make for the best donors, so canines with a good temperament may not require sedatives to keep them calm, but some dogs will need minimal sedation.
        
        Every feline donor is given a sedative to minimize levels of stress. All pets are monitored continuously throughout the donation process regardless of whether they received sedation.
        
        If a sedative is given, your pet may experience prolonged lethargy, but it will subside. By following best practices and continuous monitoring throughout the donation, side effects are rare."
      />
      <FAQItem
        question="How often can my pet donate blood?"
        answer="Most dogs can safely donate every four weeks; however, most programs recommend a minimum of eight weeks between donations.

        A minimum of 10 weeks is recommended between feline blood donations."
      />
      <FAQItem
        question="What type of restrictions will my pet have after donating?"
        answer="Just as in people, each pet recovers differently after a donation.

        For dogs, it is recommended to restrict their activity for at least 24 hours. Using a harness instead of a neck collar is encouraged to avoid applying pressure to the neck.
        
        As an added safety measure, felines are given subcutaneous or intravenous fluids. It is recommended to monitor and limit their activity (as much as possible) while they recover from any sedatives and blood donation.
        
        Both cats and dogs can immediately resume their usual water and feeding regimens."
      />
    </div>
  );
}

export default App;
