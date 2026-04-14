import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kemitraan',
  openGraph: { title: 'Kemitraan' },
  description: 'Bergabunglah dengan jaringan franchise laundry yang terus berkembang di Indonesia. Peluang investasi laundry autopilot dengan ROI tinggi.'
}

export default function PartnershipLayout({ children }: { children: React.ReactNode }) {
  return children
}
