import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  openGraph: { title: 'Home' },
  description: 'Layanan laundry profesional dengan sistem autopilot. Investasi laundry terpercaya dengan keuntungan maksimal dan ROI teruji 15+ tahun.'
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children
}
