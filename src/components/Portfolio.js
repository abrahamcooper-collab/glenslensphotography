"use client";

import { useState } from "react";
import {
  FAMILY,
  SOLO_PORTRAITS,
  ENGAGEMENT,
  PET,
  LANDSCAPE,
} from "@/lib/images";
import styles from "./Portfolio.module.css";

const CATEGORIES = [
  { id: "couples", label: "Couples" },
  { id: "families", label: "Families" },
  { id: "engagement", label: "Engagement" },
  { id: "pets", label: "Pet Photography" },
  { id: "lifestyle", label: "Lifestyle" },
];

const ITEMS = [
  // Couples
  { id: 1, category: "couples", src: ENGAGEMENT.DSC06291, alt: "Couples romantic sunset portrait" },
  { id: 2, category: "couples", src: ENGAGEMENT.DSC08104, alt: "Couples session outdoors" },
  { id: 3, category: "couples", src: ENGAGEMENT.IMG_4589, alt: "Romantic couples moment" },
  { id: 4, category: "couples", src: SOLO_PORTRAITS.DSC01771, alt: "Couples lifestyle photo shoot" },

  // Families
  { id: 5, category: "families", src: FAMILY.DSC00245, alt: "Family photo golden hour" },
  { id: 6, category: "families", src: FAMILY.DSC00365, alt: "Family outdoor portrait" },
  { id: 7, category: "families", src: FAMILY.DSC00371, alt: "Joyful family moment" },
  { id: 8, category: "families", src: FAMILY.DSC01490, alt: "Family session garden" },

  // Engagement
  { id: 9, category: "engagement", src: ENGAGEMENT.DSC02345, alt: "Engagement proposal portrait" },
  { id: 10, category: "engagement", src: ENGAGEMENT.DSC06296, alt: "Engagement scenic trail" },
  { id: 11, category: "engagement", src: ENGAGEMENT.DSC06291, alt: "Engagement celebration" },
  { id: 12, category: "engagement", src: ENGAGEMENT.DSC08104, alt: "Save the date engagement photo" },

  // Pet Photography
  { id: 13, category: "pets", src: PET.DSC00027, alt: "Playful dog portrait" },
  { id: 14, category: "pets", src: PET.DSC00043, alt: "Pet photography park session" },
  { id: 15, category: "pets", src: PET.DSC00662, alt: "Pet portrait outdoors" },
  { id: 16, category: "pets", src: PET.DSC01093, alt: "Dog portrait golden hour" },
  { id: 17, category: "pets", src: PET.DSC01997, alt: "Pet companion portrait" },
  { id: 18, category: "pets", src: PET.IMG_5518, alt: "Cute pet portrait" },

  // Lifestyle
  { id: 19, category: "lifestyle", src: SOLO_PORTRAITS.DSC01652, alt: "Lifestyle portrait outdoors" },
  { id: 20, category: "lifestyle", src: SOLO_PORTRAITS.DSC03902, alt: "Creative lifestyle photo shoot" },
  { id: 21, category: "lifestyle", src: SOLO_PORTRAITS.DSC04067, alt: "Personal branding lifestyle portrait" },
  { id: 22, category: "lifestyle", src: SOLO_PORTRAITS.DSC04789, alt: "Lifestyle portrait session" },
  { id: 23, category: "lifestyle", src: SOLO_PORTRAITS.DSC07775, alt: "Professional headshot lifestyle portrait" },
  { id: 24, category: "lifestyle", src: LANDSCAPE.DSC01721, alt: "Environmental lifestyle scenery" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("couples");

  const filteredItems = ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.container}>
        {/* Header */}
        <p className={styles.label}>PORTFOLIO</p>
        <h2 className={styles.heading}>Stories worth remembering.</h2>

        {/* Category Filters */}
        <div className={styles.filterRow}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${
                activeCategory === cat.id ? styles.activeFilter : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.gridItem}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.image}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
