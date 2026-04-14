"use client";

import { motion } from "framer-motion";
import { Gavel, ClipboardList, AlertCircle, Ban } from "lucide-react";

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

export default function TermsOfService() {
  const hero = {
    image: "/mesin/mesin_rdlama1.jpg",
    tagline: "Ketentuan Layanan.",
    subtitle: "Aturan dan panduan penggunaan layanan Sho-Sha Laundry.",
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
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
                <Gavel className="w-8 h-8" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Ketentuan Umum</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-12">
                Dengan menggunakan layanan Sho-Sha Laundry, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku. Ketentuan ini berlaku untuk seluruh pelanggan retail maupun mitra investor kami.
              </p>
            </FadeIn>

            <div className="grid gap-12 md:gap-16">
              <FadeIn delay={0.1}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-none text-primary shrink-0">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Penggunaan Layanan</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Ketentuan berikut berlaku pada semua jenis layanan kami:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Pelanggan wajib memeriksa saku dan pakaian sebelum menyerahkan cucian (kami tidak bertanggung jawab atas kehilangan benda berharga).</li>
                      <li>Kami berhak menolak cucian yang dianggap dapat merusak mesin atau membahayakan kesehatan staf.</li>
                      <li>Pembayaran dilakukan di muka atau sesuai dengan ketentuan metode pembayaran yang dipilih (QRIS, Tunai, atau Membership).</li>
                      <li>Layanan Self-Service 24 jam wajib mengikuti petunjuk penggunaan mesin yang tersedia di outlet.</li>
                    </ul>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-none text-primary shrink-0">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tanggung Jawab dan Ganti Rugi</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Kami berupaya memberikan hasil terbaik, namun kami tidak bertanggung jawab atas kerusakan yang disebabkan oleh karakteristik alami kain (luntur, menyusut, atau kancing lepas yang sudah rapuh). Klaim ganti rugi hanya berlaku jika ada bukti kelalaian operasional dari tim kami, dengan nilai maksimal sesuai kebijakan outlet yang berlaku.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-none text-primary shrink-0">
                    <Ban className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Larangan</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pengguna dilarang menyalahgunakan fasilitas outlet, merusak properti Sho-Sha Laundry, atau melakukan tindakan yang mengganggu kenyamanan pelanggan lain. Kami berhak membatalkan akses layanan bagi siapa saja yang melanggar ketentuan ini.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} className="border-t border-gray-100 pt-12 mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hukum yang Berlaku</h3>
                <p className="text-gray-600 leading-relaxed">
                  Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia. Setiap perselisihan yang timbul akan diselesaikan secara musyawarah mufakat terlebih dahulu.
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
