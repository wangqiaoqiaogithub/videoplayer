//webpack是node写出来的那么就要用node.js语法规范
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');//解析index.html文件的强大插件
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports= {
    devServer: {//开发服务器的配置
        port:3001,
        progress: true,
        contentBase: './src'
    },
    mode:'development',//模式 默认两种模式 production development开发环境(代码不压缩)
    entry: {
        bundle: './src/bundle.js',
        other: './src/wheels_href.js'
    },//入口（从哪个地方开始打包必须从bundle.js因为webpack内置插件值识别bundle.js）
    output: {
        filename: 'js/[name].[hash:8].js',//打包后的文件名称
        chunkFilename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname,'dist')//路径必须是绝对路径.resolve()方法可以把相对路径解析成绝对路径
    },
    module:{//模块
        rules:[
            /*
            *css-loader 接续@import 这种语法负责解析导入进来的css文件
            *sytle-loader 它是负责把css文件插入到head标签中
            */
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options:{//用babel-loader需要把es6转化为es5
                            presets:[
                                '@babel/preset-env'
                            ]

                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //用minni-css-extract-plugin插件的特性去抽离js文件中的css部分
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                    //按计算机解析语言的顺序(从右到左从上到下)把stylus文件——>.css
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
                use:{
                    loader: 'url-loader',
                    options:{
                        limit: 10000,
                        outputPath: 'audio/'//解析打包后输出的文件目录
                    }
                }
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name]-[hash:5].[ext]",
                            fallback: 'file-loader',
                            limit: 5000,
                            outputPath: 'fonts/'//解析打包后输出的文件目录
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpeg?|gif)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 1000,// 8k以上，用file-loader抽离（非必须，默认就是file-loader)
                            fallback: 'file-loader',
                            outputPath: 'img/'//解析打包后输出的文件目录
                        }
                    }
                ]
            },
        ]
    },
    plugins: [//存放webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minfiy:{
                removeAttributeQuotes: false,
                collapseWhiteSpace: false
            },
            hash: true,
            chunks: ['bundle','other']//分别应用代码块
        }),
        new MiniCssExtractPlugin({
            filename: 'css/app.min.css'//通过插件的作用打包出来的css文件名称
        })
    ]
}