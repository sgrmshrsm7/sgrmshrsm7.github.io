"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { EDUCATION } from "@/constants/content";
import "./Education.scss";

const Education = () => {
  return (
    <motion.section
      className="education"
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2>Education</h2>

      <div className="education__cards">
        {EDUCATION.map((entry, idx) => (
          <motion.article
            key={`${entry.institution}-${idx}`}
            className="education__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="education__content">
              <h3 className="education__institution">{entry.institution}</h3>
              <div className="education__degree">{entry.degree}</div>
              {entry.branch && (
                <div className="education__branch">{entry.branch}</div>
              )}
              <div className="education__meta">
                <span className="education__meta-item">
                  <FiCalendar size={14} aria-hidden />
                  {entry.duration}
                </span>
                <span className="education__meta-item">
                  <FiMapPin size={14} aria-hidden />
                  {entry.location}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
