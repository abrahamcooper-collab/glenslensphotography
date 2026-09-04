import { FAMILY, ENGAGEMENT } from "@/lib/images";
import styles from "./FamilyFeature.module.css";

const HIGHLIGHTS = [
  "RELAXED SESSIONS",
  "NATURAL DIRECTION",
  "BEAUTIFUL LOCATIONS",
  "TIMELESS PHOTOGRAPHS",
];

export default function FamilyFeature() {
  return (
    <section className={styles.section} id="sessions">
      <div className={styles.container}>
        {/* Left Column — Text */}
        <div className={styles.leftCol}>
          <p className={styles.label}>FAMILY PHOTOGRAPHY</p>
          <h2 className={styles.heading}>
            The beautiful chaos <em>of family.</em>
          </h2>

          <p className={styles.body}>
            From tiny hands and big laughs to the quiet moments in between, family
            sessions are about capturing who you are together — naturally and
            authentically.
          </p>

          <a href="#contact" className={styles.cta}>
            <span>PLAN YOUR FAMILY SESSION</span>
            <span className={styles.arrow}>→</span>
          </a>

          {/* Highlights */}
          <div className={styles.highlights}>
            {HIGHLIGHTS.map((item) => (
              <span key={item} className={styles.highlightItem}>
                <span className={styles.bullet}>·</span> {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column — Photo Grid */}
        <div className={styles.rightCol}>
          <div className={styles.collageGrid}>
            <div className={styles.mainCard}>
              <img
                src={FAMILY.DSC00365}
                alt="Family photography golden hour session"
                className={styles.img}
                loading="lazy"
              />
            </div>
            <div className={styles.sideStack}>
              <div className={styles.cardSmall}>
                <img
                  src={FAMILY.DSC00371}
                  alt="Family laughing together outdoors"
                  className={styles.img}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardSmall}>
                <img
                  src={FAMILY.DSC01490}
                  alt="Joyful family outdoor portrait"
                  className={styles.img}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
