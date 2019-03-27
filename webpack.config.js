const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');


// 这个配置文件就是js 配置文件,通过node 中的模块向外暴露了一个配置对象
// 当我们在控制台输入 webpack 命令的时候,webpack 做了以下几步：
// 1. 首先 webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
// 2. webpack 会在项目的根目录查找一下叫webpack.config.js 的文件
// 3. 当找到配置文件后,webpack 会去解析执行这个配置文件，解析完成后得到配置文件中的导出对象
// 4. 拿到配置对象后就能找到入口和出口文件
module.exports = {
    entry: path.join(__dirname,"src/main.js"), // 入口,表示要使用webpack 打包哪个文件
    output: { // 输出文件相关的配置
        path: path.join(__dirname,"dist"),
        filename: 'bundle.js', // 这是指定输出的文件的名称
    },
    plugins: [
        new htmlWebpackPlugin({ // 创建一个在内存中生成html 页面的操作
            template: path.join(__dirname,'src/index.html'),
            filename: 'index.html',
        }),
        new VueLoaderPlugin()
    ],
    // 存放第三方的模块,加载器等
    module: {
        rules: [ // 第三方模块匹配规则 配置css 文件
            {test: /\.css$/,use: ['style-loader','css-loader']},
            // 配置处理less 文件的
            {test: /\.less$/,use: ['style-loader','css-loader','less-loader']},
            // 处置 scss 文件的第三方loader
            {test: /\.scss$/,use: ['style-loader','css-loader','sass-loader']},
            // 处理图片相关的文件
            {test: /\.(jpg|png|gif|bmp|jpeg)$/,use: 'url-loader?limit=91185&name=[name].[ext]'},
            // 处理字体文件的loader
            {test: /\.(ttf|eot|svg|woff|woff2)$/,use: 'url-loader'},
            // 处理高级语法的loader
            {test: /\.js$/,use: 'babel-loader', exclude: '/node_modules/'},
            // 处理 Vue 文件的loader
            {test: /\.vue$/,use: 'vue-loader'},
        ]
    },
    resolve: {
        alias: { // 这是修改设置 vue 导入时候包的路径
            'vue$': 'vue/dist/vue.js',
        }
    }
};