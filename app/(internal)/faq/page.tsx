"use client";

import { useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  ChevronDown,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";

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
      initial={{ opacity: 0, y: 15 }}
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

export default function Faq() {
  const hero = {
    image: "/mesin/mesin_rdlama1.jpg",
    heroImage: "/hero/hero3.svg",
    tagline: "Pertanyaan Umum.",
    subtitle: "Temukan jawaban cepat seputar investasi laundry autopilot bersama kami.",
  };

  /* FAQ accordion */
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = useCallback((i: number) => {
    setOpenFaq((prev) => (prev === i ? null : i));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEO title="FAQ" description="Pertanyaan yang sering ditanyakan seputar layanan dan kemitraan Sho-Sha Laundry." />

      {/* ═══ HERO ═══ */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${hero.image}')` }}
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6">
          <div className="mx-auto max-w-7xl w-full text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="whitespace-pre-line text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
              >
                {hero.tagline}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mx-auto lg:mx-0 max-w-xl text-lg text-gray-300 font-normal"
              >
                {hero.subtitle}
              </motion.p>
            </div>
            
            {/* Optional right content if needed, keeping it empty for balance */}
            <div className="hidden lg:block text-right">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
                 <MessageCircle className="w-32 h-32 ml-auto text-white/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ LIST ═══ */}
      <section className="px-6 py-24 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="text-center mb-16">
            <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Pertanyaan & Jawaban
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="border border-gray-200 bg-white hover:border-gray-300 transition-colors">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="flex w-full items-center justify-between gap-4 p-6 sm:p-8 text-left"
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
                        <p className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 text-sm leading-relaxed text-gray-600">
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

      {/* ═══ CTA SECTION ═══ */}
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="bg-[#111111] rounded-none p-10 md:p-16 text-center text-white border border-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Masih Punya Pertanyaan Lain?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Tim profesional kami siap membantu menjawab spesifik terkait investasi maupun manajemen operasional outlet impian Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="h-12 px-8 rounded-none bg-primary text-white hover:bg-primary/90 font-semibold" asChild>
                  <a href="https://wa.me/628111774438" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Tanya via WhatsApp
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 rounded-none bg-transparent border border-gray-600 text-white hover:bg-white/10 font-semibold"
                  asChild
                >
                  <a href="https://wa.me/628111774438" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-4 w-4" />
                    Jadwalkan Konsultasi
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
