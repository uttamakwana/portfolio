import "./footer.css";
// importing footer logos
import {
  GithubLogo,
  LinkedinLogo,
  // InstagramLogo,
  // MailLogo,
} from "../../constants/icons.js";
import { InstagramLogo, MailLogo } from "../../constants/images.js";

const Footer = () => {
  return (
    <footer className="footer bg-primary flex-center">
      {/* <div className="line bg-secondary  pos-center"></div> */}
      <section className="footer-links-container flex gap-2">
        <a
          className="footer-link flex-center"
          href="https://github.com/uttamakwana"
          target="_blank"
        >
          <GithubLogo className="footer-link-icon clr-secondary" />
        </a>
        <a
          className="footer-link flex-center"
          href="https://linkedin.com/in/uttamakwana"
          target="_blank"
        >
          <LinkedinLogo className="footer-link-icon clr-linkedin" />
        </a>
        <a
          className="footer-link flex-center"
          href="https://instagram.com/uttamakwana"
          target="_blank"
        >
          {/* <InstagramLogo className="footer-link-icon clr-instagram" /> */}
          <img
            src={InstagramLogo}
            className="footer-link-icon"
            alt="instagram"
          />
        </a>
        <a
          className="footer-link flex-center"
          href="mailto:uttamakwana4503@gmail.com"
          target="_blank"
        >
          {/* <MailLogo className="footer-link-icon clr-gmail" /> */}
          <img src={MailLogo} className="footer-link-icon gmail-icon" alt="gmail" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
