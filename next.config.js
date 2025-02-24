/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Eğer harici görsel kaynakları kullanıyorsanız
  },
}

module.exports = nextConfig 

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
