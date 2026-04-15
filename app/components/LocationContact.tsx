'use client';

import { motion } from 'framer-motion';
import { Clock3, MapPin, MessageCircleMore, PhoneCall } from 'lucide-react';

const CONTACT_CARDS = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['123 Japanese Boulevard', 'Jakarta Selatan, Indonesia 12345'],
  },
  {
    icon: Clock3,
    title: 'Opening Hours',
    lines: ['Monday - Friday: 10.00 - 22.00', 'Saturday - Sunday: 11.00 - 23.00'],
  },
  {
    icon: PhoneCall,
    title: 'Contact',
    lines: ['+62 812-3456-7890', 'hello@atarikijapan.com'],
  },
];

export default function LocationContact() {
  return (
    <section id="contact" className="section-shell px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="gold-label text-sm font-semibold">Visit & Contact</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Mudah ditemukan, mudah dihubungi, dan tetap terlihat premium.
          </h2>
          <p className="soft-text mt-5 text-base leading-8 sm:text-lg">
            Contact section dibuat tetap gelap dan glossy agar CTA order tidak terasa seperti
            pindah ke halaman lain.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            {CONTACT_CARDS.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-panel rounded-[1.65rem] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[rgba(196,18,18,0.18)] p-3 text-[var(--accent)] shadow-[0_0_36px_rgba(196,18,18,0.2)]">
                    <card.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{card.title}</h3>
                    <div className="mt-3 space-y-1 text-base leading-8 text-white/[0.7]">
                      {card.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <a
                href="https://wa.me/message/your_whatsapp_link"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[var(--accent)] px-6 py-4 text-center font-black text-[#2b150d] transition duration-300 hover:-translate-y-1 hover:brightness-105"
              >
                WhatsApp Order
              </a>
              <a
                href="tel:+6281234567890"
                className="glass-panel rounded-2xl px-6 py-4 text-center font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
              >
                Call Us
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="glass-panel-strong rounded-[2rem] p-4"
          >
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,180,106,0.12),transparent_35%)]" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521671411256!2d106.79589761476749!3d-6.200000295678158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b5d%3A0x100c00ff4de47290!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                className="min-h-[420px] grayscale-[0.1] sepia-[0.08] contrast-[1.02]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/[0.78]">
              <MessageCircleMore className="text-[var(--accent)]" size={18} />
              Reservasi dan order diarahkan ke WhatsApp untuk flow yang lebih cepat.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
