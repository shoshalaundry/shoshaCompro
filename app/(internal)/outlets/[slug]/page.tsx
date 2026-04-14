"use client";

import { useEffect, useState, use } from "react";
import dynamic from "next/dynamic";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { OUTLETS_DATA, OUTLETS, slugify } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function OutletPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = OUTLETS_DATA.find((o) => o.slug === slug) || {
    name: slug.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" "),
    slug: slug,
    address: "Alamat belum tersedia",
    phone: "+62 811-1774-438",
    instagram: "https://www.instagram.com/shoshalaundryofficial",
    coordinates: [-6.244584, 106.790442] as [number, number],
    maps_link: "#",
    image_hero: "/mesin/mesin_rdlama1.jpg",
    image_icon: "/assets/logo.svg",
    gallery: ["/mesin/mesin_rdlama1.jpg", "/mesin/mesin_rdlama2.jpg"],
    description: "Layanan laundry profesional dengan standar kualitas premium."
  };

  const [markerIcon, setMarkerIcon] = useState<any>(null);

  useEffect(() => {
    import("leaflet").then((L) => {
      const icon = new L.Icon({
        iconUrl: "/assets/point.gif",
        iconSize: [60, 60],
        iconAnchor: [30, 45],
      });
      setMarkerIcon(icon);
    });
  }, []);

  if (!OUTLETS.map(o => slugify(o)).includes(slug)) {
     return notFound();
  }

  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ═══ HERO ═══ */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${data.image_hero}')` }}
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 text-center">
          <p className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">
             SHO-SHA Laundry Location
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Cabang {data.name}
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-300 font-normal">
            {data.description}
          </p>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* LEFT: Info & Gallery */}
            <div className="lg:col-span-8 space-y-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                  <span className="w-12 h-1 bg-primary" />
                  Profil Outlet
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p>
                    Kami melayani berbagai kebutuhan laundry mulai dari Self-Service, Drop-Off, hingga cuci satuan dengan penanganan profesional menggunakan deterjen ramah lingkungan dan pewangi premium. Fasilitas lengkap dan kenyamanan menjadi prioritas utama kami untuk memastikan pelanggan mendapatkan pengalaman terbaik.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Galeri Outlet</h3>
                <div className="grid grid-cols-2 gap-4">
                  {data.gallery.map((img, i) => (
                    <div 
                      key={i} 
                      className={`relative overflow-hidden rounded-none border border-gray-200 bg-gray-100 ${i === 0 ? "col-span-2 aspect-[21/9]" : "aspect-[4/3]"}`}
                    >
                      <img 
                        src={img} 
                        alt={`${data.name} Gallery ${i}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Map & Contact */}
            <div className="lg:col-span-4 sticky top-24 space-y-8">
              
              {/* Map Block */}
              <div className="border border-gray-200 bg-gray-50 p-4 rounded-none h-[400px]">
                <div className="w-full h-full bg-gray-200 relative z-0">
                  {markerIcon ? (
                    <MapContainer
                      center={data.coordinates}
                      zoom={16}
                      scrollWheelZoom={true}
                      style={{ height: "100%", width: "100%", zIndex: 0 }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={data.coordinates} icon={markerIcon}>
                        <Popup className="rounded-none">
                          <div className="p-1">
                            <p className="font-bold text-gray-900 mb-1">SHO-SHA LAUNDRY</p>
                            <p className="text-xs text-gray-600">{data.name}</p>
                          </div>
                        </Popup>
                      </Marker>
                    </MapContainer>
                  ) : (
                     <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                        Loading Map...
                     </div>
                  )}
                </div>
              </div>

              {/* Contact Info Box */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-none">
                <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 text-gray-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">Alamat</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{data.address}</p>
                    </div>
                  </div>

                  <div className="h-px bg-gray-200" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href={`tel:${data.phone}`}
                      className="flex flex-col items-center justify-center gap-2 p-4 bg-white border border-gray-200 hover:border-gray-900 transition-colors"
                    >
                      <Phone size={20} className="text-gray-900" />
                      <span className="text-xs font-bold text-gray-900">Telfon</span>
                    </a>
                    <a 
                      href={data.instagram}
                      target="_blank"
                      className="flex flex-col items-center justify-center gap-2 p-4 bg-white border border-gray-200 hover:border-gray-900 transition-colors"
                    >
                      <Instagram size={20} className="text-gray-900" />
                      <span className="text-xs font-bold text-gray-900">Instagram</span>
                    </a>
                  </div>

                  <Button className="w-full h-12 rounded-none font-bold bg-primary text-white hover:bg-primary/90" asChild>
                    <a href={`https://wa.me/628111774438?text=Halo%20Sho-Sha%20Laundry%20Cabang%20${data.name}`} target="_blank">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Hubungi Outlet
                    </a>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
