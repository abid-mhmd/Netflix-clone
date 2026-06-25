import { footerLinks } from "../../utils/footerlinks";

function Footer({fullwidth=false}) {
  return (
    <footer className={`text-gray-400 text-sm ${fullwidth?"w-full !px-14 !py-14":"footer"}`}>
      <p className="footer-contact">
        Questions? Call <a href="tel:0008009191743">000-800-919-1743</a>
      </p>

      <div className="footer-links">
        {footerLinks.map((link, index) => (
          <a key={index} href="/">
            {link}
          </a>
        ))}
      </div>

      <div className="footer-language">
        <select>
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      <p className="footer-country">Netflix India</p>

      <p className="footer-note">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </footer>
  );
}

export default Footer;
