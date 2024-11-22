/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /\.(pdf)$/,
      loader: "file-loader",

      type: "asset/resource",
    });

    return config;
  },
  swcMinify: false,
};

export default nextConfig;
