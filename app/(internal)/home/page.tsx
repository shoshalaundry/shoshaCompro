"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Droplets,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Instagram,
  MessageCircle,
  CreditCard,
  Facebook,
  TrendingUp,
  Calendar,
  Wrench,
  Users,
  Headphones,
  BarChart3,
  Shield,
  Zap,
  Building2,
  Star,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Gallery from "@/components/layouts/gallery";

/* ═══════════════════════════════════════════
   DATA ARRAYS
   ═══════════════════════════════════════════ */

const heroSlides = [
  {
    image: "/mesin/mesin_rdlama1.jpg",
    tagline: "Bersih Sempurna,\nSetiap Helai.",
    subtitle: "Layanan laundry profesional dengan standar premium untuk pakaian Anda.",
  },
  {
    image: "/mesin/mesin_rdlama1.jpg",
    tagline: "Mitra Bisnis\nTerpercaya.",
    subtitle: "Bergabunglah dengan jaringan franchise laundry yang terus berkembang di Indonesia. Didukung sistem, tim profesional, dan peluang keuntungan berkelanjutan.",
  },
  {
    image: "/mesin/mesin_rdlama1.jpg",
    tagline: "Teknologi Modern,\nHasil Maksimal.",
    subtitle: "Bangun bisnis laundry autopilot dengan passive income berkelanjutan. Tim kami mengelola segalanya — Anda cukup memantau profit.",
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

const investmentCards = [
  {
    icon: TrendingUp,
    title: "ROI hingga 65%",
    desc: "Return on Investment hingga 65% per tahun dari modal investasi Anda.",
  },
  {
    icon: Calendar,
    title: "Payback 19 Bulan",
    desc: "Payback period cepat hanya dalam 19 bulan untuk balik modal penuh.",
  },
  {
    icon: Wrench,
    title: "Support Teknis Mandiri",
    desc: "Tim teknisi berpengalaman siap menangani seluruh kebutuhan teknis.",
  },
  {
    icon: Users,
    title: "Manajemen Profesional",
    desc: "Pengelolaan operasional oleh tim manajemen yang terlatih dan berdedikasi.",
  },
  {
    icon: Headphones,
    title: "Tim Teknisi 24 Jam",
    desc: "Layanan darurat dan pemeliharaan rutin tersedia 24 jam nonstop.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Real-Time",
    desc: "Pantau performa bisnis kapan saja dari mana saja melalui dashboard digital.",
  },
];

const mitraPackages = [
  {
    name: "Silver",
    modal: 15_000_000,
    pelanggan: 30,
    harga: 7_000,
    features: ["1 mesin cuci 8kg", "1 mesin pengering", "Perlengkapan dasar", "Training 3 hari", "Branding outlet"],
  },
  {
    name: "Gold",
    modal: 30_000_000,
    pelanggan: 60,
    harga: 7_000,
    features: [
      "2 mesin cuci 12kg",
      "2 mesin pengering",
      "Perlengkapan lengkap",
      "Training 7 hari",
      "Branding outlet premium",
      "Sistem POS digital",
      "Support marketing 3 bulan",
    ],
  },
  {
    name: "Platinum",
    modal: 60_000_000,
    pelanggan: 120,
    harga: 7_000,
    features: [
      "4 mesin cuci 15kg",
      "3 mesin pengering",
      "Full perlengkapan + AC",
      "Training 14 hari",
      "Full branding + interior",
      "Sistem POS + CRM",
      "Support marketing 6 bulan",
      "Konsultasi bisnis 1 tahun",
    ],
  },
];

const testimonials = [
  {
    name: "Dewi Kartika",
    role: "Pelanggan",
    text: "Saya sudah mencuci di SHO-SHA hampir 3 tahun dan selalu puas dengan hasilnya.",
    img: "/assets/user.png",
  },
  {
    name: "Rina Sari",
    role: "Pelanggan",
    text: "Laundry di SHO-SHA benar-benar beda. Pakaian selalu bersih, wangi, dan cepat selesai.",
    img: "/assets/user.png",
  },
  {
    name: "Budi Rizwan",
    role: "Pelanggan",
    text: "Bergabung dengan SHO-SHA adalah keputusan terbaik saya.",
    img: "/assets/user.png",
  },
];

/* ═══════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════ */

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 40, stiffness: 120 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, motionVal, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = prefix + Math.round(v).toLocaleString("id-ID") + suffix;
    });
    return unsub;
  }, [spring, suffix, prefix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

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

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ═══ HERO ═══ */}
      <section className="relative w-full h-[100dvh] bg-[#0a0a0a] overflow-hidden" id="beranda">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroSlides[currentSlide].image}')` }}
            />
            {/* Professional dark overlay for contrast */}
            <div className="absolute inset-0 bg-[#0a0a0a]/80" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white whitespace-pre-line leading-tight">
                {heroSlides[currentSlide].tagline}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <Button size="lg" className="h-12 px-8 rounded-none bg-white text-black hover:bg-gray-200 font-semibold text-sm transition-colors border-none" asChild>
                  <a href="https://wa.me/628111774438" target="_blank" rel="noopener noreferrer">
                    Konsultasi Sekarang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-none bg-transparent border border-white text-white hover:bg-white/10 font-semibold text-sm transition-colors" asChild>
                  <a href="#kemitraan">
                    Pelajari Kemitraan
                  </a>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Simple Slide indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setCurrentSlide(i)}
                className={`w-10 h-1 rounded-none transition-all duration-300 ${i === currentSlide ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TENTANG KAMI ═══ */}
      <section className="px-6 py-24 bg-white border-b border-gray-100" id="tentang">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-6">
                <p className="font-semibold text-primary uppercase tracking-wider text-sm">Tentang SHO-SHA</p>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Lebih dari sekadar layanan laundry biasa.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  SHO-SHA LAUNDRY didirikan pada tahun 2011 dengan misi sederhana: memberikan layanan laundry terbaik dengan harga kompetitif. Kami menggabungkan proses profesional dengan layanan pelanggan yang prima.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100 mt-6">
                  <div>
                    <p className="text-4xl font-bold text-gray-900 mb-1"><AnimatedNumber value={15} suffix="+" /></p>
                    <p className="text-sm font-medium text-gray-500">Tahun Pengalaman</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-gray-900 mb-1"><AnimatedNumber value={2000} suffix="+" /></p>
                    <p className="text-sm font-medium text-gray-500">Pelanggan Aktif</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-gray-900 mb-1"><AnimatedNumber value={13} suffix="+" /></p>
                    <p className="text-sm font-medium text-gray-500">Outlet Mitra</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-gray-900 mb-1"><AnimatedNumber value={98} suffix="%" /></p>
                    <p className="text-sm font-medium text-gray-500">Tingkat Kepuasan</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="aspect-2/3 relative">
                <Image fill src="/hero/hero3.svg" alt="SHO SHA Laundry" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ LAYANAN ═══ */}
      <section className="px-6 py-24 bg-gray-50 border-b border-gray-100" id="layanan">
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

      {/* ═══ KEUNGGULAN INVESTASI ═══ */}
      <section className="px-6 py-24 bg-white border-b border-gray-100" id="keunggulan">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">Peluang Bisnis</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Mengapa Memilih Kemitraan SHO-SHA?</h2>
            <p className="text-lg text-gray-600">Investasi bisnis laundry dengan sistem autopilot. Resiko minimal dengan dukungan sistem operasional yang telah teruji.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.05}>
                <div className="p-6 border border-gray-100 rounded-none hover:border-gray-300 transition-colors bg-gray-50/50">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-none flex items-center justify-center mb-4 text-gray-700">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PAKET MITRA ═══ */}
      <section className="px-6 py-24 bg-[#0a0a0a]" id="kemitraan">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">Paket Investasi</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mulai Perjalanan Bisnis Anda</h2>
            <p className="text-lg text-gray-400">Pilih paket kemitraan yang sesuai dengan skala bisnis yang Anda inginkan. Kami menyediakan pendampingan secara penuh.</p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {mitraPackages.map((pkg, i) => {
              const isPopular = i === 1;
              return (
                <FadeIn key={pkg.name} delay={i * 0.1}>
                  <div className={`relative flex flex-col p-8 rounded-none border ${isPopular ? "bg-[#161616] border-primary" : "bg-[#111111] border-gray-800"}`}>
                    {isPopular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-none uppercase tracking-wider">
                        Paling Diminati
                      </div>
                    )}
                    <div className="text-center mb-8 border-b border-gray-800 pb-8">
                      <h3 className="text-xl font-medium text-white mb-4">{pkg.name}</h3>
                      <div className="flex items-end justify-center gap-1 mb-2">
                        <span className="text-gray-400 font-medium">Rp</span>
                        <span className="text-5xl font-bold text-white">{(pkg.modal / 1_000_000).toFixed(0)}</span>
                        <span className="text-gray-400 font-medium">Juta</span>
                      </div>
                      <p className="text-sm text-gray-500">Estimasi {pkg.pelanggan} pelanggan/hari</p>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                      {pkg.features.map(f => (
                        <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 ${isPopular ? "text-primary" : "text-gray-500"}`} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className={`w-full h-12 rounded-none font-semibold ${isPopular ? "bg-primary text-white hover:bg-primary/90" : "bg-white/10 text-white hover:bg-white/20"}`} asChild>
                      <a href="https://wa.me/628111774438" target="_blank" rel="noopener noreferrer">
                        Pilih Paket {pkg.name}
                      </a>
                    </Button>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="px-6 py-24 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">Ulasan Pelanggan</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kata Mereka Tentang Kami</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-none border border-gray-200">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 relative">
                      <Image fill src={t.img} alt={t.name} className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* ═══ CTA SECTION ═══ */}
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="bg-[#111111] rounded-none p-10 md:p-16 text-center text-white border border-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Memulai Bisnis Laundry Autopilot?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Konsultasikan rencana investasi Anda dengan tim profesional kami segera.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="h-12 px-8 rounded-none bg-white text-black hover:bg-gray-200 font-semibold" asChild>
                  <a href="https://wa.me/628111774438" target="_blank" rel="noopener noreferrer">
                    Hubungi Kami Sekarang
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}