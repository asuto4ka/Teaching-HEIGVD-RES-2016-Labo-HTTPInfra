var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();




app.get('/', function(req, res) {
		res.send(generateStrangeAnimal());
	});
	
	
	app.listen(3000, function() {
	console.log('Accepting HTTP requests on port 3000');
	});
	
	
	function generateStrangeAnimal() {
		var numberOfAnimals = chance.integer({
		min:1,
		max:5
	});
	
	console.log(numberOfAnimals);
	var animals = [];
	for (var i=0; i< numberOfAnimals; i++) {
	
		var tabColor = ["red", "black", "green","yellow", "braun", "pink"];
		var typeAnimals = ["crocodile", "cat", "dog","pinguin", "horse", "zebra"];
	
		var colorIndex = chance.integer({min:0,max:5});	
		var animalIndex = chance.integer({min:0,max:5});

		animals.push({
			color:tabColor[colorIndex],
			animal: typeAnimals[animalIndex],
			gender: chance.gender()
		});
	};
	console.log(animals);
	return animals;
}	