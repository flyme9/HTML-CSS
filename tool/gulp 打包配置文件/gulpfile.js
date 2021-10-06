// 导入 gulp
const gulp = require('gulp')
// 导入 gulp-cssmin
const cssmin = require('gulp-cssmin')
// 导入 gulp-autoprefixer
const autoPrefixer = require('gulp-autoprefixer')
// 导入 gulp-sass (gulp-sass 依赖的包是node-sass，因为 node-sass已经弃用，所以会报错了，所以我们依赖sass)
const sass = require('gulp-sass')(require('sass'))
// 导入 gulp-uglify 
const uglify = require('gulp-uglify')
// 导入 gulp-babel 
const babel = require('gulp-babel')
// 导入 gulp-htmlmin 
const htmlmin = require('gulp-htmlmin')
// 导入 del
const del = require('del')
// 导入 gulp-webserver
const webserver = require('gulp-webserver')
// 导入 gulp-file-include
const fileInclude = require('gulp-file-include')

// css 打包任务
const cssHandler = function () {
    return gulp
        .src('./src/css/*.css') // 找到源文件
        .pipe(autoPrefixer()) // 自动添加后缀
        .pipe(cssmin()) // 压缩任务
        .pipe(gulp.dest('./dist/css/')) // 压缩后的内容放到指定目录下
}
// sass 打包任务
const sassHandler = function () {
    return gulp
        .src('./src/sass/*.scss') // 找到源文件
        .pipe(sass()) // sass 文件转换为 css 文件
        .pipe(autoPrefixer()) // 自动添加后缀
        .pipe(cssmin()) // 压缩任务
        .pipe(gulp.dest('./dist/sass/')) // 压缩后的内容放
}
// js 打包任务
const jsHandler = function () {
    return gulp
        .src('./src/js/*.js') // 找到js文件
        .pipe(babel({
            // babel@7使用presets:['es2015']
            // babel@8使用presets:['@babel/env']
            presets: ['@babel/env']
        }))
        .pipe(uglify()) // 压缩
        .pipe(gulp.dest('./dist/js/'))
}
// html 打包任务
const htmlHandler = function () {
    return gulp
        .src('./src/html/*.html')           // 找到文件
        .pipe(fileInclude({                 // 导入对应的html片段
            prefix: '@-@',                   // 自定义标识符
            basepath: './src/components'     // 基准目录，组件文件所在的目录

        }))
        .pipe(htmlmin({
            // collapseWhitespace: true,       // 移除空格与换行
            removeEmptyAttributes: true,    // 移除原生空属性
            collapseBooleanAttributes: true,// 移除布尔值属性(checked)
            removeAttributeQuotes: true,    // 移除属性值的双引号(只移除单个属性值的引号)
            // minifyCSS: true,                // 压缩内嵌式 css样式(只能基本压缩，不能自动添加前缀)
            // minifyJS: true,                 // 压缩内嵌式 js代码(只能基本压缩，不能转码)
            removeStyleLinkTypeAttributes: true,    // 移除style标签上的 type 属性
            removeScriptTypeAttributes: true,       // 移除script标签上的 type 属性
        })) // 压缩
        .pipe(gulp.dest('./dist/html/')) // 压缩后的内容
}
// img 打包任务
const imgHandler = function () {
    // 图片由ui处理好，不需要我们进行压缩处理
    return gulp
        .src('./src/img/**')
        .pipe(gulp.dest('./dist/img/'))
}
// videos 打包任务
const videoHandler = function () {
    // 图片由ui处理好，不需要我们进行压缩处理
    return gulp
        .src('./src/videos/**')
        .pipe(gulp.dest('./dist/videos/'))
}
// audio 打包任务
const audioHandler = function () {
    // 图片由ui处理好，不需要我们进行压缩处理
    return gulp
        .src('./src/audios/**')
        .pipe(gulp.dest('./dist/audios/'))
}
// 第三方打包任务
const libHandler = function () {
    // 图片由ui处理好，不需要我们进行压缩处理
    return gulp
        .src('./src/lib/**/*')
        .pipe(gulp.dest('./dist/lib/'))
}
// fonts 打包任务
const fontHandler = function () {
    // 图片由ui处理好，不需要我们进行压缩处理
    return gulp
        .src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts/'))
}
// 删除 dist 目录任务
const delHandler = function () {
    return del(['./dist/'])
}
// 创建一个启动服务器的任务
const webserverHandler = function () {
    return gulp
        .src('./dist')
        .pipe(webserver({
            host: 'www.xg.com',                      // 域名（可配置自定义域名）
            port: '8080',                            // 端口号
            livereload: true,                        // 文件修改时，是否自动刷新页面
            open: './html/index.html',               // 默认打开哪个文件
            // proxies: [                               // 配置代理
            //     {                                   // 每一个代理就是一个对象
            //         source: '/duitang',                   // 代理标识符
            //         target: 'https://www.duitang.com/napi/blog/list/by_filter_id/'       // 代理目标地址
            //     }
            // ]
        }))
}
// 创建一个监控src目录文件修改
const watchHandler = function () {
    gulp.watch('./src/sass/*.scss', sassHandler)
    gulp.watch('./src/css/*.css', cssHandler)
    gulp.watch('./src/js/*.js', jsHandler)
    gulp.watch('./src/html/*.html', htmlHandler)
}

// 配置默认执行项
module.exports.default = gulp.series(
    delHandler,         // 打包之前，先删除之前文件，在执行并行任务，生成新的dist目录
    gulp.parallel(cssHandler, sassHandler, jsHandler, htmlHandler, imgHandler, videoHandler, audioHandler, libHandler, fontHandler),
    webserverHandler,   // 启动服务
    watchHandler        // 监控源文件变化
)