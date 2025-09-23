import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ECB49C] text-[#BB4D00] pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h2 className="text-4xl mb-10 font-bold italic">
              EliteBandhan.Com
            </h2>
            <p className="text-[#BB4D00]/90 mb-3 font-semibold italic text-md">
              At <strong>EliteBandhan.Com</strong>, matchmaking is more than a
              service, it’s our passion. We find joy in uniting souls and take
              pride in every successful bond we help create.
            </p>
            <p className="text-[#BB4D00]/90 mb-3 font-semibold italic text-md">
              With a personalized approach and sincere effort, we make partner
              search easier and more meaningful. Every relationship we build is
              rooted in trust, respect, and a perfect balance of tradition and
              modern values.
            </p>
            <p className="font-semibold text-[#BB4D00]  italic text-lg">
              Your happiness is our true success.
            </p>

            {/* Contact Info */}
            <div className="mt-4">
              <h3 className="font-semibold mb-1  italic text-lg">
                Reach Out to Us
              </h3>
              <p className="text-[#BB4D00]/80">
                <span className="font-semibold italic text-lg">
                  For Users: Care@elitebandhan.com | +91 9315812799
                </span>
              </p>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h2 className="text-4xl mb-10 font-bold italic">Quick Links</h2>
            <ul className="space-y-2 text-[#BB4D00]/90 font-semibold italic text-lg">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.elitebandhan.com/about-us.php"
                  className="hover:underline"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.elitebandhan.com/blog.php"
                  className="hover:underline"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Social Links */}
          <div>
            <h2 className="text-4xl mb-10 font-bold italic">
              Our Social Links
            </h2>
            <div className="flex space-x-4 text-[#BB4D00] text-xl ">
              <Link
                to="https://www.facebook.com/people/EliteBandhancom/61555794033045/?sk=about"
                className="hover:text-gray-800"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Felitebandhan-com%2Fabout%2F%3FviewAsMember%3Dtrue"
                className="hover:text-gray-800"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://www.instagram.com/elitebandhan.com_delhi/"
                className="hover:text-gray-800"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-t border-white/30" />

        {/* Copyright */}
        <div className="text-center text-sm text-[#BB4D00]/80 pb-6">
          EliteBandhan.Com ©2025 . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
