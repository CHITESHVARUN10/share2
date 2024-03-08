import { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./FooterStyles.css";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <footer className="footer">
      <h1>Stay Connected</h1>
      <div className="social-icons">
        <a href="https://www.instagram.com">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="https://www.facebook.com">
          <FaFacebook className="icon facebook" />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter className="icon twitter" />
        </a>
        <a href="https://www.linkedin.com">
          <FaLinkedin className="icon linkedin" />
        </a>
      </div>
      <div className="newsletter">
        <h2>Sign up for our newsletter </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Type your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">Submit</button>
        </form>
        <hr className="divider" />
        <div className="copyright">
          <p id="copy"> &copy; 2023 PawfectMatch.All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
