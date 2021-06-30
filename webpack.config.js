const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ESBuildPlugin } = require('esbuild-loader');

module.exports = {
entry: './src/index.tsx',
resolve: { // 인식 파일 형식 지정
    extensions: ['.ts', '.tsx', '.js']
},
output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
},
module: { // webpack에서 loader를 사용할 때에는 아래와 같이 사용하며 loader는 webpack이 js파일이 아닌 형식의 파일도 이해할 수 있도록한다.
    rules: [
        {
            test: /\.tsx?$/,
            loader: 'esbuild-loader',
            exclude: /node_modules/,
            options: {
                loader: 'tsx', 
                target: 'es2015'
            }
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader'],
        },
    ]
},
  plugins: [
    new HtmlWebpackPlugin({ // html파일을 webpack이 빌드할 수 있도록 플러그인을 설정한다.
        template: './public/index.html'
    }),
    new ESBuildPlugin()
]
}