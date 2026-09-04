"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Camera, Star, ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/lib/servicesData";
import styles from "./ServiceAreaTemplate.module.css";

export default function ServiceAreaTemplate({ area }) {
  const servicesList = Object.values(SERVICES_DATA);

  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
        {/* ── Hero Section ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroBg}>
            <img
              src={area.heroImage}
              alt={`Photography in ${area.city}, CA`}
              className={styles.heroImg}
            />
            <div className={styles.heroOverlay} />
          </div>

          <div className={styles.heroContent}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/service-areas">Service Areas</Link>
              <span>/</span>
              <span className={styles.activeBreadcrumb}>
                {area.city}, {area.state}
              </span>
            </nav>

            <div className={styles.badge}>
              <MapPin size={13} className={styles.badgeIcon} />
              <span>Serving {area.city}, CA</span>
            </div>

            <h1 className={styles.heroTitle}>{area.title}</h1>
            <p className={styles.heroTagline}>{area.tagline}</p>
            <p className={styles.heroDesc}>{area.description}</p>

            <div className={styles.heroCtaRow}>
              <a href="#contact" className={styles.btnPrimary}>
                Schedule a Session in {area.city}
                <ArrowRight size={16} />
              </a>
              <a href="#landmarks" className={styles.btnSecondary}>
                Local Photo Spots
              </a>
            </div>
          </div>
        </section>

        {/* ── Landmarks & Photo Spots ── */}
        <section className={styles.landmarksSection} id="landmarks">
          <div className={styles.sectionWrapper}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>LOCAL DESTINATIONS</p>
              <h2 className={styles.sectionTitle}>
                Top Photography Locations in {area.city}
              </h2>
              <p className={styles.sectionSubtitle}>
                We know the best natural lighting times, angles, and scenic spots throughout {area.city}.
              </p>
            </div>

            <div className={styles.landmarksGrid}>
              {area.landmarks.map((spot, idx) => (
                <div key={idx} className={styles.landmarkCard}>
                  <div className={styles.landmarkIconBox}>
                    <MapPin size={20} className={styles.landmarkIcon} />
                  </div>
                  <div>
                    <h3 className={styles.landmarkTitle}>{spot.name}</h3>
                    <p className={styles.landmarkDesc}>{spot.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Local Photo Showcase ── */}
        <section className={styles.gallerySection}>
          <div className={styles.sectionWrapper}>
            <div className={styles.sectionCenterHeader}>
              <p className={styles.sectionTag}>BAY AREA GALLERY</p>
              <h2 className={styles.sectionTitle}>
                Photography Captured Near {area.city}
              </h2>
            </div>

            <div className={styles.galleryGrid}>
              {area.gallery.map((imgUrl, idx) => (
                <div key={idx} className={styles.galleryItem}>
                  <img
                    src={imgUrl}
                    alt={`Photography shot near ${area.city} ${idx + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonial Highlight ── */}
        {area.testimonial && (
          <section className={styles.testimonialSection}>
            <div className={styles.sectionWrapperSmall}>
              <div className={styles.testimonialCard}>
                <div className={styles.starsRow}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className={styles.starIcon} />
                  ))}
                </div>
                <blockquote className={styles.quoteText}>
                  "{area.testimonial.quote}"
                </blockquote>
                <p className={styles.quoteAuthor}>— {area.testimonial.author}</p>
              </div>
            </div>
          </section>
        )}

        {/* ── Services Available in City ── */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionWrapper}>
            <div className={styles.sectionCenterHeader}>
              <p className={styles.sectionTag}>SERVICES OFFERED</p>
              <h2 className={styles.sectionTitle}>
                Photography Services in {area.city}, CA
              </h2>
            </div>

            <div className={styles.servicesGrid}>
              {servicesList.map((srv) => (
                <Link
                  key={srv.slug}
                  href={`/services/${srv.slug}`}
                  className={styles.serviceLinkCard}
                >
                  <div className={styles.srvIconBox}>
                    <Camera size={20} />
                  </div>
                  <div>
                    <h3 className={styles.srvTitle}>{srv.title}</h3>
                    <p className={styles.srvSubtitle}>{srv.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Form Section ── */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
