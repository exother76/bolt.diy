/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    serverBuildDirectory: "build",
    publicPath: "/build/",
    // Set the adapter for Vercel:
    serverBuildTarget: "vercel",
    // Other configuration options…
  };