# Atariki Japan Website

## Deskripsi Proyek

Atariki Japan adalah proyek website landing page modern untuk restoran Jepang bernama "Atariki Japan". Website ini dirancang untuk mencerminkan identitas merek dengan estetika merah tebal (#C41212), memberikan pengalaman pengguna yang premium namun mudah diakses. Fokus utama adalah pada konversi tinggi melalui desain responsif dan interaktif.

Website ini dibangun menggunakan Next.js dengan App Router, Tailwind CSS untuk styling, dan Framer Motion untuk animasi. Font yang digunakan adalah Inter dan Montserrat dikombinasikan dengan Noto Sans JP untuk elemen Jepang.

## Fitur Utama

- **Hero Section**: Slider gambar/video pendek berkualitas tinggi dengan headline "限りない喜び - Endless Joy" dan tombol "View Menu".
- **Featured Menu**: Grid kartu menu unggulan dengan harga dan deskripsi singkat.
- **About Us**: Narasi tentang konsep Atariki Japan sebagai restoran fast casual Jepang modern.
- **Location & Contact**: Integrasi Google Maps, jam operasional, dan link WhatsApp untuk reservasi/pemesanan.
- **Social Feed**: Grid foto dari Instagram @atarikijapan.
- **Responsive Design**: Mobile-first dengan optimasi performa (LCP hijau).
- **Interactive Menu**: Filter kategori menu tanpa reload halaman.

## Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS, Framer Motion
- **Icons**: Lucide React, FontAwesome
- **Font**: Inter, Montserrat, Noto Sans JP
- **Color Palette**:
  - Primary: #C41212 (Bold Red)
  - Secondary: #FFFFFF (White), #1A1A1A (Deep Black)
  - Accents: Golden Yellow untuk CTA
- **Styling**: Grunge/textured overlay, tipografi tebal, drop shadow halus pada foto makanan

## Struktur Folder

```
atariki/
├── app/
│   ├── components/
│   │   ├── AboutUs.tsx
│   │   ├── FeaturedMenu.tsx
│   │   ├── Footer.tsx
│   │   ├── LocationContact.tsx
│   │   ├── Nav.tsx
│   │   └── SocialFeed.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── assets/
├── AGENTS.md
├── CLAUDE.md
├── DELIVERY_CHECKLIST.md
├── IMPLEMENTATION_SUMMARY.md
├── PROJECT_COMPLETE.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Instalasi dan Setup

### Prasyarat

- Node.js versi 18 atau lebih tinggi
- npm, yarn, pnpm, atau bun

### Langkah Instalasi

1. Clone repository ini:
   ```bash
   git clone <repository-url>
   cd atariki
   ```

2. Install dependencies:
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

## Penggunaan

### Development

- Edit file di `app/` directory. Halaman akan auto-reload saat Anda menyimpan perubahan.
- Komponen terletak di `app/components/`.
- Styling menggunakan Tailwind CSS di file `.tsx`.

### Build Production

```bash
npm run build
npm start
```

### Testing

Jalankan test (jika ada):
```bash
npm run test
```

### Linting

Periksa kode dengan ESLint:
```bash
npm run lint
```

## Deployment

### Menggunakan Docker

1. Build image:
   ```bash
   docker build -t atariki-japan .
   ```

2. Jalankan container:
   ```bash
   docker run -p 3000:3000 atariki-japan
   ```

### Menggunakan Docker Compose

1. Jalankan dengan docker-compose:
   ```bash
   docker-compose up -d
   ```

Website akan tersedia di `http://localhost:3000`.

### Deploy ke Server

- Pastikan server memiliki Docker dan Docker Compose terinstall.
- Upload file `Dockerfile` dan `docker-compose.yml` ke server.
- Jalankan `docker-compose up -d` untuk deploy.

## Optimasi Performa

- Gambar dioptimasi ke format WebP.
- Lazy loading untuk gambar dan komponen.
- Code splitting otomatis oleh Next.js.
- CDN untuk assets statis (opsional).

## Kontribusi

1. Fork repository.
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`).
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`).
4. Push ke branch (`git push origin feature/AmazingFeature`).
5. Buat Pull Request.

## Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.

## Kontak

Untuk pertanyaan atau dukungan, hubungi tim development atau lihat bagian Location & Contact di website.

---

Dibangun dengan ❤️ menggunakan Next.js
