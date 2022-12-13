/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir:true
  },
  compilerOptions:{
        baseUrl: ".",
        paths: {
            "@/components/*": ["components/*"],
            "@/styles/*":["styles/*"]
        }
    }
};

module.exports = nextConfig
