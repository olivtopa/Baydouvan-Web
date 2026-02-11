import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Baydouvan',
        short_name: 'Baydouvan',
        description: "Mettre en avant l'excellence noire : Culture, Économie, Tech.",
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#D4AF37',
        icons: [
            {
                src: '/logo.jpeg',
                sizes: '192x192',
                type: 'image/jpeg',
            },
            {
                src: '/logo.jpeg',
                sizes: '512x512',
                type: 'image/jpeg',
            },
        ],
    }
}
