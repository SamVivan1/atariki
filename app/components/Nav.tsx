'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
  { href: '#social', label: 'Follow' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto max-w-7xl rounded-[1.75rem] border transition-all duration-300 ${
          isScrolled
            ? 'border-white/[0.12] bg-[rgba(30,8,8,0.88)] shadow-[0_18px_60px_rgba(0,0,0,0.38),0_0_40px_rgba(196,18,18,0.14)] backdrop-blur-xl'
            : 'border-white/[0.08] bg-[linear-gradient(180deg,rgba(57,15,15,0.7),rgba(31,9,9,0.4))] shadow-[0_10px_36px_rgba(0,0,0,0.18)] backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            {/* <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-2"> */}
              <Image
                src="/assets/logo.png"
                alt="Atariki Japan Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
            {/* </div> */}
            <div>
              <div className="text-sm font-black uppercase tracking-[0.28em] text-white">
                Atariki
              </div>
              <div className="text-xs tracking-[0.24em] text-[var(--accent)]">Japan</div>
            </div>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/[0.78] transition duration-300 hover:bg-white/[0.08] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-black text-[#2b150d] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
            >
              Reserve
            </a>
          </div>

          <button
            type="button"
            className="rounded-full border border-white/10 bg-white/[0.06] p-2 text-white md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
            <div className="glass-panel rounded-[1.5rem] p-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/[0.78] transition duration-300 hover:bg-white/[0.08] hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 block rounded-xl bg-[var(--accent)] px-4 py-3 text-center text-sm font-black text-[#2b150d]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reserve
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
