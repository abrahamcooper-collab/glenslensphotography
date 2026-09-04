import styles from "./Testimonial.module.css";

const KEYWORDS = ["Capturing Love", "Connection", "Family", "Memories"];

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Keywords Row */}
        <div className={styles.keywords}>
          {KEYWORDS.map((word, i) => (
            <span key={word} className={styles.keyword}>
              {word}
              {i < KEYWORDS.length - 1 && (
                <span className={styles.dot}>·</span>
              )}
            </span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className={styles.quote}>
          &ldquo;5 stars isn't enough! Thank you for capturing my beautiful family so perfectly. Patient, professional, and so talented. We will treasure these photos forever. Highly, highly recommend!&rdquo;
        </blockquote>

        {/* Attribution */}
        <p className={styles.attribution}>
          MINE LOVELY — GOOGLE REVIEW ★★★★★
        </p>
      </div>
    </section>
  );
}
