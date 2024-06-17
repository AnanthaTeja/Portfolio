// module.exports = {
//     reactStrictMode: true,

// }

// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // Use basePath and assetPrefix for GitHub Pages
  reactStrictMode: true,
  env: {
    NAME: process.env.NAME,
  },
  // basePath: isProd ? "/your-repo-name" : "",
  // assetPrefix: isProd ? "/your-repo-name/" : "",
};
