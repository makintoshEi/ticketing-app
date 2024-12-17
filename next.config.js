/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONG_DB_URI: process.env.MONG_DB_URI,
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
};

module.exports = nextConfig;
