"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

const FAQS = [
  {
    question: "What should we wear?",
    answer:
      "I will send you a styling guide before your session with tips on colors, layers, and textures that photograph beautifully. The goal is for everyone to feel comfortable and coordinated — not matchy. Soft, neutral tones and earthy colors tend to work wonderfully for the timeless look I love.",
  },
  {
    question: "Where do sessions take place?",
    answer:
      "Sessions are held at outdoor locations throughout Hayward, CA and the surrounding Bay Area — beaches, meadows, parks, and quiet city corners. I am happy to recommend the perfect spot based on the season and the feel you are after. I also travel to locations you may have a connection to.",
  },
  {
    question: "What happens if my kids do not cooperate?",
    answer:
      "This is one of the most common worries, and the answer is always the same: it is completely fine. Some of the best photos come from the moments in between — running, laughing, being silly. I never force poses. We let things unfold naturally, and it always works out.",
  },
  {
    question: "Do you help with posing?",
    answer:
      "Absolutely. You do not need to know how to pose — that is my job. I will guide you into natural, comfortable positions and give you things to do so you never feel stiff or awkward. Most clients tell me afterward that it felt more like hanging out than taking photos.",
  },
  {
    question: "How long does a session take?",
    answer:
      "Most sessions run about 60 to 90 minutes. That gives us plenty of time to settle in, get comfortable, and capture a variety of moments without anyone feeling rushed — especially little ones.",
  },
  {
    question: "How many photos will we receive?",
    answer:
      "You will receive a curated gallery of beautifully edited photographs, typically 50 to 80 images for a standard session. Every image is individually edited for color, tone, and timeless quality.",
  },
  {
    question: "When will we receive our gallery?",
    answer:
      "Your edited gallery will be delivered within two to three weeks of your session via a private online gallery where you can view, download, and order prints.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "If the weather does not cooperate, we will reschedule to the next available date that works for you at no additional cost. I keep a flexible schedule for exactly this reason.",
  },
  {
    question: "Do you travel?",
    answer:
      "Yes. I regularly photograph sessions throughout Hayward, CA and surrounding Bay Area locations. For locations farther afield, travel fees may apply — just ask and I will give you all the details.",
  },
  {
    question: "How do we book?",
    answer:
      "Simply fill out the inquiry form on the contact page. I will personally respond within 24 to 48 hours to talk through your session, check availability, and send you the booking details. A signed agreement and retainer secure your date.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        {/* Header */}
        <p className={styles.label}>QUESTIONS</p>
        <h2 className={styles.heading}>
          Good to <em>know.</em>
        </h2>

        {/* Accordion List */}
        <div className={styles.accordion}>
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`${styles.item} ${isOpen ? styles.openItem : ""}`}
              >
                <button
                  className={styles.questionBtn}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className={styles.answerText}>{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
