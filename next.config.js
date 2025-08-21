/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.110", "localhost", "127.0.0.1", "0.0.0.0"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rgolab.com",
        port: "",
        pathname: "/oferta/assets/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
