"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowLeft, ArrowRight, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FAMILY, ENGAGEMENT, SOLO_PORTRAITS, PET, LANDSCAPE, SWEET_16 } from "@/lib/images";
import styles from "./ContactForm.module.css";

const SESSION_TYPES = [
  "Family",
  "Couples",
  "Engagement",
  "Maternity",
  "Lifestyle",
  "Other",
];

const TOTAL_STEPS = 4;

const STEP_LABELS = ["About You", "Session", "Details", "Submit"];

const PREVIEW_IMAGES = [
  { url: PET.DSC01093, alt: "Dog portrait in park golden hour" },
  { url: ENGAGEMENT.DSC06296, alt: "Romantic couple sunset portrait" },
  { url: SWEET_16.DSC08296, alt: "Sweet 16 milestone portrait shoot" },
  { url: LANDSCAPE.DSC04278, alt: "Golden hour rolling hills landscape" },
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    session_type: "",
    preferred_date: "",
    preferred_location: "",
    number_of_people: "",
    vision: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const validateCurrentStep = () => {
    if (step === 1) {
      if (!formData.name.trim()) {
        setError("Please share your name.");
        return false;
      }
      if (
        !formData.email.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
      ) {
        setError("Please enter a valid email address.");
        return false;
      }
    }
    if (step === 2) {
      if (!formData.session_type) {
        setError("Please choose a session type.");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setError(null);
      setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  };

  const handleBack = () => {
    setError(null);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (err) {
      setError(
        "Something went wrong sending your inquiry. Please try again, or email me directly at glennslensphotography25@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactContainer} id="contact">
      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <img
            src={LANDSCAPE.DSC01724}
            alt="Golden hour Bay Area photography session"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroSub}>CONTACT</p>
          <h1 className={styles.heroTitle}>
            Let us create something <span className={styles.italic}>meaningful.</span>
          </h1>
          <p className={styles.heroDesc}>
            Tell me a little about you, what you are celebrating, and what you are imagining for your session.
          </p>
        </div>
      </section>

      {/* Main Form Container */}
      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          {isSubmitted ? (
            /* Success View */
            <div className={styles.successCard}>
              <div className={styles.successIconWrapper}>
                <CheckCircle2 size={40} strokeWidth={1.2} className={styles.successIcon} />
              </div>
              <h2 className={styles.successTitle}>Thank you!</h2>
              <p className={styles.successText}>
                Your story has officially landed in my inbox. I will be in touch shortly.
              </p>
              <div className={styles.successAction}>
                <Link href="/" className={styles.btnOutline}>
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            /* Interactive Multi-Step Form */
            <div>
              {/* Progress Indicator */}
              <div className={styles.progressContainer}>
                <div className={styles.stepsBar}>
                  {Array.from({ length: TOTAL_STEPS }).map((_, idx) => {
                    const stepNum = idx + 1;
                    const isCompleted = step > stepNum;
                    const isCurrent = step === stepNum;

                    return (
                      <div key={idx} className={styles.stepNode}>
                        <div
                          className={`${styles.stepCircle} ${
                            isCompleted
                              ? styles.completed
                              : isCurrent
                              ? styles.active
                              : styles.upcoming
                          }`}
                        >
                          {isCompleted ? <Check size={14} strokeWidth={2.5} /> : stepNum}
                        </div>
                        {idx < TOTAL_STEPS - 1 && (
                          <div className={styles.stepTrack}>
                            <div
                              className={styles.stepFill}
                              style={{ width: isCompleted ? "100%" : "0%" }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Step Labels */}
                <div className={styles.stepLabels}>
                  {STEP_LABELS.map((label, idx) => (
                    <span key={idx} className={step === idx + 1 ? styles.activeLabel : ""}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className={styles.formBody}>
                {/* STEP 1: ABOUT YOU */}
                {step === 1 && (
                  <div className={styles.stepBlock}>
                    <div className={styles.stepHeader}>
                      <h2 className={styles.stepTitle}>About You</h2>
                      <p className={styles.stepSubtitle}>Let us start with the basics.</p>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        Name <span className={styles.req}>*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Your full name"
                        className={styles.input}
                        autoComplete="name"
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        Email <span className={styles.req}>*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@email.com"
                        className={styles.input}
                        autoComplete="email"
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="(optional)"
                        className={styles.input}
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2: SESSION */}
                {step === 2 && (
                  <div className={styles.stepBlock}>
                    <div className={styles.stepHeader}>
                      <h2 className={styles.stepTitle}>Your Session</h2>
                      <p className={styles.stepSubtitle}>What are we celebrating?</p>
                    </div>

                    <div className={styles.sessionGrid}>
                      {SESSION_TYPES.map((type) => {
                        const isSelected = formData.session_type === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => updateField("session_type", type)}
                            className={`${styles.sessionCard} ${
                              isSelected ? styles.sessionSelected : ""
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: DETAILS */}
                {step === 3 && (
                  <div className={styles.stepBlock}>
                    <div className={styles.stepHeader}>
                      <h2 className={styles.stepTitle}>Details</h2>
                      <p className={styles.stepSubtitle}>The finer points of your session.</p>
                    </div>

                    <div className={styles.twoCol}>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Preferred Date</label>
                        <input
                          type="date"
                          value={formData.preferred_date}
                          onChange={(e) => updateField("preferred_date", e.target.value)}
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Number of People</label>
                        <input
                          type="number"
                          min={1}
                          max={50}
                          value={formData.number_of_people}
                          onChange={(e) => updateField("number_of_people", e.target.value)}
                          placeholder="(optional)"
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Preferred Location</label>
                      <input
                        type="text"
                        value={formData.preferred_location}
                        onChange={(e) => updateField("preferred_location", e.target.value)}
                        placeholder="A place you love, or ask me for ideas"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Tell Me About Your Vision</label>
                      <textarea
                        value={formData.vision}
                        onChange={(e) => updateField("vision", e.target.value)}
                        placeholder="What are you celebrating? What feeling do you want your photos to have?"
                        rows={5}
                        className={`${styles.input} ${styles.textarea}`}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 4: SUBMIT / SUMMARY */}
                {step === 4 && (
                  <div className={styles.stepBlock}>
                    <div className={styles.stepHeader}>
                      <h2 className={styles.stepTitle}>Almost there</h2>
                      <p className={styles.stepSubtitle}>Take a look and send it my way.</p>
                    </div>

                    <div className={styles.summaryCard}>
                      <div className={styles.summaryRow}>
                        <span className={styles.summaryKey}>Name</span>
                        <span className={styles.summaryVal}>{formData.name || "—"}</span>
                      </div>
                      <div className={styles.summaryRow}>
                        <span className={styles.summaryKey}>Email</span>
                        <span className={styles.summaryVal}>{formData.email || "—"}</span>
                      </div>
                      <div className={styles.summaryRow}>
                        <span className={styles.summaryKey}>Phone</span>
                        <span className={styles.summaryVal}>{formData.phone || "—"}</span>
                      </div>
                      <div className={styles.summaryRow}>
                        <span className={styles.summaryKey}>Session Type</span>
                        <span className={styles.summaryVal}>{formData.session_type || "—"}</span>
                      </div>
                      <div className={styles.summaryRow}>
                        <span className={styles.summaryKey}>Preferred Date</span>
                        <span className={styles.summaryVal}>{formData.preferred_date || "—"}</span>
                      </div>
                      <div className={styles.summaryRow}>
                        <span className={styles.summaryKey}>Location</span>
                        <span className={styles.summaryVal}>{formData.preferred_location || "—"}</span>
                      </div>
                      <div className={styles.summaryRow}>
                        <span className={styles.summaryKey}>People</span>
                        <span className={styles.summaryVal}>
                          {formData.number_of_people ? String(formData.number_of_people) : "—"}
                        </span>
                      </div>
                      <div className={styles.summaryRow}>
                        <span className={styles.summaryKey}>Vision</span>
                        <span className={styles.summaryVal}>{formData.vision || "—"}</span>
                      </div>
                    </div>

                    <p className={styles.replyNotice}>
                      I will personally reply within 24–48 hours.
                    </p>
                  </div>
                )}

                {/* Error Banner */}
                {error && (
                  <div className={styles.errorBox}>
                    <AlertCircle size={16} strokeWidth={2} className={styles.errorIcon} />
                    <span>{error}</span>
                  </div>
                )}

                {/* Form Controls */}
                <div className={styles.controlsRow}>
                  {step > 1 ? (
                    <button type="button" onClick={handleBack} className={styles.backBtn}>
                      <ArrowLeft size={16} strokeWidth={2} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < TOTAL_STEPS ? (
                    <button type="button" onClick={handleNext} className={styles.continueBtn}>
                      Continue
                      <ArrowRight size={16} strokeWidth={2} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.continueBtn}
                    >
                      {isSubmitting ? (
                        "Sending…"
                      ) : (
                        <>
                          <Send size={15} strokeWidth={1.8} />
                          Send My Inquiry
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Gallery Image Strip */}
      {!isSubmitted && (
        <section className={styles.galleryStripSection}>
          <div className={styles.galleryStripWrapper}>
            <p className={styles.galleryStripTitle}>
              Looking forward to hearing your story.
            </p>
            <div className={styles.galleryStripGrid}>
              {PREVIEW_IMAGES.map((img, idx) => (
                <div key={idx} className={styles.galleryCard}>
                  <img src={img.url} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
