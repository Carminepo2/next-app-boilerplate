/** @type {import('next').NextConfig} */
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  reactStrictMode: true,
  swcMinify: true,
});
