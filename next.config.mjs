/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: '**.agenceecofin.com',
      },
      {
        protocol: 'https',
        hostname: '**.jeuneafrique.com',
      },
      {
        protocol: 'https',
        hostname: '**.africultures.com',
      },
      {
        protocol: 'http',
        hostname: '**.africultures.com',
      },
      {
        protocol: 'http',
        hostname: 'africultures.com',
      },
      {
        protocol: 'https',
        hostname: 'africultures.com',
      },
      {
        protocol: 'https',
        hostname: '**.rfi.fr',
      },
      {
        protocol: 'https',
        hostname: '**.techcabal.com',
      },
      {
        protocol: 'https',
        hostname: '**.financialafrik.com',
      },
      {
        protocol: 'https',
        hostname: '**.wearetech.africa',
      },
      {
        protocol: 'https',
        hostname: '**.afriqueitnews.com',
      },
      {
        protocol: 'https',
        hostname: '**.mjedge.net', // TechCabal CDN
      },
      {
        protocol: 'https',
        hostname: '**.africarice.org',
      },
      {
        protocol: 'https',
        hostname: 'africarice.org',
      },
      {
        protocol: 'https',
        hostname: '**.itweb.co.za',
      },
      {
        protocol: 'https',
        hostname: '**.itweb.africa',
      },
      {
        protocol: 'https',
        hostname: '**.ewag.fr',
      },
      {
        protocol: 'https',
        hostname: '**.techinafrica.com',
      },
      {
        protocol: 'https',
        hostname: '**.martiniquedigitale.com',
      },
      {
        protocol: 'https',
        hostname: '**.inova.gp',
      },
      {
        protocol: 'https',
        hostname: '**.cio-mag.com',
      },
      {
        protocol: 'https',
        hostname: 'cio-mag.com',
      },
    ],

  },
};

export default nextConfig;
