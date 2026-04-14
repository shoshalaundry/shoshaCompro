import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ketentuan Layanan',
  openGraph: { title: 'Ketentuan Layanan' },
  description: 'Pelajari syarat dan ketentuan penggunaan layanan laundry dan sistem kemitraan Sho-Sha Laundry.'
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
