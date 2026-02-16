import { FOOTER } from "@/constants/content";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-left">{FOOTER.copyright}</div>
      </div>
    </footer>
  );
};

export default Footer;
