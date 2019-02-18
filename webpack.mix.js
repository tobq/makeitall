const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up fetch the JS files.
 |
 */

mix
    .react('resources/js/app.jsx', 'public/js')
    .react('resources/js/Solutions.jsx', 'public/js')
    .react('resources/js/call.jsx', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/call.scss', 'public/css')
    .sass('resources/sass/dashboard.scss', 'public/css')

    // .sass('resources/sass/FieldLabel.scss', 'public/css/FieldLabel')
    // .sass('resources/sass/Select.scss', 'public/css/Select')

    .disableSuccessNotifications();

