module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Adjust the target to your backend URL
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};