'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, ShoppingCart } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  category: 'curry' | 'ramen' | 'sides' | 'drinks';
  price: number;
  description: string;
  detail: string;
  image: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Beef Curry',
    category: 'curry',
    price: 58000,
    description: 'Slow-braised beef dengan curry kental yang rich dan comforting.',
    detail: 'Best seller',
    image: '/assets/image1.jpg',
  },
  {
    id: '2',
    name: 'Chicken Katsu Curry',
    category: 'curry',
    price: 52000,
    description: 'Chicken katsu crispy, rice hangat, dan sauce curry yang bold.',
    detail: 'Crunchy finish',
    image: '/assets/image2.jpg',
  },
  {
    id: '3',
    name: 'Tonkotsu Ramen',
    category: 'ramen',
    price: 56000,
    description: 'Broth creamy dengan aroma garlic oil dan chashu yang juicy.',
    detail: 'Umami depth',
    image: '/assets/image3.jpg',
  },
  {
    id: '4',
    name: 'Miso Ramen',
    category: 'ramen',
    price: 54000,
    description: 'Savory miso broth dengan tekstur hangat yang lebih earthy.',
    detail: 'Savory bowl',
    image: '/assets/image2.jpg',
  },
  {
    id: '5',
    name: 'Karaage',
    category: 'sides',
    price: 32000,
    description: 'Potongan ayam juicy dengan coating renyah dan seasoning gurih.',
    detail: 'Perfect side',
    image: '/assets/image3.jpg',
  },
  {
    id: '6',
    name: 'Gyoza',
    category: 'sides',
    price: 30000,
    description: 'Pan-fried dumplings dengan filling lembut dan base crispy.',
    detail: '6 pieces',
    image: '/assets/image1.jpg',
  },
  {
    id: '7',
    name: 'Yuzu Spark',
    category: 'drinks',
    price: 22000,
    description: 'Sparkling citrus drink untuk pairing dengan hidangan yang rich.',
    detail: 'Fresh & bright',
    image: '/assets/image2.jpg',
  },
  {
    id: '8',
    name: 'Matcha Milk',
    category: 'drinks',
    price: 26000,
    description: 'Creamy matcha dengan sweetness ringan dan finish clean.',
    detail: 'Smooth energy',
    image: '/assets/image3.jpg',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Menu' },
  { id: 'curry', label: 'Curry' },
  { id: 'ramen', label: 'Ramen' },
  { id: 'sides', label: 'Sides' },
  { id: 'drinks', label: 'Drinks' },
] as const;

const formatPrice = (price: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);

export default function FeaturedMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems =
    selectedCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="section-shell section-glow section-glow-right px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="gold-label text-sm font-semibold">Menu Pilihan</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Visual hangat, plating clean, dan karakter rasa yang tetap kuat.
          </h2>
          <p className="soft-text mt-5 text-base leading-8 sm:text-lg">
            Section menu kini disatukan dengan nuansa hero: dark red atmosphere, glass
            panel, glow halus, dan cards yang terasa premium saat pertama kali terlihat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[var(--accent)] text-[#2d160d] shadow-[0_0_30px_rgba(240,180,106,0.28)]'
                  : 'glass-panel text-white/[0.72] hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="glass-panel-strong rounded-[1.8rem] p-5"
            >
              <div className="rounded-[1.45rem] border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-4">
                <div className="relative h-64 overflow-hidden rounded-[1.3rem] border border-white/[0.08]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,9,9,0.14),rgba(36,9,9,0.72))]" />
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="gold-label text-[11px] font-semibold">{item.detail}</p>
                      <h3 className="mt-2 text-3xl font-black tracking-tight text-white">
                        {item.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/20 p-2 text-white/[0.7]">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>

                <div className="px-1 pb-1 pt-6">
                  <p className="text-sm font-semibold text-[var(--accent)]">
                    {item.category.toUpperCase()}
                  </p>
                  <p className="mt-4 min-h-20 text-base leading-8 text-white/[0.72]">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-white/[0.35]">Price</p>
                      <p className="mt-2 text-3xl font-black tracking-tight text-[#fff3ea]">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="rounded-2xl bg-[var(--accent)] px-5 py-4 font-black text-[#2d160d] transition duration-300 hover:-translate-y-1 hover:brightness-105"
                    >
                      <span className="flex items-center gap-2">
                        <ShoppingCart size={18} />
                        Pesan
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
