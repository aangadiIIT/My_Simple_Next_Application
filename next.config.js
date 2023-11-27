// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const { join } = require('path');
/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: join(__dirname, "../../../..")
  }
}