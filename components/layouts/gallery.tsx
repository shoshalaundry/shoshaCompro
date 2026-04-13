"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react"

interface GalleryProps {
  variant?: "gradient" | "default"
  className?: string
}

const images = [
  { src: "/outlets/rd_lama.jpg", alt: "Outlet modern SHO SHA", span: "row-span-2" },
  { src: "/mesin/mesin_rdlama2.jpg", alt: "Mesin cuci industri" },
  { src: "/outlets/madrasah.jpg", alt: "Tim profesional", span: "md:col-span-2" },
  { src: "/gallery/galeri2.jpg", alt: "Hasil cucian rapi", span: "col-span-2 md:col-span-1"},
  { src: "/gallery/galeri1.jpg", alt: "Quality control pakaian", span: "md:row-span-2" },
  { src: "/mesin/mesin_pahlawan2.jpg", alt: "Area packing premium", span: "row-span-2 md:row-span-1"},
  { src: "/mesin/mesin_ciledug1.jpg", alt: "Interior outlet bersih", span: "md:col-span-2" },
  { src: "/gallery/galeri5.jpg", alt: "Pelayanan terbaik", span: "col-span-2 md:col-span-1"}
]

export default function Gallery({
  variant = "gradient",
  className = ""
}: GalleryProps) {

  const [index, setIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(false)

  const open = useCallback((i:number) => {
    setIndex(i)
    setZoom(false)
  }, [])

  const close = useCallback(() => {
    setIndex(null)
    setZoom(false)
  }, [])

  const next = useCallback(() => {
    setIndex((prevIndex) => {
      if (prevIndex === null) return null
      return (prevIndex + 1) % images.length
    })
    setZoom(false)
  }, [])

  const prev = useCallback(() => {
    setIndex((prevIndex) => {
      if (prevIndex === null) return null
      return (prevIndex - 1 + images.length) % images.length
    })
    setZoom(false)
  }, [])

  const toggleZoom = useCallback(() => setZoom((z) => !z), [])

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (index === null) return

      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }

    window.addEventListener("keydown", handle)
    return () => window.removeEventListener("keydown", handle)
  }, [index, close, next, prev])

  const backgroundClass =
    variant === "gradient"
      ? "bg-gray-50 border-y border-gray-100"
      : ""

  return (
    <section className={`px-6 py-28 ${backgroundClass} ${className}`} id="gallery">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-16">

          <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">
            Galeri
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Lebih Dekat dengan Kami
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Melihat lebih dekat tentang fasilitas, outlet modern, dan standar profesional pada layanan laundry kami.
          </p>

        </div>

        {/* GRID */}

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-2 lg:gap-4">

          {images.map((img, i) => (

            <div
              key={i}
              onClick={() => open(i)}
              className={`group relative cursor-pointer overflow-hidden rounded-none bg-gray-200 border border-gray-100/50 ${img.span ?? ""}`}
            >

              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* hover overlay */}

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 md:p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm md:text-base font-semibold text-white tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>

        {index !== null && (

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >

            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              onClick={close}
            />

            {/* COUNTER */}

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 text-white/50 px-4 py-2 text-sm font-medium tracking-widest uppercase">
              {index + 1} / {images.length}
            </div>

            {/* CLOSE */}

            <button
              onClick={close}
              className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors"
              title="Tutup (Esc)"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            {/* PREV */}

            <button
              onClick={prev}
              className="absolute left-2 md:left-6 z-50 text-white/50 hover:text-white bg-white/5 p-4 rounded-none hover:bg-white/10 transition backdrop-blur-md"
              title="Gambar Sebelumnya (Bilah kiri)"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            {/* IMAGE */}

            <motion.div
              key={images[index].src}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full max-w-[1200px] flex items-center justify-center"
            >

              <motion.div
                animate={{ scale: zoom ? 1.5 : 1 }}
                transition={{ type: "spring", bounce: 0.1 }}
                className="relative w-full h-full cursor-zoom-in"
                onClick={toggleZoom}
              >

                <Image
                  src={images[index].src}
                  alt={images[index].alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain rounded-none p-4 md:p-12"
                />

              </motion.div>

            </motion.div>

            {/* NEXT */}

            <button
              onClick={next}
              className="absolute right-2 md:right-6 z-50 text-white/50 hover:text-white bg-white/5 p-4 rounded-none hover:bg-white/10 transition backdrop-blur-md"
              title="Gambar Selanjutnya (Bilah kanan)"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>

            {/* ZOOM HINT */}
            
            <AnimatePresence>
              {!zoom && (
                 <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                   className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase pointer-events-none"
                 >
                   Klik gambar untuk memperbesar
                 </motion.div>
              )}

              {zoom && (
                 <motion.button
                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                   onClick={toggleZoom}
                   className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-white bg-white/5 px-6 py-3 text-sm tracking-wider uppercase rounded-none hover:bg-white/10 transition backdrop-blur-md flex items-center gap-2"
                 >
                   <ZoomOut size={16}/> Perkecil
                 </motion.button>
              )}
            </AnimatePresence>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  )
}
