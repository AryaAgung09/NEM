"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2, ChevronDown, ChevronUp, Building2 } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { dictionary } from "@/data/dictionary";
import { images } from "@/data/media";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";

type FormData = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactPage() {
  const { locale } = useLocale();
  const t = dictionary[locale].contact;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.form.validation.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.form.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.form.validation.emailInvalid;
    }

    if (!formData.subject) {
      newErrors.subject = t.form.validation.subjectRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.form.validation.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.form.validation.messageMinLength;
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/kontak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const toggleFaq = (question: string) => {
    setOpenFaq(openFaq === question ? null : question);
  };

  return (
    <main>
      <PageHero
        description={t.description}
        eyebrow={t.eyebrow}
        image={images.landscape}
        title={t.title}
      />

      <section aria-labelledby="contact-form-heading" className={styles.contactFormSection}>
        <div className={styles.contactGrid}>
          <div className={styles.contactFormWrapper}>
            <Reveal className={styles.sectionHeading}>
              <p className={styles.eyebrow}>{locale === "id" ? "Formulir Kontak" : "Contact Form"}</p>
              <h2 id="contact-form-heading">{locale === "id" ? "Kirim Pesan ke Kami" : "Send Us a Message"}</h2>
            </Reveal>

            <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    {t.form.nameLabel} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`${styles.formInput} ${errors.name ? styles.error : ""}`}
                    placeholder={t.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={status === "submitting"}
                  />
                  {errors.name && <p id="name-error" className={styles.errorMessage}>{errors.name}</p>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    {t.form.emailLabel} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`${styles.formInput} ${errors.email ? styles.error : ""}`}
                    placeholder={t.form.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    disabled={status === "submitting"}
                  />
                  {errors.email && <p id="email-error" className={styles.errorMessage}>{errors.email}</p>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.formLabel}>
                  {t.form.companyLabel}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={styles.formInput}
                  placeholder={t.form.companyPlaceholder}
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  {t.form.subjectLabel} <span aria-hidden="true">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  className={`${styles.formSelect} ${errors.subject ? styles.error : ""}`}
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  disabled={status === "submitting"}
                >
                  <option value="">{t.form.subjectPlaceholder}</option>
                  {t.form.subjectOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.subject && <p id="subject-error" className={styles.errorMessage}>{errors.subject}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  {t.form.messageLabel} <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.formTextarea} ${errors.message ? styles.error : ""}`}
                  placeholder={t.form.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  disabled={status === "submitting"}
                />
                {errors.message && <p id="message-error" className={styles.errorMessage}>{errors.message}</p>}
              </div>

              <button type="submit" className={styles.submitButton} disabled={status === "submitting"}>
                {status === "submitting" ? (
                  <>
                    <Loader2 className={styles.spinner} aria-hidden="true" />
                    {t.form.submitting}
                  </>
                ) : (
                  <>
                    <Send aria-hidden="true" size={18} />
                    {t.form.submitButton}
                  </>
                )}
              </button>

              {status === "success" && (
                <div className={styles.statusMessage} role="status" aria-live="polite">
                  <CheckCircle className={styles.successIcon} aria-hidden="true" size={24} />
                  <div>
                    <p className={styles.statusTitle}>{t.form.successTitle}</p>
                    <p className={styles.statusDesc}>{t.form.successMessage}</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className={styles.statusMessage} role="alert" aria-live="assertive">
                  <AlertCircle className={styles.errorIcon} aria-hidden="true" size={24} />
                  <div>
                    <p className={styles.statusTitle}>{t.form.errorTitle}</p>
                    <p className={styles.statusDesc}>{t.form.errorMessage}</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className={styles.contactInfoWrapper}>
            <Reveal className={styles.sectionHeading} delay={0.1}>
              <p className={styles.eyebrow}>{t.info.title}</p>
              <h2>{locale === "id" ? "Informasi Kontak" : "Contact Information"}</h2>
            </Reveal>

            <div className={styles.infoCards}>
              <Reveal className={styles.infoCard} delay={0.15} key="office">
                <div className={styles.infoCardIcon}><MapPin aria-hidden="true" size={20} /></div>
                <div className={styles.infoCardContent}>
                  <h3>{t.info.officeTitle}</h3>
                  <address className={styles.infoAddress}>{t.info.officeAddress}</address>
                </div>
              </Reveal>

              <Reveal className={styles.infoCard} delay={0.2} key="phone">
                <div className={styles.infoCardIcon}><Phone aria-hidden="true" size={20} /></div>
                <div className={styles.infoCardContent}>
                  <h3>{t.info.phoneTitle}</h3>
                  <a href={`tel:${t.info.phoneNumber.replace(/\s/g, "")}`} className={styles.infoLink}>
                    {t.info.phoneNumber}
                  </a>
                </div>
              </Reveal>

              <Reveal className={styles.infoCard} delay={0.25} key="email">
                <div className={styles.infoCardIcon}><Mail aria-hidden="true" size={20} /></div>
                <div className={styles.infoCardContent}>
                  <h3>{t.info.emailTitle}</h3>
                  <a href={`mailto:${t.info.emailAddress}`} className={styles.infoLink}>
                    {t.info.emailAddress}
                  </a>
                </div>
              </Reveal>

              <Reveal className={styles.infoCard} delay={0.3} key="hours">
                <div className={styles.infoCardIcon}><Clock aria-hidden="true" size={20} /></div>
                <div className={styles.infoCardContent}>
                  <h3>{t.info.hoursTitle}</h3>
                  <p className={styles.infoText}>{t.info.hours}</p>
                </div>
              </Reveal>
            </div>

            <Reveal className={styles.mapWrapper} delay={0.35}>
              <h3 className={styles.mapTitle}>{t.map.title}</h3>
              <div className={styles.mapContainer}>
                <iframe
                  title={t.map.placeholder}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.02123456789!2d106.827123!3d-6.208765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c8b8b8b8b8%3A0x123456789abcdef!2sJakarta!5e0!3m2!1sid!2sid!4v1234567890!5m2!1sid!2sid"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapFrame}
                  allowFullScreen
                ></iframe>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className={styles.faqSection}>
        <Reveal className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{t.faq.title}</p>
          <h2 id="faq-heading">{t.faq.title}</h2>
        </Reveal>

        <div className={styles.faqList}>
          {t.faq.items.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.05} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(item.q)}
                aria-expanded={openFaq === item.q}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{item.q}</span>
                <span className={styles.faqIcon} aria-hidden="true">
                  {openFaq === item.q ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={styles.faqAnswer}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={openFaq !== item.q}
              >
                <p>{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <Reveal>
          <Building2 aria-hidden="true" size={32} className={styles.ctaIcon} />
          <h2>{locale === "id" ? "Siap Bekerja Sama?" : "Ready to Collaborate?"}</h2>
          <p>{locale === "id" ? "Tim pengembangan bisnis kami siap mendiskusikan peluang kerja sama yang saling menguntungkan." : "Our business development team is ready to discuss mutually beneficial partnership opportunities."}</p>
          <Link href="/bisnis-kami" className={styles.ctaButton}>
            {locale === "id" ? "Lihat Bisnis Kami" : "Explore Our Businesses"}
            <ChevronDown aria-hidden="true" size={18} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}