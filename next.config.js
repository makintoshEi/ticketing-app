/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONG_DB_URI: process.env.MONG_DB_URI,
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
    ],
  },
};

module.exports = nextConfig;
