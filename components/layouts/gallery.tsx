"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react"

interface GalleryProps {
  variant?: "gradient" | "default"
  className?: string
}

export default function Gallery({
  variant = "gradient",
  className = ""
}: GalleryProps) {

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

  const [index, setIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(false)

  const open = (i:number) => {
    setIndex(i)
    setZoom(false)
  }

  const close = () => {
    setIndex(null)
    setZoom(false)
  }

  const next = () => {
    if(index === null) return
    setZoom(false)
    setIndex((index + 1) % images.length)
  }

  const prev = () => {
    if(index === null) return
    setZoom(false)
    setIndex((index - 1 + images.length) % images.length)
  }

  const toggleZoom = () => setZoom(!zoom)

  useEffect(()=>{
    const handle = (e:KeyboardEvent)=>{
      if(index === null) return

      if(e.key === "Escape") close()
      if(e.key === "ArrowRight") next()
      if(e.key === "ArrowLeft") prev()
    }

    window.addEventListener("keydown",handle)
    return ()=> window.removeEventListener("keydown",handle)
  },[index])

  const backgroundClass =
    variant === "gradient"
      ? "bg-gradient-to-b from-orange-400/20 to-white"
      : ""

  return (
    <section className={`px-6 py-28 ${backgroundClass} ${className}`}>

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <div className="text-left">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Gallery
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Lihat lebih dekat.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Lihat aktivitas, outlet modern, dan kualitas layanan laundry kami.
          </p>

        </div>

        {/* GRID */}

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">

          {images.map((img, i) => (

            <motion.div
              key={i}
              onClick={() => open(i)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${img.span ?? ""}`}
              whileHover={{ scale: 1.03 }}
            >

              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* hover overlay */}

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">
                  {img.alt}
                </p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>

        {index !== null && (

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
          >

            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-lg"
              onClick={close}
            />

            {/* COUNTER */}

            <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 text-white bg-black/40 px-3 py-1 rounded-full text-sm">
              {index + 1} / {images.length}
            </div>

            {/* CLOSE */}

            <button
              onClick={close}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-white"
            >
              <X size={30}/>
            </button>

            {/* PREV */}

            <button
              onClick={prev}
              className="absolute left-2 md:left-6 z-50 text-white bg-black/40 p-2 md:p-3 rounded-full hover:bg-black/60 transition"
            >
              <ChevronLeft size={28}/>
            </button>

            {/* IMAGE */}

            <motion.div
              key={images[index].src}
              initial={{scale:0.95,opacity:0}}
              animate={{scale:1,opacity:1}}
              exit={{scale:0.95,opacity:0}}
              className="
                relative
                w-[92vw]
                md:w-[70vw]
                lg:w-[60vw]
                max-w-[900px]
                aspect-[16/10]
                overflow-hidden
              "
            >

              <motion.div
                animate={{ scale: zoom ? 1.8 : 1 }}
                transition={{ type:"spring", stiffness:120 }}
                className="w-full h-full"
              >

                <Image
                  src={images[index].src}
                  alt={images[index].alt}
                  fill
                  priority
                  sizes="80vw"
                  className="object-contain rounded-xl"
                />

              </motion.div>

            </motion.div>

            {/* NEXT */}

            <button
              onClick={next}
              className="absolute right-2 md:right-6 z-50 text-white bg-black/40 p-2 md:p-3 rounded-full hover:bg-black/60 transition"
            >
              <ChevronRight size={28}/>
            </button>

            {/* ZOOM */}

            <button
              onClick={toggleZoom}
              className="absolute bottom-6 right-6 z-50 text-white bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
            >
              {zoom ? <ZoomOut size={24}/> : <ZoomIn size={24}/>}
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  )
}
