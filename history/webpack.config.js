//webpack是node写出来的那么就要用node.js语法规范
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
//备份的一份webpack配置文件
module.exports= {
    // devServer: {//开发服务器的配置
    //     port:3000,
    //     progress: true,
    //     contentBase: './src'
    // },
    mode:'development',//模式 默认两种模式 production development开发环境(代码不压缩)
    entry: './src/bundle.js',//入口（从哪个地方开始打包必须从bundle.js因为webpack内置插件值识别bundle.js）
    output: {
        filename: 'wangqiaoqiao[hash:8].js',//打包后的文件名称
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
                    {
                        loader: 'style-loader',
                        options:{
                            insertAt: 'top'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: 'style-loader',
                        options:{
                            insertAt: 'top'
                        }
                    },
                    'css-loader',
                    'stylus-loader'
                ]
            }
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
            hash: true
        })
    ]
}