const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://samples.openweathermap.org',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/data/2.5/forecast', 
            },
        })
    );
};
