'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, UtensilsCrossed, Zap } from 'lucide-react';

const FEATURES = [
  {
    icon: UtensilsCrossed,
    title: 'Authentic core, modern finish',
    description: 'Resep Jepang yang dibuat approachable tanpa kehilangan karakter rasa.',
  },
  {
    icon: Zap,
    title: 'Fast casual, still premium',
    description: 'Cepat saat dibutuhkan, tetap rapi dan elevated saat disajikan.',
  },
  {
    icon: Heart,
    title: 'Comfort you remember',
    description: 'Setiap dish dirancang hangat, satisfying, dan bikin orang ingin balik lagi.',
  },
];

const STATS = [
  { number: '1K+', label: 'repeat customers' },
  { number: '15+', label: 'signature dishes' },
  { number: '4.9/5', label: 'guest satisfaction' },
  { number: 'Daily', label: 'fresh preparation' },
];

export default function AboutUs() {
  return (
    <section id="about" className="section-shell px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-panel-strong rounded-[2rem] p-8 sm:p-10"
        >
          <p className="gold-label text-sm font-semibold">About Atariki</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Modern Japanese comfort food dengan visual yang berani.
          </h2>
          <p className="soft-text mt-6 text-base leading-8 sm:text-lg">
            Atariki Japan dibangun untuk menghadirkan pengalaman makan yang terasa cepat,
            premium, dan tetap ramah. Kami menggabungkan teknik yang familiar, plating yang
            clean, serta identitas merah yang kuat agar brand terasa langsung dikenali.
          </p>
          <p className="soft-text mt-5 text-base leading-8 sm:text-lg">
            Dari hero sampai section bawah, nuansa visualnya kami buat satu arah: warm,
            cinematic, dan sedikit glossy supaya landing page terasa lebih hidup dan lebih
            “jadi”.
          </p>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/[0.8]">
            <Sparkles className="text-[var(--accent)]" size={18} />
            Designed to feel premium at a glance, not only after reading.
          </div>
        </motion.div>

        <div className="space-y-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel rounded-[1.75rem] p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-white/10 bg-[rgba(196,18,18,0.18)] p-3 text-[var(--accent)] shadow-[0_0_36px_rgba(196,18,18,0.22)]">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{feature.title}</h3>
                  <p className="mt-3 text-base leading-8 text-white/[0.7]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="glass-panel-strong grid grid-cols-2 gap-4 rounded-[1.8rem] p-6"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-5"
              >
                <div className="text-3xl font-black text-[#fff1e8]">{stat.number}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.22em] text-white/[0.48]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
