"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Instagram,
  Facebook,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

type NavLink = {
  label: string;
  href: string;
};

interface FooterProps {
  navLinks: NavLink[];
}

export default function Footer({ navLinks }: FooterProps) {
  const pathname = usePathname();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/shoshalaundryofficial", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100087515256650", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/628111774438", label: "WhatsApp" },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-accent px-6 py-24 text-accent-foreground overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-x-12 gap-y-16 lg:grid-cols-4 lg:items-start">
          {/* BRANDING SECTION */}
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="inline-block group">
              <img
                src="/assets/logo.svg"
                alt="SHO SHA Logo"
                className="h-10 w-auto brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100"
                loading="lazy"
              />
            </Link>

            <p className="text-sm leading-relaxed text-accent-foreground/60 max-w-xs">
              Membangun masa depan investasi laundry autopilot yang transparan, menguntungkan, dan terpercaya di seluruh Indonesia.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: "var(--color-primary)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-accent-foreground/50 transition-colors hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS SECTION */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Navigasi
              </h4>
              <ul className="space-y-4">
                {navLinks
                  .filter((link) => link.href !== pathname)
                  .map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-sm text-accent-foreground/50 transition-colors hover:text-white"
                      >
                        <ArrowRight className="mr-2 h-0 w-0 transition-all group-hover:h-3 group-hover:w-3 text-primary" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Layanan
              </h4>
              <ul className="space-y-4 text-sm text-accent-foreground/50">
                {["Self-Service", "Drop-Off Laundry", "Membership TORU", "Premium Care"].map((item) => (
                  <li key={item} className="cursor-pointer transition-colors hover:text-white flex items-center group">
                    <span className="h-1 w-1 rounded-full bg-primary/30 mr-3 group-hover:bg-primary transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT & LOCATION SECTION */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Hubungi Kami
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-sm text-accent-foreground/60 leading-relaxed">
                  <MapPin className="h-5 w-5 shrink-0 text-primary/70" />
                  <span>
                    Jl. Pahlawan No.34, Sukabumi Selatan,
                    <br />
                    Jakarta Barat 11560
                  </span>
                </li>
                <li className="flex items-center gap-4 text-sm text-accent-foreground/60">
                  <Phone className="h-5 w-5 shrink-0 text-primary/70" />
                  <a href="tel:+628111774438" className="hover:text-white transition-colors">+62 811 1774 438</a>
                </li>
                <li className="flex items-center gap-4 text-sm text-accent-foreground/60">
                  <Mail className="h-5 w-5 shrink-0 text-primary/70" />
                  <a href="mailto:info@shoshalaundry.com" className="hover:text-white transition-colors">info@shoshalaundry.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="mt-24 mb-12 h-px w-full bg-gradient-to-r from-white/0 via-white/5 to-white/0" />

        {/* COPYRIGHT & LEGAL */}
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent-foreground/30">
              &copy; {new Date().getFullYear()} SHO-SHA LAUNDRY. SELURUH HAK CIPTA DILINDUNGI.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-[11px] font-bold uppercase tracking-widest text-accent-foreground/20 transition-all hover:text-primary"
            >
              Privacy Policy
            </Link>
            <div className="h-3 w-px bg-white/5" />
            <Link
              href="/terms"
              className="text-[11px] font-bold uppercase tracking-widest text-accent-foreground/20 transition-all hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}