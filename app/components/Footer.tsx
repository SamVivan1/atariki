'use client';

import { motion } from 'framer-motion';
import { Heart, Star, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="section-shell border-t border-white/[0.06] px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="glass-panel-strong rounded-[2rem] p-8 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
            <div>
              <p className="gold-label text-sm font-semibold">Atariki Japan</p>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
                Modern Japanese fast casual with a bold red signature.
              </h3>
              <p className="mt-4 max-w-md text-base leading-8 text-white/[0.68]">
                Visual hangat, rasa kuat, dan experience yang langsung terasa premium sejak
                first impression.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-black text-white">Quick Links</h4>
              <div className="mt-4 space-y-3 text-white/[0.68]">
                <a href="#menu" className="block transition hover:text-white">
                  Menu
                </a>
                <a href="#about" className="block transition hover:text-white">
                  About
                </a>
                <a href="#contact" className="block transition hover:text-white">
                  Contact
                </a>
                <a href="#social" className="block transition hover:text-white">
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-black text-white">Contact</h4>
              <div className="mt-4 space-y-4 text-white/[0.68]">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[var(--accent)]" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[var(--accent)]" />
                  <span>Jakarta Selatan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star size={16} className="text-[var(--accent)]" />
                  <span>@atarikijapan</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-black text-white">Hours</h4>
              <div className="mt-4 space-y-3 text-white/[0.68]">
                <p>Mon - Fri: 10.00 - 22.00</p>
                <p>Sat - Sun: 11.00 - 23.00</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/[0.55] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 Atariki Japan. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Crafted with</span>
              <Heart size={15} className="text-[var(--accent)]" fill="currentColor" />
              <span>for a warmer first impression.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
