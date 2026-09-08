import { cloudImg } from "@/lib/images";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        {/* Left — Photo */}
        <div className={styles.imageWrap}>
          <img
            src={cloudImg("solo_potraits/DSC01771.jpg")}
            alt="Warm lifestyle portrait by Glenns Lens Photography"
            className={styles.image}
            loading="lazy"
          />
        </div>

        {/* Right — Text */}
        <div className={styles.content}>
          <p className={styles.label}>WELCOME</p>

          <h2 className={styles.heading}>
            More than photographs.
            <br />
            <em>Memories you can feel.</em>
          </h2>

          <p className={styles.body}>
            Years from now, the little moments will mean everything — the way
            your children laughed, the way you looked at each other, the tiny
            details you never want to forget.
          </p>

          <p className={styles.body}>
            My sessions are designed to feel natural, relaxed, and genuinely
            you.. so your photographs tell the story of your connection rather
            than simply documenting a pose.
          </p>

          <a href="#meet-photographer" className={styles.cta}>
            <span>MEET YOUR PHOTOGRAPHER</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
