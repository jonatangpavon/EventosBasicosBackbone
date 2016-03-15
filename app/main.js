var Backbone = require('backbone');
var Movies = require("./collections/movies");
var data = require('./movies.json');
var movies = new Movies(data);
Monitor = require('./monitor.js');
monitor = new Monitor(movies);
module.exports = movies;



/*
browserify -r ./app/main.js:app > ./static/bundle.js

Desde consola chrome
movies = require('app')
*/