const {
    override,
    addLessLoader,
    addDecoratorsLegacy,
    disableEsLint,
    useBabelRc,
    addWebpackAlias
} = require('customize-cra')
const path = require('path')

//stylus 自定义配置
const addStylusLoader = (e = {}) => s => {
    const r = "development" === process.env.NODE_ENV ? "dev" : "prod",
        o = "./" === require("react-scripts/config/paths").servedPath,
        t = "prod" === r && "false" !== process.env.GENERATE_SOURCEMAP, a = /\.module\.less$/,
        l = e.localIdentName || "[path][name]__[local]--[hash:base64:5]",
        st = s => "dev" === r ?  [require.resolve('style-loader'), require.resolve('css-loader'), require.resolve('stylus-loader')] : [{loader: require.resolve("css-loader"), options: s}, {
            loader: require.resolve("postcss-loader"),
            options: {
                ident: "postcss",
                plugins: () => [require("postcss-flexbugs-fixes"), require("postcss-preset-env")({
                    autoprefixer: {flexbox: "no-2009"},
                    stage: 3
                })],
                sourceMap: t
            }
        }, {loader: require.resolve("stylus-loader"), options: Object.assign(e, {sourceMap: t})}],
        i = s.module.rules.find(e => Array.isArray(e.oneOf)).oneOf;
    return i.splice(i.length - 1, 0, {
        test: /\.styl$/,
        exclude: a,
        use: st({importLoaders: 2}),
        sideEffects: "prod" === r
    }, {
        test: /\.module\.styl$/,
        use: st({importLoaders: 1, modules: !0, localIdentName: l})
    }), s
}

module.exports = override(
    //添加修饰器 根目录下创建.babelrc
    useBabelRc(),
    //禁用默认eslint，使用自定义eslint,根目录下创建.eslintrc.js
    disableEsLint(),
    //在传统模式下添加装饰器。一定要@babel/plugin-proposal-decorators安装
    addDecoratorsLegacy(),
    //添加less-loader配置
    addLessLoader(),
    //添加stylus-loader配置
    addStylusLoader(),
    //配置简化路径
    addWebpackAlias(
        {
            '@style': path.resolve(__dirname, 'src/style'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@resource': path.resolve(__dirname, 'src/resource'),
            '@components':path.resolve(__dirname, 'src/components'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@': path.resolve(__dirname, 'src'),
            '@utils': path.resolve(__dirname, 'src/utils')
        }
    )
)
