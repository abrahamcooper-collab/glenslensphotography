import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { SERVICES_DATA } from "@/lib/servicesData";
import { ArrowRight, Camera } from "lucide-react";
import styles from "./ServicesPage.module.css";

export const metadata = {
  title: "Photography Services | Glenns Lens Photography",
  description:
    "Explore our professional photography services in the San Francisco Bay Area: Family Sessions, Couples & Romance, Solo Portraits, Engagements, Pets, Sweet 16, & Fine Art Landscapes.",
};

export default function ServicesIndexPage() {
  const servicesList = Object.values(SERVICES_DATA);

  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
        {/* Hero Banner */}
        <section className={styles.heroBanner}>
          <div className={styles.heroContent}>
            <p className={styles.heroTag}>GLENNS LENS PHOTOGRAPHY</p>
            <h1 className={styles.heroTitle}>Our Photography Services</h1>
            <p className={styles.heroSubtitle}>
              Over 20 years of experience capturing real smiles, authentic love, and unforgettable Bay Area memories.
            </p>
          </div>
        </section>

        {/* Services List Grid */}
        <section className={styles.gridSection}>
          <div className={styles.container}>
            <div className={styles.servicesGrid}>
              {servicesList.map((srv) => (
                <div key={srv.slug} className={styles.card}>
                  <div className={styles.cardImageContainer}>
                    <img src={srv.heroImage} alt={srv.title} loading="lazy" />
                    <div className={styles.cardBadge}>
                      <Camera size={14} />
                      <span>{srv.title}</span>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>{srv.title}</h2>
                    <p className={styles.cardSubtitle}>{srv.subtitle}</p>
                    <p className={styles.cardDesc}>{srv.description}</p>

                    <Link href={`/services/${srv.slug}`} className={styles.cardLink}>
                      Explore {srv.title}
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
