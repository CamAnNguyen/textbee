/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/android',
        destination: 'https://sms.tainhamassage.com',
        permanent: false,
      },
      // The invite itself lives behind github.com/CamAnNguyen/textbee/issues, so it can rotate
      // in one place.
      {
        source: '/discord',
        destination: 'https://github.com/CamAnNguyen/textbee/issues',
        permanent: false,
      },
    ]
  },
}



module.exports = nextConfig;
