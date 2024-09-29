import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <FaFacebook className="social-icons" />
        <FaTwitter className="social-icons" />
        <FaGithub className="social-icons" />
        <FaLinkedin className="social-icons" />
      </div>

      <div className="links">
        <h4>Customer Service</h4>
        <ul>
          <li>
            <a href="/shipping">Shipping & Returns</a>
          </li>
          <li>
            <a href="/terms">Terms & Conditions</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
        <div className="footer-newsletter">
          <h4>Stay Connected</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <p className="p-footer">© 2024 AizTrend. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
