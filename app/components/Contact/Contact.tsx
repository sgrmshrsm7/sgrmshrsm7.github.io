"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  CONTACT_INFO,
  CONTACT_SOCIAL_LINKS,
  CONTACT_SECTION,
} from "@/constants/content";
import "./Contact.scss";

const CONTACT_ICONS = {
  email: FiMail,
  phone: FiPhone,
  location: FiMapPin,
} as const;

const CONTACT_SOCIAL_ICONS = {
  resume: HiOutlineDocumentText,
  linkedin: FaLinkedin,
  email: FiMail,
} as const;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>
      <div className="contact__inner">
        <motion.div
          className="contact__left"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <h3 className="contact__heading">{CONTACT_SECTION.heading}</h3>
          <p className="contact__description">{CONTACT_SECTION.description}</p>
          <div className="contact__details">
            {CONTACT_INFO.map(({ type, value, href }) => {
              const Icon = CONTACT_ICONS[type];
              return (
                <div key={value} className="contact__detail-row">
                  {href ? (
                    <a href={href} className="contact__detail-link">
                      <Icon className="contact__detail-icon" size={20} />
                      <span>{value}</span>
                    </a>
                  ) : (
                    <>
                      <Icon className="contact__detail-icon" size={20} />
                      <span>{value}</span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="contact__social">
            {CONTACT_SOCIAL_LINKS.map(({ type, href, label }) => {
              const Icon = CONTACT_SOCIAL_ICONS[type];
              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="contact__social-link"
                  aria-label={label}
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="contact__field">
            <label htmlFor="contact-name">
              {CONTACT_SECTION.form.nameLabel}
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder={CONTACT_SECTION.form.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-email">
              {CONTACT_SECTION.form.emailLabel}
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder={CONTACT_SECTION.form.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-message">
              {CONTACT_SECTION.form.messageLabel}
            </label>
            <textarea
              id="contact-message"
              placeholder={CONTACT_SECTION.form.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
          </div>
          <button type="submit" className="contact__submit">
            {CONTACT_SECTION.form.submitText}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
