export const NAV_LINKS = [
  { label: "Beranda", href: "/home" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Kemitraan", href: "/partnership" },
  { label: "FAQ", href: "/faq" },
];

export const OUTLETS = [
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
];

export const OUTLETS_DATA = OUTLETS.map(name => {
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  const path = `/outlets/${slug}`;
  
  // Custom data for specific branches
  if (name === "Pahlawan") {
    return {
      name, slug, path,
      address: "Jl. Pahlawan No.34, RT.10/RW.4, Sukabumi Selatan, Kec. Kebon Jeruk, Kota Jakarta Barat, 11560",
      phone: "+62 813-8556-3703",
      instagram: "https://www.instagram.com/laundry24jampahlawan",
      tiktok: "https://www.tiktok.com/@l24j.pahlawan",
      coordinates: [-6.22381, 106.77125] as [number, number],
      maps_link: "https://maps.app.goo.gl/hqrWxNBiqZABxHgZ6",
      image_hero: "/mesin/mesin_pahlawan2.jpg",
      icon: "/outlets/pahlawan.png",
      gallery: ["/outlets/pahlawan.png", "/gallery/galeri6.jpg", "/mesin/mesin_pahlawan1.jpg"],
      description: "Outlet Pahlawan melayani berbagai kebutuhan laundry cuci kiloan, satuan, hingga express dengan mesin modern."
    };
  }
  
  if (name === "Radio Dalam Lama") {
    return {
      name, slug, path,
      address: "Jl. Radio Dalam Raya No.15, Gandaria Utara, Kec. Kby. Baru, Kota Jakarta Selatan",
      phone: "+62 811-1774-438",
      instagram: "https://www.instagram.com/shoshalaundryofficial",
      coordinates: [-6.244584, 106.790442] as [number, number],
      maps_link: "https://maps.app.goo.gl/rdlama",
      image_hero: "/mesin/mesin_rdlama1.jpg",
      icon: "/outlets/rd_lama.jpg",
      gallery: ["/outlets/rd_lama.jpg", "/mesin/mesin_rdlama2.jpg"],
      description: "Cabang utama Radio Dalam Lama menyediakan layanan laundry eksekutif dengan standar kualitas premium."
    };
  }

  // Default for others
  return {
    name, slug, path,
    address: "Alamat Cabang Sho-Sha Laundry",
    phone: "+62 811-1774-438",
    instagram: "https://www.instagram.com/shoshalaundryofficial",
    coordinates: [-6.244584, 106.790442] as [number, number],
    maps_link: "#",
    image_hero: "/mesin/mesin_rdlama1.jpg",
    icon: `/outlets/${slug}.jpg`,
    gallery: ["/mesin/mesin_rdlama1.jpg"],
    description: `Cabang Sho-Sha Laundry ${name} siap melayani kebutuhan laundry Anda dengan hasil bersih dan wangi.`
  };
});

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}
