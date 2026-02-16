import { FOOTER } from "@/constants/content";
import { motion } from "framer-motion";
import "./Footer.scss";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.05 }}
    >
      <div className="footer-content">
        <div className="footer-content-left">{FOOTER.copyright}</div>
      </div>
    </motion.footer>
  );
};

export default Footer;
