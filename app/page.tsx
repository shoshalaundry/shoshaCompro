'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OUTLETS_DATA } from '@/lib/constants';

const outletsData = OUTLETS_DATA;

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white overflow-x-hidden font-sans">
      {/* Clean Background Image with solid overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/mesin/mesin_rdlama1.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/90" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center pt-24 pb-20 px-6 max-w-7xl mx-auto">

        {/* Social floating side - Fixed on large screens */}
        <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-5 items-center">
          {[
            { icon: Instagram, href: "https://instagram.com/shoshalaundryofficial" },
            { icon: Facebook, href: "https://facebook.com/shoshalaundry" },
            { icon: MessageCircle, href: "https://wa.me/628111774438" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-200"
            >
              <social.icon size={20} strokeWidth={1.5} />
            </a>
          ))}
          <div className="w-px h-16 bg-gray-800 mt-2" />
        </div>

        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center mb-24 max-w-3xl mt-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/assets/logo.svg"
              alt="SHO SHA Logo"
              className="w-60 h-auto rounded-2xl p-4 shadow-sm mb-10 mx-auto"
            />

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
              Ciptakan Standar <br /> <span className="text-primary">Baru Laundry</span>
            </h1>

            <p className="text-lg text-gray-300 font-normal max-w-xl mx-auto leading-relaxed mb-10">
              Layanan laundry premium dan profesional yang mengutamakan kualitas, kebersihan, dan kenyamanan pelanggan untuk mendukung gaya hidup modern.
            </p>

            <div className="flex justify-center">
              <Button
                onClick={() => router.push('/home')}
                className="h-12 px-8 rounded-md text-sm font-semibold bg-white text-black hover:bg-gray-200 transition-colors shadow-none"
              >
                Mulai Eksplorasi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </section>

        {/* OUTLETS SELECTION */}
        <section className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-8 text-center sm:text-left sm:flex sm:items-end justify-between border-b border-gray-800 pb-4">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-1">Pilih Cabang Terdekat</h2>
                <p className="text-sm text-gray-400">Pilih outlet kami untuk melihat layanan lengkap dan jadwal operasional.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              {outletsData.map((outlet) => (
                <button
                  key={outlet.name}
                  onClick={() => router.push(outlet.path)}
                  className="group flex flex-col p-5 rounded-xl bg-[#111111] border border-[#222222] transition-colors duration-200 hover:border-gray-500 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-gray-900 border border-[#333333]">
                      <img
                        src={outlet.icon || "/mesin/mesin_rdlama2.jpg"}
                        alt={`Outlet ${outlet.name}`}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium text-base text-gray-100 mb-1">{outlet.name}</h3>
                      <p className="text-xs text-gray-500 line-clamp-1">{outlet.address}</p>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors duration-200">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-20 flex justify-center">
              <p className="text-xs text-gray-600 font-medium">
                &copy; {new Date().getFullYear()} SHO-SHA Laundry. All rights reserved.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}