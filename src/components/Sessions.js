import styles from "./Sessions.module.css";

const PACKAGES = [
  {
    title: "Family Sessions",
    tagline: "Beautiful, relaxed sessions designed around your family.",
    price: "Starting at $450",
    features: [
      "60–90 minute session",
      "Outdoor location of your choice",
      "50+ edited photographs",
      "Private online gallery",
    ],
  },
  {
    title: "Couples Sessions",
    tagline: "Romantic, natural sessions for the two of you.",
    price: "Starting at $400",
    features: [
      "60 minute session",
      "Scenic location selection",
      "40+ edited photographs",
      "Private online gallery",
    ],
  },
  {
    title: "Engagements",
    tagline: "Timeless imagery to celebrate your next chapter.",
    price: "Starting at $500",
    features: [
      "90 minute session",
      "Up to two locations",
      "60+ edited photographs",
      "Private online gallery",
    ],
  },
];

export default function Sessions() {
  return (
    <section className={styles.section} id="sessions">
      <div className={styles.container}>
        {/* Header */}
        <p className={styles.label}>SESSIONS</p>
        <h2 className={styles.heading}>
          Session options, <em>simply.</em>
        </h2>
        <p className={styles.subtitle}>
          Each session is thoughtfully crafted around your story. Here is a
          starting point — I will put together the perfect package once I know
          more about you.
        </p>

        {/* 3 Pricing Cards Grid */}
        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{pkg.title}</h3>
              <p className={styles.cardTagline}>{pkg.tagline}</p>
              <p className={styles.price}>{pkg.price}</p>

              {/* Feature Bullets */}
              <ul className={styles.featureList}>
                {pkg.features.map((feat) => (
                  <li key={feat} className={styles.featureItem}>
                    <span className={styles.bullet}>·</span> {feat}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a href="#contact" className={styles.cta}>
                <span>GET SESSION DETAILS</span>
                <span className={styles.arrow}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
