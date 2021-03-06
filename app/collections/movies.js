var Backbone = require('backbone');
Movie = require('../models/movie');
var Movies = Backbone.Collection.extend({
	model:Movie,

resetSelected: function(){
	this.each(function(model){
		model.set({"selected": false});		
	});
},

selectByID: function(id){
	this.resetSelected();
	var movie = this.get(id);
	movie.set({"selected":true});
	return movie.id;
}

});
module.exports = Movies;


/*
browserify -r ./app/collections/movies.js:movies -r ./app/models/movie.js:movie > ./static/bundle.js

*/