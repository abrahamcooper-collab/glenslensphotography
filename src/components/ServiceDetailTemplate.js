"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Check, ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import styles from "./ServiceDetailTemplate.module.css";

export default function ServiceDetailTemplate({ service }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
        {/* ── Hero Section ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroBg}>
            <img
              src={service.heroImage}
              alt={service.title}
              className={styles.heroImg}
            />
            <div className={styles.heroOverlay} />
          </div>

          <div className={styles.heroContent}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
              <span>/</span>
              <span className={styles.activeBreadcrumb}>{service.title}</span>
            </nav>

            <div className={styles.badge}>
              <Sparkles size={13} className={styles.badgeIcon} />
              <span>20 Years Experience</span>
            </div>

            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className={styles.heroSubtitle}>{service.subtitle}</p>

            <div className={styles.heroCtaRow}>
              <a href="#contact" className={styles.btnPrimary}>
                Book a Session
                <ArrowRight size={16} />
              </a>
              <a href="#packages" className={styles.btnSecondary}>
                View Packages
              </a>
            </div>
          </div>
        </section>

        {/* ── Overview & Features ── */}
        <section className={styles.overviewSection}>
          <div className={styles.sectionWrapper}>
            <div className={styles.overviewHeader}>
              <p className={styles.sectionTag}>THE EXPERIENCE</p>
              <h2 className={styles.sectionTitle}>{service.tagline}</h2>
              <p className={styles.sectionDesc}>{service.description}</p>
            </div>

            <div className={styles.featuresGrid}>
              {service.features.map((feat, idx) => (
                <div key={idx} className={styles.featureCard}>
                  <div className={styles.featureIconBox}>
                    <Check size={18} className={styles.featureIcon} />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>{feat.title}</h3>
                    <p className={styles.featureDesc}>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio Gallery Showcase ── */}
        <section className={styles.gallerySection}>
          <div className={styles.sectionWrapper}>
            <div className={styles.sectionCenterHeader}>
              <p className={styles.sectionTag}>PORTFOLIO</p>
              <h2 className={styles.sectionTitle}>
                Recent {service.title} Work
              </h2>
            </div>

            <div className={styles.galleryGrid}>
              {service.gallery.map((imgUrl, idx) => (
                <div key={idx} className={styles.galleryItem}>
                  <img
                    src={imgUrl}
                    alt={`${service.title} photograph ${idx + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing & Packages ── */}
        <section className={styles.packagesSection} id="packages">
          <div className={styles.sectionWrapper}>
            <div className={styles.sectionCenterHeader}>
              <p className={styles.sectionTag}>INVESTMENT</p>
              <h2 className={styles.sectionTitle}>Session Packages</h2>
            </div>

            <div className={styles.packagesGrid}>
              {service.packages.map((pkg, idx) => (
                <div key={idx} className={styles.packageCard}>
                  <h3 className={styles.pkgName}>{pkg.name}</h3>
                  <div className={styles.pkgPriceRow}>
                    <span className={styles.pkgPrice}>{pkg.price}</span>
                    <span className={styles.pkgDuration}>
                      / {pkg.duration}
                    </span>
                  </div>

                  <ul className={styles.pkgList}>
                    {pkg.includes.map((item, i) => (
                      <li key={i}>
                        <Check size={16} className={styles.pkgCheck} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className={styles.pkgBtn}>
                    Book This Package
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs Accordion ── */}
        {service.faqs && service.faqs.length > 0 && (
          <section className={styles.faqSection}>
            <div className={styles.sectionWrapperSmall}>
              <div className={styles.sectionCenterHeader}>
                <p className={styles.sectionTag}>QUESTIONS</p>
                <h2 className={styles.sectionTitle}>
                  Frequently Asked Questions
                </h2>
              </div>

              <div className={styles.faqList}>
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`${styles.faqItem} ${
                        isOpen ? styles.faqOpen : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className={styles.faqQuestion}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          size={18}
                          className={`${styles.faqChevron} ${
                            isOpen ? styles.chevronRotated : ""
                          }`}
                        />
                      </button>
                      {isOpen && <p className={styles.faqAnswer}>{faq.a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Contact & Quote Form Section ── */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
