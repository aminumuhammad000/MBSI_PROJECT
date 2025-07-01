import { useState } from "react";
import style from "./FAQs.module.css"; // Assuming you have a CSS module for styling
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services does MBSI offer?",
    answer:
      "MBSI provides solar energy solutions, GPS car tracking, CCTV installations, and general contracting across Nigeria.",
  },
  {
    question: "How long does it take to install a solar system?",
    answer:
      "Most installations take between 1 to 3 days depending on the system size and site conditions.",
  },
  {
    question: "Can I track my vehicle from anywhere?",
    answer:
      "Yes. With MBSI GPS tracking, you can monitor your vehicle in real time from your mobile phone or PC, anywhere in the world.",
  },
  {
    question: "What types of CCTV cameras do you install?",
    answer:
      "We install Wi-Fi, 4G SIM-based, IP network, and solar-powered cameras suitable for homes, businesses, and farms.",
  },
  {
    question: "Is after-sales support available?",
    answer:
      "Yes. We provide 24/7 customer support and ongoing maintenance for all our services.",
  },
  {
    question: "Do you offer flexible payment plans?",
    answer:
      "Yes. We provide installment plans and corporate agreements, especially for solar and fleet packages.",
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
