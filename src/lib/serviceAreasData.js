import {
  FAMILY,
  SOLO_PORTRAITS,
  ENGAGEMENT,
  PET,
  LANDSCAPE,
} from "./images";

export const SERVICE_AREAS_DATA = {
  "hayward-ca": {
    slug: "hayward-ca",
    city: "Hayward",
    state: "CA",
    title: "Photographer in Hayward, CA",
    heroImage: LANDSCAPE.DSC01721,
    tagline: "Your local Hayward photographer with over 20 years of Bay Area experience",
    description:
      "Glenns Lens Photography is proudly based in Hayward, CA at 345 Grove Way. From the tranquil Japanese Gardens to the vast rolling views at Garin Regional Park, we capture families, couples, and portraits with local warmth.",
    landmarks: [
      {
        name: "Japanese Tea Garden",
        desc: "Stunning traditional bridges, koi ponds, and lush greenery for serene portraiture.",
      },
      {
        name: "Garin Regional Park",
        desc: "Rolling golden hills, historic orchards, and oak groves bathed in sunset light.",
      },
      {
        name: "Hayward Regional Shoreline",
        desc: "Open bay views, coastal trails, and dramatic sky backdrops perfect for golden hour.",
      },
    ],
    gallery: [FAMILY.DSC00245, ENGAGEMENT.DSC06291, PET.DSC00027, LANDSCAPE.DSC01721],
    testimonial: {
      quote:
        "Glenn took our family photos at Garin Park in Hayward. He was so patient with our kids and captured the most genuine smiles we've ever seen!",
      author: "Maria S., Hayward Resident",
    },
  },

  "san-leandro-ca": {
    slug: "san-leandro-ca",
    city: "San Leandro",
    state: "CA",
    title: "Photographer in San Leandro, CA",
    heroImage: FAMILY.DSC00371,
    tagline: "Professional family, couple, & portrait photography in San Leandro",
    description:
      "Just minutes north of Hayward, San Leandro features gorgeous waterfront vistas at the San Leandro Marina and historic park spaces perfect for family gatherings and couples sessions.",
    landmarks: [
      {
        name: "San Leandro Marina & Park",
        desc: "Scenic bayside paths, boat docks, and ocean breezes during golden hour.",
      },
      {
        name: "Marina Park Greens",
        desc: "Expansive green lawns with clear horizon sunsets for family play portraits.",
      },
    ],
    gallery: [FAMILY.DSC00371, ENGAGEMENT.DSC02345, SOLO_PORTRAITS.DSC07775],
    testimonial: {
      quote:
        "Our anniversary photos at San Leandro Marina turned out beyond our wildest expectations. Glenn has a phenomenal eye for natural light.",
      author: "David & Jessica R., San Leandro",
    },
  },

  "castro-valley-ca": {
    slug: "castro-valley-ca",
    city: "Castro Valley",
    state: "CA",
    title: "Photographer in Castro Valley, CA",
    heroImage: ENGAGEMENT.DSC06291,
    tagline: "Rustic hills, canyon parks, & golden portrait photography in Castro Valley",
    description:
      "Nestled among scenic canyon drives and Lake Chabot, Castro Valley offers rustic wooden bridges, redwood groves, and golden hillsides ideal for outdoor photoshoots.",
    landmarks: [
      {
        name: "Lake Chabot Regional Park",
        desc: "Quiet lakeside trails, wooden bridges, and pine tree backdrops.",
      },
      {
        name: "Cull Canyon Regional Recreation Area",
        desc: "Tree-shaded lawns, creek trails, and rustic open country views.",
      },
    ],
    gallery: [ENGAGEMENT.DSC06291, FAMILY.DSC00365, PET.DSC00043],
    testimonial: {
      quote:
        "Glenn did our engagement portraits at Lake Chabot. The lighting through the trees was pure magic!",
      author: "Kevin & Amanda T., Castro Valley",
    },
  },

  "fremont-ca": {
    slug: "fremont-ca",
    city: "Fremont",
    state: "CA",
    title: "Photographer in Fremont, CA",
    heroImage: SOLO_PORTRAITS.DSC07775,
    tagline: "Historic missions, secret gardens, & golden hills in Fremont",
    description:
      "Fremont provides iconic locations like Central Park, Lake Elizabeth, and Mission San Jose. We serve Fremont families and individuals with tailored portrait sessions.",
    landmarks: [
      {
        name: "Central Park / Lake Elizabeth",
        desc: "Vast lake views, mountain backdrops, and picturesque walking paths.",
      },
      {
        name: "Ardenwood Historic Farm",
        desc: "Victorian architecture, eucalyptus groves, and antique farm rustic charm.",
      },
    ],
    gallery: [SOLO_PORTRAITS.DSC07775, FAMILY.DSC01490, ENGAGEMENT.DSC08104],
    testimonial: {
      quote:
        "Glenn made our family photoshoot at Ardenwood so much fun. The quality of the digital downloads is top notch!",
      author: "Priya M., Fremont",
    },
  },

  "union-city-ca": {
    slug: "union-city-ca",
    city: "Union City",
    state: "CA",
    title: "Photographer in Union City, CA",
    heroImage: PET.DSC00027,
    tagline: "Vibrant family, pet, & lifestyle portraits in Union City",
    description:
      "Union City's vibrant community parks and quiet neighborhood green spaces offer relaxed, intimate settings for pet portraits, family sessions, and headshots.",
    landmarks: [
      {
        name: "Dry Creek Cottage & Gardens",
        desc: "Historic heirloom flower gardens, brick paths, and shady trees.",
      },
      {
        name: "Charles F. Kennedy Park",
        desc: "Lush grass and tree groves ideal for pet play and kids portraits.",
      },
    ],
    gallery: [PET.DSC00027, FAMILY.DSC00245, SOLO_PORTRAITS.DSC01652],
    testimonial: {
      quote:
        "We took our dog's portrait with Glenn in Union City. He was patient and got the cutest shots imaginable!",
      author: "Sarah L., Union City",
    },
  },

  "dublin-ca": {
    slug: "dublin-ca",
    city: "Dublin",
    state: "CA",
    title: "Photographer in Dublin, CA",
    heroImage: FAMILY.DSC00245,
    tagline: "Modern parks, rolling hills, & outdoor family sessions in Dublin",
    description:
      "Serving Tri-Valley families, Dublin features beautiful open spaces like Dublin Hills Regional Park and Emerald Glen Park perfect for bright, modern photography.",
    landmarks: [
      {
        name: "Dublin Hills Regional Park",
        desc: "Sweeping valley views and golden grass ridges during sunset.",
      },
      {
        name: "Emerald Glen Park",
        desc: "Modern water features, manicured lawns, and clean architectural lines.",
      },
    ],
    gallery: [FAMILY.DSC00245, ENGAGEMENT.DSC06296, SOLO_PORTRAITS.DSC04067],
    testimonial: {
      quote:
        "Glenn drove out to Dublin for our sunset family session. The golden hour lighting in the hills was breathtaking.",
      author: "Brian K., Dublin",
    },
  },

  "pleasanton-ca": {
    slug: "pleasanton-ca",
    city: "Pleasanton",
    state: "CA",
    title: "Photographer in Pleasanton, CA",
    heroImage: ENGAGEMENT.DSC02345,
    tagline: "Charming downtown streets & ridge park vistas in Pleasanton",
    description:
      "Pleasanton's historic downtown, vine-draped brick walls, and Pleasanton Ridge Regional Park provide sophisticated settings for couples, engagements, and portraits.",
    landmarks: [
      {
        name: "Main Street Downtown Pleasanton",
        desc: "Historic brick architecture, boutique storefronts, and tree-lined streets.",
      },
      {
        name: "Pleasanton Ridge Regional Park",
        desc: "Majestic oak trees, elevated valley panoramas, and rustic wooden fences.",
      },
    ],
    gallery: [ENGAGEMENT.DSC02345, FAMILY.DSC00371, LANDSCAPE.DSC04278],
    testimonial: {
      quote:
        "Our engagement photos in downtown Pleasanton and the ridge park turned out like a magazine spread!",
      author: "Rachel & Eric M., Pleasanton",
    },
  },

  "oakland-ca": {
    slug: "oakland-ca",
    city: "Oakland",
    state: "CA",
    title: "Photographer in Oakland, CA",
    heroImage: LANDSCAPE.DSC05086,
    tagline: "Redwood groves, urban artistry, & lake views in Oakland",
    description:
      "Oakland offers rich diversity—from the towering ancient redwoods at Reinhardt Redwood Regional Park to the scenic shores of Lake Merritt and Morcom Rose Garden.",
    landmarks: [
      {
        name: "Morcom Rose Garden",
        desc: "Thousands of blooming roses, stone staircases, and romantic fountains.",
      },
      {
        name: "Reinhardt Redwood Regional Park",
        desc: "Dramatic 150-foot redwoods providing moody, ethereal light.",
      },
    ],
    gallery: [LANDSCAPE.DSC05086, SOLO_PORTRAITS.DSC07775, FAMILY.DSC01490],
    testimonial: {
      quote:
        "Glenn took our portraits in the Oakland rose garden. His experience of 20+ years really shows in every frame.",
      author: "Chloe W., Oakland",
    },
  },

  "san-jose-ca": {
    slug: "san-jose-ca",
    city: "San Jose",
    state: "CA",
    title: "Photographer in San Jose, CA",
    heroImage: SOLO_PORTRAITS.DSC01771,
    tagline: "Silicon Valley headshots, family portraits, & landmark shoots in San Jose",
    description:
      "Serving San Jose and Silicon Valley, we deliver polished professional portraits, executive headshots, and vibrant family photography throughout the South Bay.",
    landmarks: [
      {
        name: "Municipal Rose Garden",
        desc: "World-renowned rose garden with vibrant blooms and classic fountain centerpiece.",
      },
      {
        name: "Almaden Quicksilver County Park",
        desc: "Historic mining trails, rolling foothills, and quiet oak tree glades.",
      },
    ],
    gallery: [SOLO_PORTRAITS.DSC01771, ENGAGEMENT.DSC06291, FAMILY.DSC00245],
    testimonial: {
      quote:
        "I needed high-quality headshots and family photos in San Jose. Glenn delivered flawless images that I use everywhere.",
      author: "Marcus G., San Jose",
    },
  },

  "san-francisco-ca": {
    slug: "san-francisco-ca",
    city: "San Francisco",
    state: "CA",
    title: "Photographer in San Francisco, CA",
    heroImage: LANDSCAPE.DSC01729,
    tagline: "Iconic ocean bluffs, Golden Gate views, & city romance in San Francisco",
    description:
      "Capture your milestone or romance against San Francisco's world-famous landmarks—Sutro Baths, Baker Beach, Palace of Fine Arts, and Golden Gate Park.",
    landmarks: [
      {
        name: "Baker Beach & Golden Gate View",
        desc: "Dramatic waves and sand dunes framing the Golden Gate Bridge.",
      },
      {
        name: "Palace of Fine Arts",
        desc: "Grand Greco-Roman rotunda, reflection lagoon, and majestic columns.",
      },
    ],
    gallery: [LANDSCAPE.DSC01729, ENGAGEMENT.DSC02345, SOLO_PORTRAITS.DSC07775],
    testimonial: {
      quote:
        "Our sunset shoot at Baker Beach with Glenn was magical. The photos are hanging framed in our living room!",
      author: "Samantha & Tyler H., San Francisco",
    },
  },
};
