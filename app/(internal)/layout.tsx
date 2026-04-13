import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { NAV_LINKS } from "@/lib/constants";

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer navLinks={NAV_LINKS} />
    </>
  );
}
