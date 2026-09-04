import { cloudImg } from "@/lib/images";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Background Image */}
      <div className={styles.bgImage}>
        <img
          src={cloudImg("family/DSC00245.jpg")}
          alt="Beautiful family photography session by Glenns Lens Photography in the Bay Area"
          loading="eager"
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.tagline}>HAYWARD FAMILY & PORTRAIT PHOTOGRAPHER</p>

        <h1 className={styles.heading}>
          Your story,
          <br />
          <em>beautifully</em>
          <br />
          remembered.
        </h1>

        <p className={styles.subtitle}>
          Authentic family & couples photography for the moments you never
          want to forget.
        </p>

        <div className={styles.buttons}>
          <a href="#contact" className={styles.btnPrimary}>
            <span>BOOK YOUR SESSION</span>
            <span className={styles.arrow}>→</span>
          </a>
          <a href="#portfolio" className={styles.btnSecondary}>
            <span>VIEW MY WORK</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>[ SCROLL TO EXPLORE ]</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
