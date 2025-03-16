const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .react() // Include this if you’re using React
   .css('resources/css/app.css', 'public/css')
   .version(); // Adds cache-busting hashes