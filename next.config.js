/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HOST: "https://vocalis-app.vercel.app",
  },
  swcMinify: true,
};

module.exports = nextConfig;
