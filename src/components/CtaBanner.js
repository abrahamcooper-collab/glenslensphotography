import { LANDSCAPE } from "@/lib/images";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      {/* Background Image */}
      <div className={styles.bgWrap}>
        <img
          src={LANDSCAPE.DSC01724}
          alt="Sunset landscape photography by Glenns Lens Photography"
          className={styles.bgImage}
          loading="lazy"
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Let us make something
            <br />
            <em>you will keep forever.</em>
          </h2>

          <p className={styles.body}>
            Your favorite photographs should not just live on your phone. Let us
            create something you will want to print, frame, and pass down.
          </p>

          <div className={styles.buttons}>
            <a href="#contact" className={styles.btnPrimary}>
              <span>LET US PLAN YOUR SESSION</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="#portfolio" className={styles.btnSecondary}>
              <span>VIEW THE PORTFOLIO</span>
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
