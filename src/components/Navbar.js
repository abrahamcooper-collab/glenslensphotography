"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

const GMB_LINK =
  "https://www.google.com/maps/place/Glenns+lens+photography/@37.6800051,-122.0888935,10z/data=!3m1!4b1!4m6!3m5!1s0x23d39b3e706b8803:0x8cc87db98dcf937!8m2!3d37.6800051!4d-122.0888935!16s%2Fg%2F11zbdms_k0?hl=en&entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D";

const SERVICES_ITEMS = [
  { label: "All Services Overview", href: "/services" },
  { label: "Family Photoshoot", href: "/services/family-photoshoot" },
  { label: "Solo Portrait", href: "/services/solo-portrait" },
  { label: "Engagement Photography", href: "/services/engagement-photography" },
  { label: "Pet Photography", href: "/services/pet-photography" },
  { label: "Sweet 16 Photography", href: "/services/sweet-16-photography" },
  { label: "Graduation Photography", href: "/services/graduation-photography" },
  { label: "Landscape Photography", href: "/services/landscape-photography" },
];

const SERVICE_AREAS_ITEMS = [
  { label: "All Service Areas", href: "/service-areas" },
  { label: "Hayward, CA (Home)", href: "/service-areas/hayward-ca" },
  { label: "San Leandro, CA", href: "/service-areas/san-leandro-ca" },
  { label: "Castro Valley, CA", href: "/service-areas/castro-valley-ca" },
  { label: "Fremont, CA", href: "/service-areas/fremont-ca" },
  { label: "Union City, CA", href: "/service-areas/union-city-ca" },
  { label: "Dublin, CA", href: "/service-areas/dublin-ca" },
  { label: "Pleasanton, CA", href: "/service-areas/pleasanton-ca" },
  { label: "Oakland, CA", href: "/service-areas/oakland-ca" },
  { label: "San Jose, CA", href: "/service-areas/san-jose-ca" },
  { label: "San Francisco, CA", href: "/service-areas/san-francisco-ca" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="navbar"
    >
      <div className={styles.navContainer}>
        {/* Logo */}
        <a
          href={GMB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logo}
        >
          <img
            src="/logo.png"
            alt="Glenns Lens Photography Logo"
            className={styles.logoImg}
          />
          <span>Glenns Lens</span>
        </a>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="/#home" className={styles.navLink}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/#about" className={styles.navLink}>
              ABOUT
            </Link>
          </li>

          {/* SERVICES Dropdown */}
          <li className={styles.dropdownParent}>
            <Link href="/services" className={styles.dropdownTrigger}>
              SERVICES
              <ChevronDown size={14} className={styles.dropdownIcon} />
            </Link>
            <div className={styles.dropdownMenu}>
              <ul className={styles.dropdownList}>
                {SERVICES_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.dropdownItem}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* SERVICE AREAS Dropdown */}
          <li className={styles.dropdownParent}>
            <Link href="/service-areas" className={styles.dropdownTrigger}>
              LOCATIONS
              <ChevronDown size={14} className={styles.dropdownIcon} />
            </Link>
            <div className={styles.dropdownMenu}>
              <ul className={styles.dropdownList}>
                {SERVICE_AREAS_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.dropdownItem}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <Link href="/#portfolio" className={styles.navLink}>
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="/#experience" className={styles.navLink}>
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/#sessions" className={styles.navLink}>
              SESSIONS
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              CONTACT
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link href="/contact" className={styles.ctaButton}>
          BOOK A SESSION
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileNavLinks}>
          <li>
            <Link
              href="/#home"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </Link>
          </li>

          {/* Mobile Services Accordion */}
          <li className={styles.mobileAccordion}>
            <div className={styles.mobileAccordionHeader}>
              <Link
                href="/services"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                SERVICES
              </Link>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={styles.mobileToggleBtn}
              >
                <ChevronDown
                  size={16}
                  className={`${styles.mobileChevron} ${
                    mobileServicesOpen ? styles.chevronOpen : ""
                  }`}
                />
              </button>
            </div>
            {mobileServicesOpen && (
              <ul className={styles.mobileSubList}>
                {SERVICES_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={styles.mobileSubLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Mobile Service Areas Accordion */}
          <li className={styles.mobileAccordion}>
            <div className={styles.mobileAccordionHeader}>
              <Link
                href="/service-areas"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                LOCATIONS
              </Link>
              <button
                type="button"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className={styles.mobileToggleBtn}
              >
                <ChevronDown
                  size={16}
                  className={`${styles.mobileChevron} ${
                    mobileAreasOpen ? styles.chevronOpen : ""
                  }`}
                />
              </button>
            </div>
            {mobileAreasOpen && (
              <ul className={styles.mobileSubList}>
                {SERVICE_AREAS_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={styles.mobileSubLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/#portfolio"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              href="/#experience"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link
              href="/#sessions"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              SESSIONS
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <Link
          href="/contact"
          className={styles.mobileCta}
          onClick={() => setMenuOpen(false)}
        >
          BOOK A SESSION
        </Link>
      </div>
    </nav>
  );
}
