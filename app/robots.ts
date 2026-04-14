import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shoshalaundry.id'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/admin/',
                '/api/',
                '/private/',
                '/dashboard/',
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
