import { ENGAGEMENT } from "@/lib/images";
import styles from "./CouplesFeature.module.css";

export default function CouplesFeature() {
  return (
    <section className={styles.section}>
      {/* Background Image */}
      <div className={styles.bgWrap}>
        <img
          src={ENGAGEMENT.DSC08104}
          alt="Couples and engagement photography session by Glenns Lens Photography"
          className={styles.bgImage}
          loading="lazy"
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>COUPLES PHOTOGRAPHY</p>
          <h2 className={styles.heading}>
            For the two <em>of you.</em>
          </h2>
          <p className={styles.body}>
            Whether you are celebrating an engagement, an anniversary, or simply
            the season of life you are in, your session should feel like you —
            effortless, intimate, and completely real.
          </p>

          <a href="#contact" className={styles.cta}>
            <span>PLAN YOUR COUPLES SESSION</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
