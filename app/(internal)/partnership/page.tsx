"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Droplets,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Building2,
  Clock,
  Download,
  FileText,
  Headphones,
  Handshake,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
  TrendingUp,
  Users,
  Wrench,
  Zap,
  Eye,
  BarChart3,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

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

const investorJourney = [
  {
    step: "01",
    icon: FileText,
    title: "Konsultasi & Proposal",
    desc: "Diskusi kebutuhan investasi dan terima proposal lengkap dengan proyeksi ROI.",
  },
  {
    step: "02",
    icon: Handshake,
    title: "Tanda Tangan MoU",
    desc: "Sepakati perjanjian kerja sama dan lakukan pembayaran investasi.",
  },
  {
    step: "03",
    icon: Building2,
    title: "Setup Outlet",
    desc: "Tim kami siapkan outlet lengkap: mesin, interior, branding, dan rekrutmen staff.",
  },
  {
    step: "04",
    icon: LineChart,
    title: "Monitoring & Profit",
    desc: "Outlet beroperasi autopilot. Pantau profit via dashboard dan terima dividen bulanan.",
  },
];

const investmentPackages = [
  { id: "Standard", investment: "150.000.000", profit: "6.500.000", payback: "18-24 Bulan", features: ["5 Mesin Cuci", "Standard Interior", "Basic Marketing"] },
  { id: "Premium", investment: "250.000.000", profit: "12.000.000", payback: "21 Bulan", features: ["8 Mesin Cuci", "Premium Interior", "Advanced Marketing", "Recruitment Support"] },
  { id: "Ultimate", investment: "450.000.000", profit: "25.000.000", payback: "19 Bulan", features: ["12 Mesin Cuci", "Luxury Interior", "Full Marketing Agency", "VIP Support"] },
];

const investmentHighlights = [
  { icon: TrendingUp, title: "ROI hingga 65%", desc: "Return on Investment yang sangat kompetitif di industri laundry." },
  { icon: Calendar, title: "Payback 19 Bulan", desc: "Proyeksi balik modal yang terukur dan relatif cepat." },
  { icon: Zap, title: "Sistem Autopilot", desc: "Operasional ditangani 100% oleh manajemen profesional kami." },
  { icon: Eye, title: "Transparansi 24/7", desc: "Pantau omzet dan profit real-time via dashboard digital." },
  { icon: Wrench, title: "Maintenance Siaga", desc: "Tim teknisi internal siap sedia menjaga operasional mesin." },
  { icon: Headphones, title: "Support Marketing", desc: "Dukungan promosi berkelanjutan untuk menjaga traffic outlet." },
];

const investorTestimonials = [
  {
    name: "Hendra Wijaya",
    role: "Investor sejak 2021",
    text: "ROI 60% di tahun pertama. Saya tidak perlu turun tangan sama sekali — tim SHO-SHA mengelola semuanya dengan sangat profesional.",
    rating: 5,
  },
  {
    name: "Sari Indrawati",
    role: "Investor sejak 2022",
    text: "Dashboard real-time-nya luar biasa transparan. Saya bisa pantau omzet harian dari HP. Balik modal dalam 17 bulan!",
    rating: 5,
  },
  {
    name: "Bambang Sutrisno",
    role: "Investor sejak 2020",
    text: "Sudah punya 3 outlet SHO-SHA. Passive income yang konsisten setiap bulan. Sistem autopilot-nya benar-benar works.",
    rating: 5,
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

export default function Partnership() {
  const hero = {
    image: "/mesin/mesin_rdlama1.jpg",
    heroImage: "/hero/hero2.svg",
    tagline: "Mitra Bisnis\nSHO-SHA.",
    subtitle: "Bergabunglah dengan jaringan franchise laundry yang terus berkembang di Indonesia. Didukung sistem, tim profesional, dan peluang keuntungan berkelanjutan.",
  };

  const [activePackage, setActivePackage] = useState("Standard");
  const activePkg = useMemo(() => investmentPackages.find(p => p.id === activePackage) || investmentPackages[0], [activePackage]);

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
                  <a href="#mitra">
                    Lihat Paket Kemitraan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 rounded-none bg-transparent border border-white text-white hover:bg-white/10 font-semibold text-sm transition-colors"
                  asChild
                >
                  <a href="#roi">
                    Simulasi ROI
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Right column - Hero image */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="hidden lg:block relative text-right">
              <img
                src={hero.heroImage}
                alt="SHO SHA Laundry Hero"
                className="w-full max-w-lg ml-auto h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ KINERJA KAMI (STATISTIK) ═══ */}
      <section className="border-b border-gray-100 bg-[#111111] py-16">
         <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800">
               {[
                  { value: 65, suffix: "%", label: "ROI / Tahun" },
                  { value: 19, suffix: " Bln", label: "Payback Period" },
                  { value: 12, suffix: "+", label: "Outlet Aktif" },
                  { value: 15, suffix: "+", label: "Tahun Pengalaman" },
               ].map((s, idx) => (
                  <FadeIn key={s.label} delay={idx * 0.1} className="text-center px-4">
                     <p className="text-4xl md:text-5xl font-bold tabular-nums text-primary mb-2">
                        <AnimatedNumber value={s.value} suffix={s.suffix} />
                     </p>
                     <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase">{s.label}</p>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* ═══ KEUNGGULAN INVESTASI ═══ */}
      <section className="px-6 py-24 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Keunggulan</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Mengapa Memilih Kemitraan SHO-SHA Laundry?
            </h2>
            <p className="mt-6 text-lg text-gray-600">Investasi laundry autopilot dengan keuntungan maksimal dan risiko minimal. Dikelola profesional, dipantau transparan setiap saat.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="h-full rounded-none border border-gray-200 bg-white p-8 transition-colors hover:border-gray-300">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-none bg-primary/10 text-primary">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LAYANAN — Paket Mitra ═══ */}
      <section id="mitra" className="px-6 py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Paket Mitra</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Pilihan Skema Investasi</h2>
            <p className="mt-6 text-lg text-gray-600">Mulai bisnis laundry autopilot bersama SHO-SHA. Skema bisnis teruji yang sepenuhnya dikelola oleh tim kami untuk Anda.</p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 mt-16 max-w-5xl mx-auto">
            {mitraPackages.map((pkg, i) => {
              const isPopular = i === 1;
              return (
                <FadeIn key={pkg.name} delay={i * 0.1}>
                  <div className={`relative flex flex-col p-8 md:p-10 rounded-none border h-full ${isPopular ? "bg-gray-900 border-gray-900" : "bg-white border-gray-200 hover:border-gray-300"}`}>
                    {isPopular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-none uppercase tracking-wider">
                        Paling Cepat Balik Modal
                      </div>
                    )}

                    <div className="mb-8">
                      <h3 className={`text-xl font-bold ${isPopular ? "text-white" : "text-gray-900"}`}>{pkg.name} Paket</h3>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className={`text-base font-medium ${isPopular ? "text-gray-400" : "text-gray-500"}`}>Rp</span>
                        <span className={`text-4xl md:text-5xl font-extrabold tabular-nums ${isPopular ? "text-white" : "text-gray-900"}`}>
                           {(pkg.modal / 1_000_000).toFixed(0)}
                        </span>
                        <span className={`text-base font-medium ${isPopular ? "text-gray-400" : "text-gray-500"}`}>Juta</span>
                      </div>
                      <p className={`mt-2 text-sm font-medium ${isPopular ? "text-primary" : "text-gray-500"}`}>Est. {pkg.pelanggan} pelanggan / hari</p>
                    </div>

                    <div className={`h-px w-full mb-8 ${isPopular ? "bg-gray-800" : "bg-gray-100"}`} />

                    <ul className="flex-1 space-y-4 mb-8">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 className={`h-5 w-5 shrink-0 ${isPopular ? "text-primary" : "text-gray-400"}`} />
                          <span className={`text-sm ${isPopular ? "text-gray-300" : "text-gray-600"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className={`w-full h-12 rounded-none font-semibold ${isPopular ? "bg-primary text-white hover:bg-primary/90" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`} variant="ghost" asChild>
                      <a href="https://wa.me/628111774438" target="_blank" rel="noopener noreferrer">
                        Dapatkan Penawaran
                      </a>
                    </Button>
                  </div>
                </FadeIn>
               );
            })}
          </div>
        </div>
      </section>
      
      {/* ═══ CARA KERJA ═══ */}
      <section className="px-6 py-24 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">Cara Kerja</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Proses Cepat dan Transparan</h2>
            <p className="mt-6 text-lg text-gray-600">
              Menjadi mitra SHO-SHA sangat mudah. Anda hanya menyediakan tempat dan investasi, sisanya kami yang bekerja untuk Anda.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-4 mt-16">
            {investorJourney.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="bg-white border border-gray-200 rounded-none p-8 h-full flex flex-col hover:border-gray-300 transition-colors">
                  <span className="text-6xl font-black text-gray-100 mb-4">{step.step}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 flex-1 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ROI CALCULATOR / SIMULASI ═══ */}
      <section id="roi" className="px-6 py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:items-center">
            <FadeIn>
              <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">Potensi Keuntungan</p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Simulasi Return on Investment
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed mb-10">
                Laporan keuangan yang 100% transparan dan dapat dipantau dari genggaman. Nikmati dividen bulanan dari kinerja outlet Anda tanpa repot memikirkan operasional.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {investmentHighlights.slice(0, 4).map((h) => (
                  <div key={h.title}>
                    <div className="flex items-center gap-3 mb-2">
                       <h.icon className="h-5 w-5 text-primary" />
                       <h4 className="font-bold text-gray-900 text-sm">{h.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed pl-8">{h.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border border-gray-200 bg-gray-50 rounded-none p-8 md:p-12 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kalkulator Potensi Mitra</h3>
                <p className="text-sm text-gray-600 mb-10">Pilih skala investasi dan lihat estimasi kembaliannya dengan kondisi operasional optimal.</p>

                <div className="space-y-8">
                  <div className="flex bg-white border border-gray-200 rounded-none p-1">
                    {investmentPackages.map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => setActivePackage(pkg.id)}
                        className={`flex-1 rounded-none py-3 text-sm font-bold transition-all ${activePackage === pkg.id ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-50"}`}
                      >
                        {pkg.id}
                      </button>
                    ))}
                  </div>

                  <div className="border border-gray-200 bg-white p-6 space-y-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-semibold uppercase tracking-wider">Estimasi Modal</span>
                      <motion.span
                        key={activePackage + "inv"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-bold text-gray-900 text-base"
                      >
                        Rp {activePkg.investment}
                      </motion.span>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-semibold uppercase tracking-wider">Potensi Profit / Bln</span>
                      <motion.span
                        key={activePackage + "prof"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-bold text-primary text-xl"
                      >
                        Rp {activePkg.profit}
                      </motion.span>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-semibold uppercase tracking-wider">Target Payback</span>
                      <motion.span
                        key={activePackage + "pay"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-bold text-gray-900 text-base"
                      >
                        {activePkg.payback}
                      </motion.span>
                    </div>
                  </div>

                  <Button className="w-full h-14 rounded-none font-bold text-base" asChild>
                    <a href="https://wa.me/628111774438" target="_blank" rel="noopener noreferrer">
                      Diskusikan Penawaran Menarik Kami
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* ═══ TESTIMONIALS ═══ */}
      <section className="px-6 py-24 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">Kepercayaan Institusi</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Validasi Hasil Nyata</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {investorTestimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-gray-200 p-8 h-full rounded-none">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                  <div className="mt-auto border-t border-gray-100 pt-6">
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* ═══ KONTAK & FORM ═══ */}
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeIn>
              <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">Langkah Selanjutnya</p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Mari Diskusikan Proyeksi Bisnis Anda
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Tim ekspansi bisnis kami siap membantu Anda melakukan analisa kelayakan lokasi, simulasi finansial, dan seluruh persiapan teknis pembangunan outlet laundry autopilot impian Anda.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Telepon Kemitraan", value: "+62 811-1774-438" },
                  { icon: Mail, label: "Email Pertanyaan", value: "yesielfira687@gmail.com" },
                  { icon: Building2, label: "Kantor Pusat", value: "Jl. Pahlawan No.34, Kebon Jeruk, Kota Jakarta Barat, DKI Jakarta 11560" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="mt-1 bg-gray-100 p-3 rounded-none text-gray-900">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">{item.label}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-gray-50 border border-gray-200 p-8 md:p-12 rounded-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tinggalkan Pesan</h3>
                <p className="text-gray-600 text-sm mb-8">Tim kami akan menghubungi Anda maksimal dalam waktu 1x24 jam.</p>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="name">Nama Lengkap</label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-none border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="phone">No. WhatsApp</label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full rounded-none border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="email">Alamat Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-none border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="message">Rencana Investasi Khusus</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full resize-none rounded-none border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                    />
                  </div>
                  <Button className="w-full h-12 rounded-none font-bold" size="lg">
                    Tanya via WhatsApp
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
