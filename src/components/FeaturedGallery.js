import { PET, SOLO_PORTRAITS, LANDSCAPE } from "@/lib/images";
import styles from "./FeaturedGallery.module.css";

export default function FeaturedGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <p className={styles.label}>FEATURED GALLERY</p>
        <h2 className={styles.heading}>
          A glimpse into the stories <em>I get to tell.</em>
        </h2>

        {/* Main Hero Featured Image */}
        <div className={styles.mainCard}>
          <img
            src={LANDSCAPE.DSC01721}
            alt="Northern California coastal landscape photography"
            className={styles.mainImage}
            loading="lazy"
          />
        </div>

        {/* Secondary Featured Row */}
        <div className={styles.subGrid}>
          <div className={styles.subCard}>
            <img
              src={PET.DSC00027}
              alt="Playful outdoor pet portrait"
              className={styles.subImage}
              loading="lazy"
            />
          </div>
          <div className={styles.subCard}>
            <img
              src={SOLO_PORTRAITS.DSC04067}
              alt="Creative portrait photography session"
              className={styles.subImage}
              loading="lazy"
            />
          </div>
          <div className={styles.subCard}>
            <img
              src={LANDSCAPE.DSC05086}
              alt="Sunlit redwood forest canopy"
              className={styles.subImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
