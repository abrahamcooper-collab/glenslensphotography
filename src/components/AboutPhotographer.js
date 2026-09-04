import { SOLO_PORTRAITS } from "@/lib/images";
import styles from "./AboutPhotographer.module.css";

export default function AboutPhotographer() {
  return (
    <section className={styles.section} id="meet-photographer">
      <div className={styles.container}>
        {/* Left Column — Photographer Image */}
        <div className={styles.imageWrap}>
          <img
            src="/owner.jpg"
            alt="Glenn - Professional Photographer with 20 years experience"
            className={styles.image}
            loading="lazy"
          />
        </div>

        {/* Right Column — Text Content */}
        <div className={styles.content}>
          <p className={styles.label}>ABOUT</p>

          <h2 className={styles.heading}>
            Hi, I am <em>Glenn.</em>
          </h2>

          <p className={styles.body}>
            I believe the best photographs are not the ones where everything is
            perfect.
          </p>

          <p className={styles.body}>
            They are the ones where you can feel the laughter. The ones that
            bring you right back to a person, a place, or a season of life.
          </p>

          <p className={styles.body}>
            For over 20 years I have been photographing families and couples
            across Hayward, the Bay Area, and beyond, and that is always what I am
            chasing — not a flawless pose, but the real, unrepeatable feeling of
            being together.
          </p>

          <p className={styles.body}>That is what I want to create for you.</p>

          <a href="#contact" className={styles.cta}>
            <span>GET TO KNOW ME</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
