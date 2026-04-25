// src/components/Footer.jsx

import { Clock, LocationEdit, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-left">
          <h2>
            If you have any questions
            <br />
            Please Call.
          </h2>
        </div>
        <div className="cta-decor" aria-hidden="true">
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
            <circle
              cx="60"
              cy="55"
              r="28"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M60 27 Q90 10 105 45"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="60" cy="18" r="6" fill="rgba(255,255,255,0.25)" />
          </svg>
        </div>
        <div className="cta-right">
          <div className="phone-circle">
            <Phone />
          </div>
          <span className="phone-num">+91 98765 43210</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              Cata<span>log</span>
            </div>
            <p className="footer-desc">
              Don't miss out on the latest updates, exclusive offers, and
              insider news. Join our community and get everything.
            </p>
            <div className="subscribe-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4 className="footer-col-title">Contact & Legal</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookies Policy</a>
              </li>
              <li>
                <a href="#">Disclaimer</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone />
                </div>
                <div>
                  <div className="contact-label">Call Us Now</div>
                  <div className="contact-val">+91 98765 43210</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail />
                </div>
                <div>
                  <div className="contact-label">Send Us Email</div>
                  <div className="contact-val">catalog@gmail.com</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <LocationEdit />
                </div>
                <div>
                  <div className="contact-label">Our Location</div>
                  <div className="contact-val">Jaipur, Rajasthan</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Clock />
                </div>
                <div>
                  <div className="contact-label">Working Hours</div>
                  <div className="contact-val">Mon–Fri: 9 AM – 6 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span>© 2025 All Rights Reserved by Catalog</span>
        <div className="social-row">
          <span>Follow Us On:</span>
          {["f", "𝕏", "in", "Be", "▶"].map((s, i) => (
            <a key={i} href="#" className="social-icon">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
