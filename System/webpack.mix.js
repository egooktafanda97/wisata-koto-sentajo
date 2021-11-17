const mix = require("laravel-mix");
require("laravel-mix-react-css-modules");
const path = require("path");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath("../public/");

mix.js("resources/js/app.js", "../public/js")
    .react()
    .sass("resources/sass/app.scss", "../public/css")
    .postCss("resources/css/app.css", "public/css")
    .reactCSSModules()
    .webpackConfig({
        output: {
            chunkFilename: "js/[name].js?id=[chunkhash]",
            publicPath: "/wisata-project/public/",
        },
        resolve: {
            alias: {
                "@": path.resolve("resources/js"),
            },
        },
    });
