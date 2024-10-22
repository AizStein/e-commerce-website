import React, { useState } from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "./Footer.css";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    shippingReturns: false,
    termsConditions: false,
    privacyPolicy: false,
  });

  const toggleMenu = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  //form
  const subscription = (e) => {
    e.preventDefault();
  };
  return (
    <footer>
      <div className="social-media">
        <FaFacebook className="social-icons" />
        <FaTwitter className="social-icons" />
        <FaGithub className="social-icons" />
        <FaLinkedin className="social-icons" />
      </div>

      <div className="links">
        <ul className="footer-lists">
          <h6>Customer Service</h6>
          <li className="footer-menu">
            <div className="header">
              <p>Shipping & Returns</p>
              <span onClick={() => toggleMenu("shippingReturns")}>
                {openSections.shippingReturns ? (
                  <HiMinusSm size={28} />
                ) : (
                  <HiPlusSm size={28} />
                )}
              </span>
            </div>
            {openSections.shippingReturns && (
              <p className="shipping-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                provident.
              </p>
            )}
          </li>
          <li className="footer-menu">
            <div className="header">
              <p>Terms & Conditions</p>
              <span onClick={() => toggleMenu("termsConditions")}>
                {openSections.termsConditions ? (
                  <HiMinusSm size={28} />
                ) : (
                  <HiPlusSm size={28} />
                )}
              </span>
            </div>
            {openSections.termsConditions && (
              <p className="shipping-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                provident.
              </p>
            )}
          </li>
          <li className="footer-menu">
            <div className="header">
              <p>Privacy Policy</p>
              <span onClick={() => toggleMenu("privacyPolicy")}>
                {openSections.privacyPolicy ? (
                  <HiMinusSm size={28} />
                ) : (
                  <HiPlusSm size={28} />
                )}
              </span>
            </div>
            {openSections.privacyPolicy && (
              <p className="shipping-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                provident.
              </p>
            )}
          </li>
        </ul>
        <div className="footer-newsletter">
          <h4>Stay Connected</h4>
          <form onSubmit={subscription}>
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
