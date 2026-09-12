import {
  FAMILY,
  SOLO_PORTRAITS,
  ENGAGEMENT,
  PET,
  SWEET_16,
  LANDSCAPE,
  FLORAL,
} from "./images";

export const SERVICES_DATA = {
  "family-photoshoot": {
    slug: "family-photoshoot",
    title: "Family Photoshoot",
    subtitle: "Capturing genuine family moments, group portraits, and milestone celebrations.",
    heroImage: FAMILY.DSC00245,
    tagline: "Timeless golden-hour memories for generations to come",
    description:
      "Capturing genuine family moments — group portraits, candid interactions, and milestone celebrations with over 20 years of experience across the Bay Area.",
    features: [
      {
        title: "Golden Hour Lighting",
        desc: "We schedule sessions during soft golden light for warm, flattering, luminous imagery.",
      },
      {
        title: "Candid & Posed Balance",
        desc: "A natural blend of guided portraiture and playful, spontaneous moments.",
      },
      {
        title: "Full High-Res Gallery",
        desc: "Professionally edited, high-resolution digital images ready for printing and sharing.",
      },
      {
        title: "Location Guidance",
        desc: "Expert recommendations for scenic East Bay parks, beaches, and historic gardens.",
      },
    ],
    gallery: [
      FAMILY.DSC00245,
      FAMILY.DSC00365,
      FAMILY.DSC00371,
      FAMILY.DSC01490,
    ],
    packages: [
      {
        name: "Standard Family Session",
        price: "$350",
        duration: "60 Minutes",
        includes: [
          "Up to 5 family members",
          "1 Scenic Bay Area location",
          "25+ Edited high-resolution photos",
          "Private online gallery & download",
          "Print release included",
        ],
      },
      {
        name: "Extended Family Gathering",
        price: "$550",
        duration: "90 Minutes",
        includes: [
          "Up to 12 family members",
          "Multiple grouping combinations",
          "45+ Edited high-resolution photos",
          "Private online gallery & download",
          "Print release included",
        ],
      },
    ],
    faqs: [
      {
        q: "What should we wear for a family photoshoot?",
        a: "We recommend coordinating tones (earthy pastels, neutrals, soft creams, or navy) rather than matching completely. Avoid heavy logos or bright neon colors.",
      },
      {
        q: "What if my kids are shy or energetic during the shoot?",
        a: "That is completely normal! We take a relaxed approach with zero stress. Games, laughs, and natural breaks keep kids happy and engaged.",
      },
      {
        q: "How long until we receive our photos?",
        a: "Your fully retouched digital gallery is delivered within 10 to 14 business days.",
      },
    ],
  },

  "solo-portrait": {
    slug: "solo-portrait",
    title: "Solo Portrait",
    subtitle: "Individual portrait sessions for professionals, creatives, & personal branding.",
    heroImage: SOLO_PORTRAITS.DSC07775,
    tagline: "Showcase your unique personality with confidence and style",
    description:
      "Individual portrait sessions for professionals, creatives, and personal branding. Glenn crafts portraits that reflect your true character with professional polish.",
    features: [
      {
        title: "Professional & Personal Branding",
        desc: "Ideal for LinkedIn, website banners, social profiles, and personal modeling.",
      },
      {
        title: "Lighting & Angle Mastery",
        desc: "20 years of experience shaping natural and studio light for flattering portraits.",
      },
      {
        title: "Expressive & Natural Styles",
        desc: "Tailored to your creative vision—modern, editorial, environmental, or classic.",
      },
      {
        title: "Quick Gallery Turnaround",
        desc: "Fast digital delivery so you can update your online presence right away.",
      },
    ],
    gallery: [
      SOLO_PORTRAITS.DSC07775,
      SOLO_PORTRAITS.DSC01652,
      SOLO_PORTRAITS.DSC01771,
      SOLO_PORTRAITS.DSC04067,
      SOLO_PORTRAITS.DSC04789,
    ],
    packages: [
      {
        name: "Individual Portrait Session",
        price: "$300",
        duration: "45 Minutes",
        includes: [
          "1 Location of choice",
          "Up to 2 outfits",
          "20+ Professionally retouched images",
          "High-resolution & web-ready files",
          "Online gallery delivery",
        ],
      },
    ],
    faqs: [
      {
        q: "What style of outfit works best for headshots?",
        a: "Solid colors, fitted jackets, and timeless classic cuts work best. Avoid fine stripes or busy geometric patterns.",
      },
    ],
  },

  "engagement-photography": {
    slug: "engagement-photography",
    title: "Engagement Photography",
    subtitle: "Romantic couple sessions to celebrate engagements with natural, authentic poses.",
    heroImage: ENGAGEMENT.DSC02345,
    tagline: "Artistic engagement sessions tailored to your romantic journey",
    description:
      "Romantic couple sessions to celebrate engagements with natural, authentic poses. We capture the joy, romance, and anticipation in imagery that looks stunning on Save-the-Date cards.",
    features: [
      {
        title: "Custom Proposal Planning",
        desc: "Discreet proposal coverage and location planning for surprise popping of the question.",
      },
      {
        title: "Save-the-Date Quality",
        desc: "Images prepped and formatted perfectly for print invitations and web announcements.",
      },
      {
        title: "Golden Hour Magic",
        desc: "Shot during optimal sunset light for ethereal, glowing couple portraits.",
      },
      {
        title: "Ring Detail Shots",
        desc: "Dedicated macros showcasing your engagement ring with fine-art detail.",
      },
    ],
    gallery: [
      ENGAGEMENT.DSC02345,
      ENGAGEMENT.DSC06291,
      ENGAGEMENT.DSC06296,
      ENGAGEMENT.IMG_4589,
    ],
    packages: [
      {
        name: "Engagement Collection",
        price: "$500",
        duration: "90 Minutes",
        includes: [
          "Up to 2 locations",
          "Multiple outfit changes",
          "40+ High-res retouched digital photos",
          "Ring detail macro shots",
          "Private online gallery & print release",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you help with surprise proposal planning?",
        a: "Yes! Glenn can help coordinate hidden timing, location scouting, and exact positioning to capture the magical moment uninterrupted.",
      },
    ],
  },

  "pet-photography": {
    slug: "pet-photography",
    title: "Pet Photography",
    subtitle: "Fun and heartfelt sessions featuring your furry family members.",
    heroImage: PET.DSC00027,
    tagline: "Paws, tails, and unconditional love captured with patience and skill",
    description:
      "Fun and heartfelt sessions featuring your furry family members. Whether you have an energetic dog or a cat, Glenn uses patient techniques to capture their unique spirit.",
    features: [
      {
        title: "Patience & Pet-Friendly Care",
        desc: "No rush, no stress—plenty of time for treats, sniffs, and play breaks.",
      },
      {
        title: "Action & Actionless Portraits",
        desc: "High-speed action shots catching mid-air leaps alongside serene close-up portraits.",
      },
      {
        title: "Pet + Owner Portraits",
        desc: "Includes heartwarming portraits of you together with your furry friend.",
      },
      {
        title: "Outdoor & Park Sessions",
        desc: "Shot in safe, spacious parks or outdoor spaces where pets feel comfortable.",
      },
    ],
    gallery: [
      PET.DSC00027,
      PET.DSC00043,
      PET.DSC00662,
      PET.DSC01093,
      PET.DSC01997,
      PET.IMG_2276,
    ],
    packages: [
      {
        name: "Paws & Portraits Session",
        price: "$275",
        duration: "45 Minutes",
        includes: [
          "Pet + up to 2 owners",
          "Outdoor park location",
          "20+ Retouched high-res images",
          "High-speed action & portrait shots",
          "Online gallery download",
        ],
      },
    ],
    faqs: [
      {
        q: "What if my dog cannot be off-leash safely?",
        a: "Not a problem at all! We shoot with your dog on leash and edit out the leash in post-production for clean, free-roaming looks.",
      },
    ],
  },

  "sweet-16-photography": {
    slug: "sweet-16-photography",
    title: "Sweet 16 Photography",
    subtitle: "Capturing the magic of turning sixteen with styled, vibrant photo sessions.",
    heroImage: SWEET_16.DSC04229,
    tagline: "Capture the glamour, fun, and joy of milestone birthday celebrations",
    description:
      "Capturing the magic of turning sixteen with styled, vibrant photo sessions. From dress portraits to fun moments with friends, we capture the brilliance of your special day.",
    features: [
      {
        title: "Glamour & Dress Detail",
        desc: "Beautiful full-length, gown, and accessory detail photography.",
      },
      {
        title: "Friends & Family Groups",
        desc: "Fun group portraits with best friends, court of honor, and family members.",
      },
      {
        title: "Vibrant Color Editing",
        desc: "Rich, vivid colors that highlight party decor, outfits, and festive smiles.",
      },
      {
        title: "Event & Portrait Options",
        desc: "Choose between dedicated outdoor pre-party portraits or party event coverage.",
      },
    ],
    gallery: [
      SWEET_16.DSC04229,
      SWEET_16.DSC04306,
      SWEET_16.DSC07136,
      SWEET_16.DSC08296,
    ],
    packages: [
      {
        name: "Sweet 16 Milestone Package",
        price: "$450",
        duration: "75 Minutes",
        includes: [
          "Pre-event portrait session",
          "Up to 2 dress/outfit changes",
          "35+ Edited high-resolution digital photos",
          "Family & friend portraits included",
          "Online gallery & print access",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we do pre-party portraits in full dress before the birthday event?",
        a: "Yes! Pre-birthday portrait sessions allow plenty of time for relaxed, gorgeous dress shots without party schedule pressure.",
      },
    ],
  },

  "graduation-photography": {
    slug: "graduation-photography",
    title: "Graduation Photography",
    subtitle: "Commemorating academic achievements with professional cap-and-gown and lifestyle shots.",
    heroImage: SOLO_PORTRAITS.DSC03902,
    tagline: "Celebrate your milestone graduation with timeless portraits",
    description:
      "Commemorating academic achievements with professional cap-and-gown and lifestyle shots across high school, college, and university campuses in the Bay Area.",
    features: [
      {
        title: "Cap & Gown Styling",
        desc: "Polished shots featuring your cap, gown, stole, diploma, and honors cords.",
      },
      {
        title: "Campus & Outdoor Locations",
        desc: "Shot on scenic university grounds, historic landmarks, or local park backdrops.",
      },
      {
        title: "Casual Outfit Additions",
        desc: "Includes time for casual lifestyle clothing looks alongside cap and gown.",
      },
      {
        title: "Family & Friends Included",
        desc: "Celebrate your big accomplishment with parents, siblings, and best friends.",
      },
    ],
    gallery: [
      SOLO_PORTRAITS.DSC03902,
      SOLO_PORTRAITS.DSC04067,
      SOLO_PORTRAITS.DSC04789,
      SOLO_PORTRAITS.DSC05153,
    ],
    packages: [
      {
        name: "Graduation Portrait Session",
        price: "$350",
        duration: "60 Minutes",
        includes: [
          "Cap & gown + 1 casual outfit",
          "1 Campus or scenic location",
          "25+ Edited high-resolution digital photos",
          "Family members included",
          "Online gallery & print release",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we shoot at our school or university campus?",
        a: "Yes! We frequently shoot at UC Berkeley, Stanford, Cal State East Bay, local high schools, and Bay Area parks.",
      },
    ],
  },

  "landscape-photography": {
    slug: "landscape-photography",
    title: "Landscape Photography",
    subtitle: "Stunning landscape and nature photography showcasing the beauty of the Bay Area and beyond.",
    heroImage: LANDSCAPE.DSC01721,
    tagline: "Fine-art landscape prints and custom environmental photography",
    description:
      "Stunning landscape and nature photography showcasing the beauty of the Bay Area and beyond. Glenn captures dramatic fine art landscape imagery suitable for home display and office spaces.",
    features: [
      {
        title: "High Dynamic Range Detail",
        desc: "Shot on high-resolution camera equipment for rich dynamic range and razor sharpness.",
      },
      {
        title: "Northern California Focus",
        desc: "Featuring coastal bluffs, golden hills, redwood forests, and Bay Area landmarks.",
      },
      {
        title: "Custom Canvas & Acrylic Prints",
        desc: "Available as gallery wraps, archival canvas prints, metallic prints, and framed glass.",
      },
      {
        title: "Licensing & Commercial Use",
        desc: "Digital rights available for web, print media, corporate offices, and hospitality.",
      },
    ],
    gallery: [
      LANDSCAPE.DSC01721,
      LANDSCAPE.DSC01724,
      LANDSCAPE.DSC01729,
      LANDSCAPE.DSC04278,
      LANDSCAPE.DSC05086,
    ],
    packages: [
      {
        name: "Fine Art Print Collection",
        price: "Inquire",
        duration: "Custom Order",
        includes: [
          "High-res archival canvas or acrylic print",
          "Custom dimensions (up to 60\" wide)",
          "Signed certificate of authenticity",
          "Bay Area delivery available",
        ],
      },
    ],
    faqs: [
      {
        q: "How can I purchase fine art prints for my home or office?",
        a: "Contact us directly through our quote form or email to select your preferred image, print medium (canvas, metal, paper), and framing options.",
      },
    ],
  },

  "floral-photography": {
    slug: "floral-photography",
    title: "Floral Photography",
    subtitle: "Artistic botanical, garden, and floral photography capturing fine art nature and bloom aesthetics.",
    heroImage: FLORAL.DSC09849,
    tagline: "Fine art botanical portraits & vibrant floral imagery",
    description:
      "Fine art botanical, garden, and floral photography in the Bay Area. Glenn brings out the rich colors, delicate textures, and natural elegance of nature's finest blooms with over 20 years of photographic expertise.",
    features: [
      {
        title: "Macro & Fine Art Detail",
        desc: "Precision focus and artistic lighting that highlights every delicate petal, texture, and natural color depth.",
      },
      {
        title: "Garden & Outdoor Settings",
        desc: "On-location shoots at East Bay botanical gardens, regional parks, and private floral displays.",
      },
      {
        title: "Vibrant Color Grading",
        desc: "Professional color editing ensuring rich, true-to-life tones perfect for fine art wall decor.",
      },
      {
        title: "Custom Prints & Commercial Use",
        desc: "Tailored creative compositions available for fine art prints, botanical decor, and commercial licensing.",
      },
    ],
    gallery: [
      FLORAL.DSC09643,
      FLORAL.DSC09653,
      FLORAL.DSC09656,
      FLORAL.DSC09679,
      FLORAL.DSC09686,
      FLORAL.DSC09689,
      FLORAL.DSC09701,
      FLORAL.DSC09705,
      FLORAL.DSC09712,
      FLORAL.DSC09714,
      FLORAL.DSC09727,
      FLORAL.DSC09866,
      FLORAL.DSC09879,
    ],
    packages: [
      {
        name: "Botanical Mini Session",
        price: "$300",
        duration: "45 Minutes",
        includes: [
          "1 Scenic botanical or garden location",
          "15+ Edited high-resolution photos",
          "Private online digital gallery",
          "High-res download & print release",
        ],
      },
      {
        name: "Fine Art Floral Collection",
        price: "$475",
        duration: "90 Minutes",
        includes: [
          "Multiple garden areas or custom floral displays",
          "35+ Edited high-resolution photos",
          "Private online digital gallery",
          "High-res download & full print release",
          "Commercial & print usage permissions",
        ],
      },
    ],
    faqs: [
      {
        q: "Where do floral photography sessions take place?",
        a: "We capture floral photography at scenic Bay Area botanical gardens, local arboretums, regional parks, or custom floral arrangements.",
      },
      {
        q: "Can I order high-resolution fine art prints of floral photos?",
        a: "Yes! High-resolution digital files and physical canvas or metal prints are available for home or commercial space decoration.",
      },
      {
        q: "How long does it take to receive the edited photo gallery?",
        a: "Your retouched digital gallery will be ready within 10 to 14 business days.",
      },
    ],
  },
};
