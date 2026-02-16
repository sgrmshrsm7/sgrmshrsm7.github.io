"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/constants/content";
import "./Skills.scss";

const Skills = () => {
  return (
    <motion.section
      className="skills"
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2>{SKILLS.title}</h2>
      <p className="skills__description">{SKILLS.description}</p>

      <div className="skills__categories">
        {SKILLS.categories.map((category, idx) => (
          <motion.div
            key={category.title}
            className="skills__category-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <h3>{category.title}</h3>
            <div className="skills__tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skills__tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
