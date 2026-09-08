import Link from "next/link";
import styles from "./Footer.module.css";

const GMB_LINK =
  "https://www.google.com/maps/place/Glenns+lens+photography/@37.6800051,-122.0888935,10z/data=!3m1!4b1!4m6!3m5!1s0x23d39b3e706b8803:0x8cc87db98dcf937!8m2!3d37.6800051!4d-122.0888935!16s%2Fg%2F11zbdms_k0?hl=en&entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D";

const SERVICES_LIST = [
  { label: "Family Photoshoot", href: "/services/family-photoshoot" },
  { label: "Solo Portrait", href: "/services/solo-portrait" },
  { label: "Engagement Photography", href: "/services/engagement-photography" },
  { label: "Pet Photography", href: "/services/pet-photography" },
  { label: "Sweet 16 Photography", href: "/services/sweet-16-photography" },
  { label: "Graduation Photography", href: "/services/graduation-photography" },
  { label: "Landscape Photography", href: "/services/landscape-photography" },
];

const SERVICE_AREAS_LIST = [
  { label: "Hayward, CA", href: "/service-areas/hayward-ca" },
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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Columns Grid */}
        <div className={styles.topRow}>
          {/* Column 1: Brand */}
          <div className={styles.colBrand}>
            <a
              href={GMB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logo}
            >
              Glenns Lens
            </a>
            <p className={styles.desc}>
              Authentic family & portrait photography in Hayward, CA. Capturing
              the moments you never want to forget with over 20 years of experience.
            </p>

            {/* Social Icons Row */}
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/glenns_lens_/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconCircle}
                aria-label="Instagram"
                title="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@glennslensphotography"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconCircle}
                aria-label="TikTok"
                title="TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.65a6.34 6.34 0 1 0 6.34 6.34V9.45a8.16 8.16 0 0 0 4.77 1.52V7.5a4.85 4.85 0 0 1-1-.81z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Glennslensphotography"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconCircle}
                aria-label="YouTube"
                title="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.pinterest.com/glennslensphotography/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconCircle}
                aria-label="Pinterest"
                title="Pinterest"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                </svg>
              </a>
            </div>

            {/* Contact Details */}
            <ul className={styles.contactList}>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>345 Grove Way, Hayward, CA</span>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:5104271188">510-427-1188</a>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:glennslensphotography25@gmail.com">
                  glennslensphotography25@gmail.com
                </a>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <a
                  href="https://www.instagram.com/glenns_lens_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.65a6.34 6.34 0 1 0 6.34 6.34V9.45a8.16 8.16 0 0 0 4.77 1.52V7.5a4.85 4.85 0 0 1-1-.81z" />
                </svg>
                <a
                  href="https://www.tiktok.com/@glennslensphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" fill="currentColor" />
                </svg>
                <a
                  href="https://www.youtube.com/@Glennslensphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                </svg>
                <a
                  href="https://www.pinterest.com/glennslensphotography/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className={styles.colLinks}>
            <h4 className={styles.colHeader}>
              <Link href="/services">SERVICES</Link>
            </h4>
            <ul className={styles.linkList}>
              {SERVICES_LIST.map((srv) => (
                <li key={srv.href}>
                  <Link href={srv.href}>{srv.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className={styles.colLinks}>
            <h4 className={styles.colHeader}>
              <Link href="/service-areas">SERVICE AREAS</Link>
            </h4>
            <ul className={styles.linkListTwoCol}>
              {SERVICE_AREAS_LIST.map((area) => (
                <li key={area.href}>
                  <Link href={area.href}>{area.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className={styles.divider}></div>

        {/* Bottom Bar */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()}{" "}
            <a
              href={GMB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brandLink}
            >
              Glenns Lens Photography
            </a>
            . All rights reserved.
          </p>

          <p className={styles.tagline}>
            Bay Area Family, Portrait & Event Photographer
          </p>

          <p className={styles.upscalersCredit}>
            Designed by{" "}
            <a
              href="https://upscalers.us"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.upscalersLink}
            >
              Upscalers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
