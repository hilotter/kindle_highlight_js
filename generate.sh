#!/bin/sh
browserify lib/main.js | uglifyjs -c > main.min.js
browserify lib/main_location.js | uglifyjs -c > main_location.min.js
browserify lib/main.js > main.js
browserify lib/main_location.js > main_location.js
