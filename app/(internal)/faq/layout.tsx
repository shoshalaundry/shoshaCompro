import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  openGraph: { title: 'FAQ' },
  description: 'Pertanyaan yang sering ditanyakan seputar layanan dan kemitraan Sho-Sha Laundry.'
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
