import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { SERVICE_AREAS_DATA } from "@/lib/serviceAreasData";
import { MapPin, ArrowRight } from "lucide-react";
import styles from "./ServiceAreasPage.module.css";

export const metadata = {
  title: "Service Areas | Bay Area Photographer | Glenns Lens Photography",
  description:
    "Glenns Lens Photography proudly serves Hayward, San Leandro, Castro Valley, Fremont, Union City, Dublin, Pleasanton, Oakland, San Jose, San Francisco, and surrounding East Bay communities.",
};

export default function ServiceAreasIndexPage() {
  const areasList = Object.values(SERVICE_AREAS_DATA);

  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
        {/* Hero Banner */}
        <section className={styles.heroBanner}>
          <div className={styles.heroContent}>
            <p className={styles.heroTag}>SAN FRANCISCO BAY AREA</p>
            <h1 className={styles.heroTitle}>Service Areas & Locations</h1>
            <p className={styles.heroSubtitle}>
              Based at 345 Grove Way in Hayward, CA, we travel throughout the East Bay, South Bay, and Peninsula for family, portrait, and couple sessions.
            </p>
          </div>
        </section>

        {/* Cities Grid */}
        <section className={styles.gridSection}>
          <div className={styles.container}>
            <div className={styles.areasGrid}>
              {areasList.map((area) => (
                <div key={area.slug} className={styles.card}>
                  <div className={styles.cardImageContainer}>
                    <img src={area.heroImage} alt={area.city} loading="lazy" />
                    <div className={styles.cardBadge}>
                      <MapPin size={14} />
                      <span>{area.city}, CA</span>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>{area.title}</h2>
                    <p className={styles.cardTagline}>{area.tagline}</p>
                    <p className={styles.cardDesc}>{area.description}</p>

                    <Link href={`/service-areas/${area.slug}`} className={styles.cardLink}>
                      Explore {area.city} Photography
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrated Quote Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
