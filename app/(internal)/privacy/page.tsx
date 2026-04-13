"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Lock, Eye } from "lucide-react";
import SEO from "@/components/seo";

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

export default function PrivacyPolicy() {
  const hero = {
    image: "/mesin/mesin_rdlama1.jpg",
    tagline: "Kebijakan Privasi.",
    subtitle: "Komitmen kami dalam melindungi data dan informasi pribadi Anda.",
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEO 
        title="Kebijakan Privasi" 
        description="Pelajari bagaimana Sho-Sha Laundry mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda." 
      />

      {/* ═══ HERO ═══ */}
      <section className="relative h-[40vh] min-h-[300px] w-full bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${hero.image}')` }}
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6">
          <div className="mx-auto max-w-7xl w-full text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              {hero.tagline}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-xl text-lg text-gray-300 font-normal"
            >
              {hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8 text-primary">
                <ShieldCheck className="w-8 h-8" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Pendahuluan</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-12">
                Di Sho-Sha Laundry, kami sangat menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda menggunakan layanan kami, baik melalui outlet fisik maupun platform digital kami.
              </p>
            </FadeIn>

            <div className="grid gap-12 md:gap-16">
              <FadeIn delay={0.1}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-none text-primary shrink-0">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Informasi yang Kami Kumpulkan</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela, termasuk namun tidak terbatas pada:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Nama lengkap dan informasi kontak (nomor telepon, alamat email).</li>
                      <li>Alamat pengantaran untuk layanan drop-off atau antar-jemput.</li>
                      <li>Informasi transaksi dan riwayat penggunaan layanan.</li>
                      <li>Data identitas untuk keperluan kemitraan investor.</li>
                    </ul>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-none text-primary shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Penggunaan Informasi</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Informasi yang kami kumpulkan digunakan untuk:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Menyediakan dan meningkatkan layanan laundry kami.</li>
                      <li>Mengelola akun membership TORU Anda.</li>
                      <li>Memproses transaksi pembayaran secara aman.</li>
                      <li>Mengirimkan informasi terkait promo atau perubahan layanan (dengan persetujuan Anda).</li>
                      <li>Keperluan administratif dan operasional bisnis.</li>
                    </ul>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-none text-primary shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Keamanan Data</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Kami menerapkan langkah-lang|ah keamanan teknis dan organisasional yang ketat untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Namun, perlu diingat bahwa tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 100% aman.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} className="border-t border-gray-100 pt-12 mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini. Kami menyarankan Anda untuk meninjau halaman ini secara berkala untuk mengetahui pembaruan terbaru.
                </p>
                <p className="mt-8 text-sm text-gray-400">
                  Terakhir diperbarui: 13 April 2026
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
