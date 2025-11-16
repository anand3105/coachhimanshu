'use client';

import { Instagram, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-navy-light/20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Coach Himanshu
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              NASM Certified Bodybuilding Coach & Fitness Educator with 6+ professional diplomas.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Making fitness guidance <span className="text-brand-gold font-semibold">affordable</span>, <span className="text-brand-gold font-semibold">accessible</span>, and <span className="text-brand-gold font-semibold">science-backed</span>—because money should never be an excuse to stay unfit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#plans"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Subscription Plans
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/assessment"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Fitness Assessment
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="/cancellation-policy"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="/disclaimer"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@coachhimanshu.com"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-brand-blue transition-colors cursor-pointer"
              >
                <Mail size={18} className="text-brand-blue" />
                <span>info@coachhimanshu.com</span>
              </a>
              <a
                href="tel:+917303484648"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-brand-blue transition-colors cursor-pointer"
              >
                <Phone size={18} className="text-brand-blue" />
                <span>+91 7303484648</span>
              </a>
              <div className="pt-2">
                <p className="text-gray-400 text-xs mb-3">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/coach.himanshu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/@CoachHimanshuKataria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-navy-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2025 Coach Himanshu. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a href="/privacy-policy" className="hover:text-brand-blue transition-colors">
                Privacy
              </a>
              <span>•</span>
              <a href="/terms-of-service" className="hover:text-brand-blue transition-colors">
                Terms
              </a>
              <span>•</span>
              <a href="/refund-policy" className="hover:text-brand-blue transition-colors">
                Refund
              </a>
              <span>•</span>
              <a href="/contact" className="hover:text-brand-blue transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
