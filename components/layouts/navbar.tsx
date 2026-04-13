"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import DropdownMenuCabang from "@/components/ui/dropdown-menu-cabang";
import { NAV_LINKS, OUTLETS, slugify } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCabang, setOpenCabang] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full h-20 flex items-center bg-white transition-all duration-300",
        scrolled ? "border-b border-gray-100 shadow-sm" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center transition-transform active:scale-95"
          >
            <img
              src="/assets/logo.svg"
              alt="SHO SHA Logo"
              className="h-20 w-auto"
              loading="lazy"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 ml-auto">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "text-primary"
                      : "text-[#333] hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Cabang Dropdown */}
            <div className="relative group/cabang">
              <button
                className="flex items-center gap-1.5 text-sm font-semibold text-[#333] hover:text-primary transition-all duration-200"
              >
                Cabang
                <ChevronDown className="w-4 h-4 transition-transform group-hover/cabang:rotate-180 duration-300" />
              </button>

              <div className="invisible opacity-0 group-hover/cabang:visible group-hover/cabang:opacity-100 transition-all duration-300 translate-y-2 group-hover/cabang:translate-y-0">
                <DropdownMenuCabang />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4 ml-10">

            {/* Mobile Hamburger */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-md lg:hidden text-[#333] hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-primary" key="close" />
                ) : (
                  <Menu className="h-6 w-6" key="menu" />
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Container */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-0 w-full lg:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden z-[60]"
          >
            <div className="flex flex-col p-6 gap-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center rounded-lg px-4 py-3 text-base font-bold transition-all",
                    pathname === item.href
                      ? "bg-gray-50 text-primary"
                      : "text-[#333] hover:bg-gray-50"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex flex-col">
                <button
                  onClick={() => setOpenCabang(!openCabang)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-bold text-[#333] hover:bg-gray-50 transition-all"
                >
                  Cabang
                  <ChevronDown className={cn("w-5 h-5 transition-transform", openCabang ? "rotate-180" : "")} />
                </button>

                <AnimatePresence>
                  {openCabang && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="mx-2 mb-2 mt-1 max-h-60 flex flex-col overflow-y-auto rounded-lg bg-gray-50 p-2 gap-1 border border-gray-100">
                        {OUTLETS.map((outlet) => (
                          <li key={outlet}>
                            <Link
                              href={`/outlets/${slugify(outlet)}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-md px-4 py-2 text-sm font-semibold text-[#666] hover:text-primary transition-all"
                            >
                              {outlet}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="my-4 h-px bg-gray-100" />

              <Button
                size="lg"
                className="h-12 w-full rounded-md bg-[#3b519d] hover:bg-[#2d3e7a] font-bold text-white shadow-md"
                asChild
              >
                <a href="https://wa.me/628111774438" target="_blank" rel="noopener noreferrer">
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 lg:hidden z-50"
            onClick={() => setMobileMenuOpen(false)}
            style={{ top: '80px' }}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
