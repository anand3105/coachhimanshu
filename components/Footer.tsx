'use client';

import { Instagram, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-navy-light/20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Coach Himanshu
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Certified Fitness Expert with 5+ years of experience in
              transforming lives through personalized training and nutrition.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
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
                  href="/dashboard"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-brand-blue" />
                <span>coach@himanshu.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-brand-blue" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-blue transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-blue transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-navy-light/20 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Coach Himanshu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
