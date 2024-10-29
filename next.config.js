/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // outras configurações
  images:{
    domains:[
      'files.stripe.com'
    ]
  }
}

module.exports = nextConfig;
