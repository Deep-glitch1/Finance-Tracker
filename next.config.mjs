/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts', 'react-icons'],
  },
  
  webpack: (config, { isServer }) => {
    // Disable problematic filesystem cache on Windows
    if (!isServer) {
      config.cache = false;
    }
    
    // Suppress warnings
    config.ignoreWarnings = [
      { module: /node_modules\/punycode/ },
      { message: /the `punycode` module is deprecated/ },
      { message: /Caching failed for pack/ },
    ];

    return config;
  },
};

export default nextConfig;
