"use client";
import { motion } from "framer-motion";
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
      </motion.div>
    </nav>
  );
};

export default NavBar;
