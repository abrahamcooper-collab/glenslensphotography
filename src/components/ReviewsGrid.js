import styles from "./ReviewsGrid.module.css";

const GMB_LINK =
  "https://www.google.com/maps/place/Glenns+lens+photography/@37.6800051,-122.0888935,10z/data=!3m1!4b1!4m6!3m5!1s0x23d39b3e706b8803:0x8cc87db98dcf937!8m2!3d37.6800051!4d-122.0888935!16s%2Fg%2F11zbdms_k0?hl=en&entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D";

const GOOGLE_REVIEWS = [
  {
    author: "mine lovely",
    time: "21 hours ago",
    tag: "Family Photoshoot",
    quote:
      "5 stars isn't enough! @Glennlense did our family photo shoot and we couldn't be happier. Thank you for capturing my beautiful family so perfectly. You were so gracious about adjusting the schedule and you really took the time to make sure the pictures came out exactly how we envisioned them. Patient, professional, and so talented. We will treasure these photos forever. Highly, highly recommend! Naboo❤️",
  },
  {
    author: "Paul San Sebastian",
    time: "a month ago",
    tag: "Great Price",
    quote:
      "Glen is such a talent. He accommodated our dates and location for we had to change it a lot. He is so easy to work with. We are so grateful with the results",
  },
  {
    author: "Priscila Nuñez",
    time: "a month ago",
    tag: "Couples & Pets",
    quote:
      "Ive worked with Glenn for multiple photography projects. Every project has been delightful! He is very thorough in designing and planning every theme, which I appreciate because it’s very fun getting into a creative process with your photographer. Ive done couple and friendship photo shoots and my fur babies also enjoyed their session with him! It was important to me that my fur babies also felt comfortable to be in front of the camera and Glenn gained their trust immediately. We have some great photos worthy of printing and having in our home! Working with Glenn checked off all my boxes: Creative, Patient, Professional, Great Communication and Skillset. We are so thankful!",
  },
  {
    author: "Grover Espiritu",
    time: "a month ago",
    tag: "Professional & Stress-Free",
    quote:
      "We had an amazing experience with our photographer! From the very beginning, he was friendly, professional, and a pleasure to work with. He always responded to our emails and text messages promptly, answered every question we had, and was incredibly accommodating to our needs. He made the entire experience stress-free and enjoyable, and we truly appreciated his patience and professionalism. We are so grateful we chose him to capture our special memories. I highly recommend him to anyone looking for an outstanding photographer. We will definitely hire him again for future events. Thank you for everything!",
  },
  {
    author: "Taylor",
    time: "a month ago",
    tag: "Top Notch Service",
    quote:
      "Top notch! Great service. Great price. Got way more for my money than expected. Glenn's Lens Photography is number one. Everyone calls it GLP-1 for short. Okay they don't... but it's gonna catch on. Thanks again, Glenn!",
  },
];

export default function ReviewsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <p className={styles.label}>REAL GOOGLE REVIEWS</p>
        <h2 className={styles.heading}>
          What clients say about <em>Glenns Lens.</em>
        </h2>

        {/* Google Badge Header */}
        <div className={styles.googleBadge}>
          <svg className={styles.googleIcon} viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span className={styles.badgeText}>5.0 Star Rating on Google Reviews</span>
        </div>

        {/* 5 Real Reviews Grid */}
        <div className={styles.grid}>
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.time}>{rev.time}</span>
              </div>
              <blockquote className={styles.quote}>"{rev.quote}"</blockquote>
              <div className={styles.attribution}>
                <p className={styles.author}>{rev.author}</p>
                <p className={styles.tag}>{rev.tag}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to GMB */}
        <div className={styles.gmbWrap}>
          <a
            href={GMB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gmbLink}
          >
            Read All Reviews on Google Business Profile →
          </a>
        </div>
      </div>
    </section>
  );
}
