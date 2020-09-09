/**
 * PostCSS配置文件
 */
module.exports = {
  // 配置要使用的PostCSS插件
  plugins: {
    // 配置使用autoprefixer插件
    // 作用: 生成浏览器CSS样式规则前缀
    // VueCLI内部已经配置了, autoprefixer 插件
    // 所以又配置了一次,所以产生冲突了
    // 'autoprefixer': { // autoprefixer 插件的配置
    //   // 配置要兼容到的环境信息
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
  //  },
    // 配置使用postcss-pxtorem插件
    // 作用: 把px转为rem
    'postcss-pxtorem': {
      // 根元素的值
      // lib-flexible的REM适配方案: 把一行分为10份,每份就是十分之一
      // 所以rootValue 应该设置为你的设计稿宽度的十分之一
      // 我们的设计稿是750,所以应该设置为750/10 = 75
      // 但是Vant建议设置为37.5,因为Vant是基于375写的 -- 所以我们750的设计稿量的尺寸必须除以2
      // rootValue支持两种类型 : 数字: 固定的数值 函数: 可以动态处理返回值
      // rootValue: 37.5,
      rootValue ({ file }) {
        // console.log(file)
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // 配置要传换的css属性
      // * 表示所有
      propList: ['*']
    }
  }
}
