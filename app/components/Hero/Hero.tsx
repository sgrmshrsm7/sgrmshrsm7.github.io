"use client";

import { motion } from "framer-motion";

import { HERO } from "@/constants/content";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Hero.scss";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="hero-title"
        >
          {HERO.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="hero-tag"
        >
          {HERO.tagline}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="hero-company"
        >
          {HERO.company}
        </motion.h3>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="hero-location"
        >
          {HERO.location}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="hero-description"
        >
          {HERO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="hero-quote"
        >
          <p>{HERO.quote.line}</p>
          <p className="hero-quote-author">— {HERO.quote.author}</p>
        </motion.div>

        <SocialMedia />
      </div>
    </header>
  );
};

export default Hero;
