"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Gallery from "@/components/layouts/gallery";

const timeline = [
  {
    year: "2011",
    title: "Berdiri",
    desc: "SHO-SHA LAUNDRY didirikan dengan 1 outlet pertama.",
  },
  {
    year: "2015",
    title: "Ekspansi",
    desc: "Berkembang menjadi 5 outlet di Jakarta.",
  },
  {
    year: "2020",
    title: "12+ Outlet",
    desc: "Beroperasi di berbagai lokasi strategis.",
  },
  {
    year: "2025",
    title: "Sistem Investor",
    desc: "Meluncurkan sistem kemitraan investor autopilot.",
  },
];

const teamMembers = [
  {
    name: "Yesi Elfira",
    role: "Founder & CEO",
    desc: "Ahli operasional dan quality control dengan track record membangun belasan outlet unggulan.",
    image: "/founder/yesi.svg",
  },
];

const services = [
  {
    icon: Sparkles,
    title: "Self-Service Laundry",
    features: [
      "Mesin cuci LG 20kg premium",
      "Operasional 24 jam nonstop",
      "Sistem pembayaran QRIS TORU",
      "Mulai Rp 8.000/kg",
    ],
  },
  {
    icon: Droplets,
    title: "Drop-Off Laundry",
    features: ["Cuci, kering, lipat rapi", "Pewangi premium gratis", "Antar-jemput tersedia", "Rp 7.000/kg (min 3kg)"],
  },
  {
    icon: CreditCard,
    title: "Membership TORU",
    features: ["Top-up saldo digital", "Diskon 10–20%", "Akumulasi poin reward", "Gratis pendaftaran"],
  },
];

const trustedLogos = [
  "LG Electronics",
  "QRIS",
  "Bank BCA",
  "Grab",
  "Gojek",
  "OVO",
];

const faqItems = [
  {
    q: "Berapa modal minimum untuk berinvestasi?",
    a: "Modal investasi mulai dari Rp 150 juta untuk satu outlet laundry lengkap termasuk mesin, interior, branding, dan biaya operasional 3 bulan pertama. Kami juga menyediakan opsi cicilan melalui mitra perbankan.",
  },
  {
    q: "Apakah saya perlu mengelola outlet sendiri?",
    a: "Tidak. SHO-SHA menggunakan sistem autopilot — seluruh operasional dikelola oleh tim manajemen profesional kami. Anda sebagai investor hanya perlu memantau performa melalui dashboard real-time.",
  },
  {
    q: "Berapa estimasi ROI dan payback period?",
    a: "ROI rata-rata mencapai 65% per tahun dengan payback period sekitar 19 bulan. Angka ini berdasarkan data aktual dari outlet-outlet yang sudah beroperasi.",
  },
  {
    q: "Bagaimana sistem pembagian keuntungan?",
    a: "Keuntungan bersih dibagi sesuai perjanjian MoU. Laporan keuangan diberikan setiap bulan secara transparan melalui dashboard digital dan laporan tertulis.",
  },
  {
    q: "Apakah ada jaminan jika bisnis tidak berjalan?",
    a: "Kami memberikan garansi dukungan operasional penuh dan buyback guarantee sesuai ketentuan dalam MoU. Dengan track record 15+ tahun, kami memastikan setiap outlet dikelola untuk sukses.",
  },
  {
    q: "Di mana lokasi outlet yang tersedia?",
    a: "Kami memiliki tim riset lokasi yang menganalisis traffic, demografi, dan potensi pasar. Saat ini tersedia di area Jabodetabek dan beberapa kota besar di Indonesia. Lokasi baru terus dibuka.",
  },
  {
    q: "Apa yang membedakan SHO-SHA dari franchise laundry lain?",
    a: "Sistem full-autopilot, dashboard monitoring 24/7, tim teknisi siaga, dan track record 15+ tahun yang proven. Investor benar-benar pasif — tidak perlu terlibat operasional sama sekali.",
  },
];

const marqueeWords = [
  "AUTOPILOT",
  "PASSIVE INCOME",
  "ROI 65%",
  "15+ TAHUN",
  "TRANSPARAN",
  "PROFESIONAL",
  "24/7 MONITORING",
  "PROVEN SYSTEM",
];

/* ═══════════════════════════════════════════
   SECTION WRAPPER WITH FADE-IN
   ═══════════════════════════════════════════ */

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Marquee ─── */
function Marquee({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 gap-6 py-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export default function About() {
  const hero = {
    image: "/mesin/mesin_rdlama1.jpg",
    heroImage: "/hero/hero1.svg",
    tagline: "Tentang Kami,\nSHO-SHA.",
    subtitle: "Layanan laundry profesional dengan standar premium untuk pakaian Anda.",
  };

  /* FAQ accordion */
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = useCallback((i: number) => {
    setOpenFaq((prev) => (prev === i ? null : i));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ═══ HERO ═══ */}
      <section id="beranda" className="relative h-[80vh] min-h-[600px] w-full bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${hero.image}')` }}
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6">
          <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="whitespace-pre-line text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {hero.tagline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 mx-auto lg:mx-0 max-w-xl text-lg text-gray-300 font-normal"
              >
                {hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button size="lg" className="h-12 px-8 rounded-none bg-white text-black hover:bg-gray-200 font-semibold text-sm transition-colors border-none" asChild>
                  <a href="https://wa.me/628111774438" target="_blank" rel="noopener noreferrer">
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 rounded-none bg-transparent border border-white text-white hover:bg-white/10 font-semibold text-sm transition-colors"
                  asChild
                >
                  <a href="#tentang">
                    Pelajari Lebih Lanjut
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Right column - Hero image */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="hidden lg:block relative text-right">
              <img
                src="hero/hero2.svg"
                alt="SHO SHA Laundry Hero"
                className="w-full max-w-lg ml-auto h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TENTANG KAMI ═══ */}
      <section id="tentang" className="bg-white border-b border-gray-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Visi & Misi */}
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                Tentang Kami
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Visi Kami
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Menjadi jaringan laundry terkemuka di Indonesia dengan sistem
                autopilot yang memberikan{" "}
                <strong className="text-gray-900 font-bold">
                  passive income berkelanjutan
                </strong>{" "}
                bagi investor dan layanan terbaik bagi pelanggan.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Misi Kami
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Memberikan solusi investasi bisnis laundry yang{" "}
                <strong className="text-gray-900 font-bold">
                  menguntungkan, transparan, dan mudah dikelola
                </strong>{" "}
                dengan dukungan operasional penuh dari tim profesional kami.
              </p>
            </FadeIn>
          </div>

          {/* Timeline */}
          <div className="mt-32">
            <FadeIn className="text-center mb-16">
              <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">Jejak Langkah</p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Perjalanan Kami
              </h3>
            </FadeIn>

            <div className="grid md:grid-cols-4 gap-8">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div className="p-8 border border-gray-200 bg-gray-50 h-full flex flex-col items-start hover:border-gray-300 transition-colors">
                    <span className="inline-block bg-gray-900 px-3 py-1 font-bold text-white text-sm mb-4">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Kepemimpinan / CEO */}
          <div className="mt-32 pt-16 border-t border-gray-100">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <FadeIn className="lg:col-span-5">
                <div className="relative aspect-[4/5] bg-gray-100 border border-gray-200 overflow-hidden w-full max-w-sm mx-auto lg:mx-0">
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </FadeIn>

              <FadeIn className="lg:col-span-7 lg:pl-12" delay={0.1}>
                <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">
                  Kepemimpinan
                </p>
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Menetapkan Standar Premium
                </h3>

                <div className="w-12 h-1 bg-primary mb-8" />

                <blockquote className="text-xl md:text-2xl text-gray-600 font-light italic leading-relaxed mb-10 border-l-4 border-gray-200 pl-6">
                  "Rahasia keberhasilan kami selama 15 tahun bukan hanya pada mesin-mesin canggih, melainkan pada komitmen kualitas kontrol yang konsisten dan sistem autopilot transparan yang sangat menguntungkan di sisi mitra investor kami."
                </blockquote>

                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{teamMembers[0].name}</h4>
                  <p className="text-primary font-semibold tracking-wide uppercase text-sm mt-1">{teamMembers[0].role} SHO-SHA</p>
                  <p className="mt-4 text-sm text-gray-600 max-w-md leading-relaxed">
                    {teamMembers[0].desc}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LAYANAN ═══ */}
      <section className="px-6 py-24 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">Layanan Kami</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Solusi Laundry Lengkap dan Terpercaya</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="bg-white border border-gray-200 rounded-none p-8 hover:border-gray-300 transition-colors duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-none flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full justify-center border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-black rounded-none h-10 font-semibold" asChild>
                    <a href="https://wa.me/628111774438" target="_blank" rel="noopener noreferrer">
                      Pelajari Lebih Lanjut
                    </a>
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY — Logo Cloud ═══ */}
      <section className="border-b border-gray-100 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Dipercaya oleh partner kami
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {trustedLogos.map((logo, i) => (
                <div
                  key={logo}
                  className="px-4 py-2 font-bold text-gray-300 text-xl md:text-2xl hover:text-gray-900 transition-colors duration-300"
                >
                  {logo}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="px-6 py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl">
          <FadeIn className="text-center mb-16">
            <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="border border-gray-200 bg-white hover:border-gray-300 transition-colors">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-base font-bold text-gray-900">{item.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pt-0 text-sm leading-relaxed text-gray-600">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE STRIP ═══ */}
      <div className="border-b border-gray-200 bg-[#0a0a0a] py-6">
        <Marquee>
          {marqueeWords.map((word) => (
            <span
              key={word}
              className="flex items-center gap-8 text-sm font-bold tracking-[0.2em] text-white"
            >
              {word}
              <span className="inline-block h-2 w-2 rounded-none bg-primary" />
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
