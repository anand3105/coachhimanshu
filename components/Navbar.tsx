'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#plans', label: 'Plans' },
    { href: '/login', label: 'Log In' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/80 backdrop-blur-md border-b border-brand-navy-light/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-white hover:text-brand-blue transition-colors"
          >
            <Zap size={24} className="text-brand-blue" />
            <span>Coach Himanshu</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="ml-4 px-5 py-2.5 bg-brand-blue text-white rounded-lg font-semibold text-sm hover:bg-brand-blue-dark transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(23,95,255,0.3)]"
            >
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-brand-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-navy-light border-t border-brand-navy-light/20"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/dashboard"
                className="block w-full bg-brand-blue text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-brand-blue-dark transition-all duration-300 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
