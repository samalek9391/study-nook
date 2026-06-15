"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Study Nook
            </h2>
            <p className="mt-3 text-sm">
              Find and book quiet, comfortable study rooms with ease.
              Study smarter in the perfect environment.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="footer-title">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/rooms"
                  className="hover:text-primary transition"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="footer-title">Contact</h3>

            <p>Email: support@studynook.com</p>
            <p>Phone: +880 1234-567890</p>

            <div className="flex gap-4 mt-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-base-300 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Study Nook. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;