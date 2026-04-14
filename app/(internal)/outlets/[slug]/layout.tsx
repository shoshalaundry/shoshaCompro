import type { Metadata } from 'next'
import { OUTLETS_DATA } from '@/lib/constants'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = OUTLETS_DATA.find((o) => o.slug === slug);
  const name = data ? data.name : slug.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
  const description = data?.description || `Layanan laundry profesional dengan standar kualitas premium di cabang ${name}.`;
  
  return {
    title: `Outlet ${name}`,
    description: description,
    openGraph: { title: `Outlet ${name}` },
  }
}

export default function OutletLayout({ children }: { children: React.ReactNode }) {
  return children
}
