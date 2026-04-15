import Image from 'next/image';
import AboutUs from './components/AboutUs';
import FeaturedMenu from './components/FeaturedMenu';
import Footer from './components/Footer';
import LocationContact from './components/LocationContact';
import SocialFeed from './components/SocialFeed';

const HERO_HIGHLIGHTS = [
  { value: '4.9', label: 'rating from regulars' },
  { value: '15 min', label: 'average order ready' },
  { value: '100%', label: 'bold Japanese comfort' },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section
        id="home"
        className="section-shell section-glow section-glow-left relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/image1.jpg"
            alt="Atariki Japan signature dish"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,6,5,0.9)_0%,rgba(18,6,5,0.76)_40%,rgba(18,6,5,0.58)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,18,18,0.38),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(196,18,18,0.22),transparent_32%)]" />
          <div className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(23,7,7,0.82),rgba(23,7,7,0))]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="glass-panel inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold text-white/[0.9]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(240,180,106,0.9)]" />
              Modern Japanese fast casual with a red-hot identity
            </div>

            <div className="mt-6 mb-6 flex items-center gap-4">
              {/* <div className="glass-panel rounded-2xl p-3"> */}
                <Image src="/assets/logo.png" alt="Atariki Japan logo" width={54} height={54} />
              {/* </div> */}
              <p className="gold-label text-xs font-semibold sm:text-sm">Atariki Japan</p>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]">
              限りない喜び
            </h1>
            <p className="mt-4 text-xl font-semibold text-white/[0.9] sm:text-2xl lg:text-3xl">
              Endless joy, plated with heat, comfort, and unmistakable character.
            </p>
            <p className="soft-text mt-6 max-w-2xl text-base leading-8 sm:text-lg">
              Atariki Japan menghadirkan curry, ramen, dan comfort food Jepang dengan
              visual premium, rasa kuat, dan pengalaman yang terasa hangat sejak first
              scroll.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#menu"
                className="hero-shadow rounded-2xl bg-[var(--accent)] px-7 py-4 text-center text-base font-black text-[#2a140b] transition duration-300 hover:-translate-y-1 hover:brightness-105"
              >
                View Menu
              </a>
              <a
                href="#contact"
                className="glass-panel rounded-2xl px-7 py-4 text-center text-base font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
              >
                Reserve / Order Now
              </a>
            </div>
          </div>

          <div className="glass-panel-strong hero-shadow rounded-[2rem] p-5 sm:p-6">
            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#2a0e0e]/70 p-6">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(240,180,106,0.28),transparent_65%)] blur-xl" />
                <p className="gold-label text-xs font-semibold">Signature Highlight</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Beef Curry
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/[0.72] sm:text-base">
                  Kuah curry tebal, beef yang tender, dan plating yang dibuat standout
                  dengan glow hangat khas Atariki.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {HERO_HIGHLIGHTS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <div className="text-2xl font-black text-[var(--accent)]">
                        {item.value}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-white/[0.7]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/[0.5]">
          Scroll
        </div>
      </section>

      <FeaturedMenu />
      <AboutUs />
      <LocationContact />
      <SocialFeed />
      <Footer />
    </div>
  );
}
