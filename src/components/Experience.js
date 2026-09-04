import styles from "./Experience.module.css";

const STEPS = [
  {
    number: "01",
    title: "CONNECT",
    description:
      "Tell me about you, what you are celebrating, and what you envision for your session.",
  },
  {
    number: "02",
    title: "PLAN",
    description:
      "We will choose the perfect location, outfits, timing, and overall feel.",
  },
  {
    number: "03",
    title: "CAPTURE",
    description:
      "Relax, have fun, and let me guide you through natural moments and effortless poses.",
  },
  {
    number: "04",
    title: "REMEMBER",
    description:
      "Receive a beautifully curated collection of photographs you will want to revisit for years.",
  },
];

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        {/* Header */}
        <p className={styles.label}>THE EXPERIENCE</p>
        <h2 className={styles.heading}>
          From first hello to <em>final photograph.</em>
        </h2>

        {/* 4 Steps Row */}
        <div className={styles.stepsGrid}>
          {STEPS.map((step, idx) => (
            <div key={step.number} className={styles.stepCard}>
              <div className={styles.numberRow}>
                <span className={styles.number}>{step.number}</span>
                {idx < STEPS.length - 1 && (
                  <span className={styles.stepArrow}>→</span>
                )}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.btnWrap}>
          <a href="#contact" className={styles.cta}>
            <span>START THE CONVERSATION</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
