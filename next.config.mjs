/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable webpack caching in development
      config.cache = false;
    }

    // Suppress punycode warning
    config.ignoreWarnings = [
      { module: /node_modules\/punycode/ },
      { message: /the `punycode` module is deprecated/ }
    ];

    return config;
  },
};

export default nextConfig;
