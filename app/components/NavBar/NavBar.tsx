"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { NAV_LINKS } from "@/constants/content";
import "./NavBar.scss";

const NavBar = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // window.history.pushState(null, "", href);
    }
  };

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const dark = saved === "dark";
      setIsDark(dark);
      if (dark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <nav className="navbar">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="nav-links"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav-link"
            onClick={(e) => handleClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <button
          type="button"
          aria-label="Toggle theme"
          className="theme-toggle"
          onClick={() => {
            const next = !isDark;
            setIsDark(next);
            try {
              if (next) document.documentElement.classList.add("dark");
              else document.documentElement.classList.remove("dark");
              localStorage.setItem("theme", next ? "dark" : "light");
            } catch (e) {
              /* ignore */
            }
          }}
        >
          {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </motion.div>
    </nav>
  );
};

export default NavBar;
