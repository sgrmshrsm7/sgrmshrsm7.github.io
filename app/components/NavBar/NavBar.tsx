"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      if (next) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      /* ignore */
    }
  };

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
            onClick={(e) => {
              handleClick(e, link.href);
              setMenuOpen(false);
            }}
          >
            {link.name}
          </a>
        ))}
        <button
          type="button"
          aria-label="Toggle theme"
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </motion.div>

      {/* Mobile menu toggle button (visible via CSS on small screens) - kept outside .nav-links so it's not hidden */}
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="mobile-toggle"
        onClick={() => setMenuOpen((s) => !s)}
      >
        {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.25 }}
          className="mobile-menu"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="mobile-menu-inner"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-link"
                onClick={(e) => {
                  handleClick(e, link.href);
                  setMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              aria-label="Toggle theme"
              className="mobile-theme-toggle"
              onClick={toggleTheme}
            >
              {isDark ? (
                <>
                  <FiSun size={18} />
                  <span>Light mode</span>
                </>
              ) : (
                <>
                  <FiMoon size={18} />
                  <span>Dark mode</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
