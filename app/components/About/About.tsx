"use client";

import { motion } from "framer-motion";

import { ABOUT } from "@/constants/content";
import "./About.scss";

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2>{ABOUT.title}</h2>
      {ABOUT.paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </motion.section>
  );
};

export default About;
