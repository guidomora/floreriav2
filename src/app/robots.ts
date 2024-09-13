import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {

    const baseUrl = 'https://floreriamorabito.com.ar'
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/categoria', '/producto'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}