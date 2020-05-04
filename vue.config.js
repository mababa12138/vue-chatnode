module.exports = {
    lintOnSave: false,
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/': {
                target: 'http://39.102.152.165:80',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            },
        }
    },
    publicPath: "./",
    outputDir: 'dist',
    assetsDir: 'static'
}