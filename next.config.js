/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: "export",
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  // https://stackoverflow.com/questions/73913732/nextjs-app-wont-export-due-to-image-optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
