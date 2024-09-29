const prod = process.argv[4];

if (prod === 'development') {
    module.exports = require('./webpack.development');
} else {
    module.exports = require('./webpack.production');
}