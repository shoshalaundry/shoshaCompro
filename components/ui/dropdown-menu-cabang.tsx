"use client"

import Link from "next/link"

const outlets = [
  "Pahlawan",
  "Radio Dalam Lama",
  "Assirot",
  "Ciledug",
  "Cipete Utara",
  "Kebon Mangga",
  "Kemanggisan Pulo",
  "KPBD",
  "Madrasah",
  "Petukangan Baru",
  "Petukangan Lama",
  "Radio Dalam 24 Jam",
  "Tanah Kusir",
]

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")

export default function DropdownMenuCabang() {
  return (
    <div className="absolute right-0 top-full pt-4">
      <div
        className="
        w-[min(95vw,900px)]
        max-h-[420px]
        overflow-y-auto
        rounded-3xl
        border border-primary/10
        bg-background/95
        backdrop-blur-2xl
        shadow-[0_20px_50px_rgba(0,0,0,0.15)]
        p-6
        "
      >
        <div className="mb-4 flex items-center justify-between px-2">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Daftar Cabang</h4>
          <div className="h-px flex-1 mx-4 bg-gradient-to-r from-primary/20 to-transparent" />
        </div>
        
        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-2
          "
        >
          {outlets.map((outlet) => (
            <Link
              key={outlet}
              href={`/outlets/${slugify(outlet)}`}
              className="
              group/item
              relative
              flex
              items-center
              rounded-xl
              px-4 py-3
              text-sm
              font-bold
              text-muted-foreground
              hover:bg-primary/5
              hover:text-primary
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-95
              border border-transparent
              hover:border-primary/10
              "
            >
              <div className="absolute left-2 w-1 h-0 bg-primary rounded-full transition-all duration-300 group-hover/item:h-4" />
              <span className="truncate">{outlet}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
