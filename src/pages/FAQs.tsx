import { useState } from "react";
import style from "./FAQs.module.css"; // Assuming you have a CSS module for styling
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is MBSI Power and how does it work?",
    answer:
      "MBS Solar Solutions  is a solar power solution platform that offers a reliable and efficient solar power source and flexible payment options through our financial and other partners",
  },
  {
    question: "What does MBSI offer?",
    answer:
      "MBSI offers two payment options namely, Outright purchase and Deferred payment.",
  },
  {
    question: "What is deferred payment?",
    answer:
      "Deferred payment is a finance model where a customer has access to spreading payment for a solar power solution purchase across some months",
  },
  {
    question: "What will be my initial deposit?",
    answer:
      "You will be required to make an upfront payment between 20-30% of the total system cost, and you will be able to spread the rest across a 0–36-months period, depending on the size and the requirement of  our financial partner requirements",
  },
  {
    question: "Can I pay on delivery?",
    answer:
      "No, you cannot. The available payment options are deferred payment financed by financial partners or outright purchase with a debit/credit card and payment by bank.",
  },
  {
    question: "What type of faults will the maintenance warranty not cover?",
    answer:
      "The maintenance warranty will ONLY cover manufactured faults or defects.",
  },
  {
    question: "Who do I contact for enquiries or complaints?",
    answer:
      "Kindly place a complaint via our Customer Care Desk service@mbsiint.ng. Our Customer service will reach out to you.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={style.faqContainer}>
      <h2 className={style.faqTitle}>Frequently Asked Questions</h2>
      <div className={style.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={style.faqItem}>
            <button onClick={() => toggle(index)} className={style.faqQuestion}>
              <span>{faq.question}</span>
              <span className={style.toggleIcon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className={style.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
