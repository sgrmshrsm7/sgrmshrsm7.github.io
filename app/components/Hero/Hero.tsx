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
          transition={{ duration: 0.5 }}
          className="hero-title"
        >
          {HERO.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-tag"
        >
          {HERO.tagline}
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-tag"
        >
          {HERO.company}
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-tag"
        >
          {HERO.location}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-description"
        >
          {HERO.description.split(HERO.descriptionHighlight)[0]}
          <span className="text-blue-600 font-semibold">
            {HERO.descriptionHighlight}
          </span>
          .
        </motion.p>

        <SocialMedia />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {HERO.quote}
        </motion.section>
      </div>
    </header>
  );
};

export default Hero;
