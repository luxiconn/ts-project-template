const path = require('path');

module.exports = {
  reactStrictMode : true,
  transpilePackages : ['@luxiconn/ui'],
  output : 'standalone',
  experimental : {
    outputStandalone : true,
    outputFileTracingRoot : path.join(__dirname, '../../'),
  },
};