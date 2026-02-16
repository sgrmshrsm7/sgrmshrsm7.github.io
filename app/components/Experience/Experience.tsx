"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { EXPERIENCE } from "@/constants/content";
import "./Experience.scss";

/**
 * Highlights multiple phrases in text by wrapping them in <strong> tags
 * @param text - The full text string
 * @param highlights - Array of phrases to highlight (bold)
 * @returns React element with highlighted phrases
 */
const highlightText = (text: string, highlights: readonly string[]) => {
  if (!highlights || highlights.length === 0) {
    return <span>{text}</span>;
  }

  // Sort highlights by length (longest first) to avoid partial matches
  const sortedHighlights = [...highlights].sort((a, b) => b.length - a.length);

  // Create a regex pattern that matches any of the highlight phrases
  const pattern = new RegExp(
    `(${sortedHighlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );

  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let match;

  // Reset regex lastIndex
  pattern.lastIndex = 0;

  while ((match = pattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Add the highlighted match
    parts.push(
      <strong
        key={`highlight-${match.index}`}
        className="experience__achievement-highlight"
      >
        {match[0]}
      </strong>,
    );

    lastIndex = pattern.lastIndex;
  }

  // Add remaining text after the last match
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <span>{parts}</span>;
};

const Experience = () => {
  return (
    <motion.section
      className="experience"
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2>Experience</h2>

      <div className="experience__timeline">
        {EXPERIENCE.map((entry, idx) => (
          <motion.article
            key={entry.company}
            className="experience__entry"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="experience__marker" />

            <div className="experience__content">
              <h3 className="experience__title">{entry.title}</h3>
              <div className="experience__company">{entry.company}</div>
              <div className="experience__meta">
                <span className="experience__meta-item">
                  <FiCalendar size={14} aria-hidden />
                  {entry.duration}
                </span>
                <span className="experience__meta-item">
                  <FiMapPin size={14} aria-hidden />
                  {entry.location}
                </span>
              </div>

              <div className="experience__achievements">
                {entry.achievements.map(({ text, highlights }, i) => (
                  <div key={i} className="experience__achievement-card">
                    {highlightText(text, highlights)}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
