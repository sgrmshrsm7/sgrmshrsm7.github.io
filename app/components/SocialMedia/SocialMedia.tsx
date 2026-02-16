import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import {
  SOCIAL_MEDIA_LINKS,
  SOCIAL_MEDIA_ICON_SIZE,
} from "@/constants/content";
import "./SocialMedia.scss";

const SOCIAL_ICONS = {
  phone: FaPhone,
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FiMail,
  instagram: FaInstagram,
  telegram: FaTelegram,
} as const;

const SocialMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="social-media"
    >
      {SOCIAL_MEDIA_LINKS.map(({ type, href }) => {
        const Element = SOCIAL_ICONS[type];
        return (
          <div key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <Element size={SOCIAL_MEDIA_ICON_SIZE} />
            </a>
          </div>
        );
      })}
    </motion.div>
  );
};

export default SocialMedia;
