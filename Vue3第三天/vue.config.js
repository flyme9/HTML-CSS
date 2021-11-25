// vue项目配置文件
module.exports = {
    // 暂时关闭代码格式检测
    lintOnSave: false,
  
    // 配置反向代理
    devServer: {
      proxy: {
        '/maizuo': {
          target: 'https://m.maoyan.com',
          changeOrigin: true,
          // 路径重写
          pathRewrite: {
            '^/maizuo': ''
          }
        }
      }
    }
  }
  