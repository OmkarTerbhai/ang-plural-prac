module.exports = {
    '/api': {
        target: 'http://localhost:3000',
        secure: false,        // allow self-signed certificates
        changeOrigin: true,   // needed for virtual hosted sites
        logLevel: 'debug',    // useful for troubleshooting
        ws: true,             // proxy websockets if required
        pathRewrite: { '^/api': '' } // strip /api prefix when forwarding
    }
};