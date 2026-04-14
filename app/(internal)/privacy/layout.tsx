import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  openGraph: { title: 'Kebijakan Privasi' },
  description: 'Pelajari bagaimana Sho-Sha Laundry mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.'
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
