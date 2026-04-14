import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  openGraph: { title: 'Tentang Kami' },
  description: 'Pelajari lebih lanjut tentang Sho-Sha Laundry, visi, misi, dan perjalanan kami dalam memberikan layanan laundry terbaik sejak 2011.'
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
