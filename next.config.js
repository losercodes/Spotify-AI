/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://hgpfwazvaflhkxqirvnw.supabase.co",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
