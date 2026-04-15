'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Star, MessageCircle } from 'lucide-react';

interface IGPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
}

const INSTAGRAM_POSTS: IGPost[] = [
  {
    id: '1',
    image: '/assets/image1.jpg',
    likes: 234,
    comments: 12,
    caption: 'Beef curry yang rich, glossy, dan paling dicari di jam makan malam.',
  },
  {
    id: '2',
    image: '/assets/image2.jpg',
    likes: 456,
    comments: 34,
    caption: 'Warm tones, clean plating, dan ramen yang terasa comforting sejak first bite.',
  },
  {
    id: '3',
    image: '/assets/image3.jpg',
    likes: 178,
    comments: 8,
    caption: 'Sides yang simple tapi tetap strong secara visual dan rasa.',
  },
  {
    id: '4',
    image: '/assets/image1.jpg',
    likes: 312,
    comments: 22,
    caption: 'Red aesthetic yang dibawa sampai ke foto-foto social feed.',
  },
  {
    id: '5',
    image: '/assets/image2.jpg',
    likes: 289,
    comments: 15,
    caption: 'Brand tone hangat dan sedikit glossy bikin semuanya terasa satu dunia.',
  },
  {
    id: '6',
    image: '/assets/image3.jpg',
    likes: 145,
    comments: 6,
    caption: 'Follow untuk daily promo, visual baru, dan menu highlight lainnya.',
  },
];

export default function SocialFeed() {
  return (
    <section id="social" className="section-shell px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="gold-label text-sm font-semibold">Follow The Feed</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Instagram section yang tetap nyambung dengan visual utama.
          </h2>
          <p className="soft-text mt-5 text-base leading-8 sm:text-lg">
            Tidak lagi pink atau terpisah dari brand. Sekarang lebih gelap, hangat, dan
            tetap glow supaya story visual halaman tetap konsisten.
          </p>

          <a
            href="https://instagram.com/atarikijapan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 font-black text-[#2d160d] transition duration-300 hover:-translate-y-1 hover:brightness-105"
          >
            <Star size={18} />
            Follow @atarikijapan
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {INSTAGRAM_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="glass-panel rounded-[1.7rem] p-4"
            >
              <div className="relative aspect-[1/1] overflow-hidden rounded-[1.35rem] border border-white/10">
                <Image src={post.image} alt={post.caption} fill className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,5,5,0.08),rgba(20,5,5,0.68))]" />
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-4 text-sm font-semibold text-white">
                  <span className="flex items-center gap-2">
                    <Heart size={16} className="text-[var(--accent)]" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-[var(--accent)]" />
                    {post.comments}
                  </span>
                </div>
              </div>

              <div className="px-1 pt-5">
                <p className="text-sm uppercase tracking-[0.28em] text-white/[0.35]">@atarikijapan</p>
                <p className="mt-3 text-base leading-8 text-white/[0.72]">{post.caption}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
