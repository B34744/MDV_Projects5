//alert("JavaScript works!");

//Nicholas vanarsdale

//assignment 3

//SDI 1309

//global variables
var MyCat = "Jim";
var CatFood = "\"Kitten\"mix";
var NumOfMix = 67;
var HasFood = true;

// output
console.log("My cats name is " + MyCat);
console.log("My cat will eat " + CatFood + " tonight. ");
console.log("I will feed him " + NumOfMix + " Bits of cat food");
console.log("It is " + HasFood + " that he will eat tonight");
//boolean argument
	if (HasFood === true){
		if (NumOfMix >= 60){
		NumOfMix = NumOfMix + 30;
			console.log("if he has " + NumOfMix + " I will wait to feed him! ");
		} else {
			console.log("He is not hungry.");
		}

    	if (HasFood === false){
	    	console.log("I will feed him " + CatFood + " tonight ");
		} else { 
			console.log("Then " + MyCat + " will will be happy.");}	

	}
  
var milk = function(ForCat) {
	var amountGiven = 2,
		wholeGallon;
	if (ForCat < amountGiven) {
		console.log("Thats a lot of milk for a cat");
		// return number
		return;1
	}
	// return string
	wholeGallon = Math.floor(ForCat / amountGiven);
	return wholeGallon;
};
//
var cathas = milk(3);
console.log("He is " + cathas + " happy cat with milk" );
// local variables
	var countDown = function(NumOf){
//while loop
		while (NumOf > 9){
			console.log(NumOf + "pieces of cat food");
			NumOf = NumOf - 7;
			
			if (NumOf > 0) {
				console.log(NumOf + "pieces of cat food");
			}else{
				console.log("no more pieces of cat food");
			};
		};
		console.log("this is the value of cat food inside the function: " + NumOf)
		return NumOf;
	};
	// return array 
	var returnedNumOf = countDown(NumOfMix);
	
	console.log("The returned value is : " + returnedNumOf);
	
	
	
	// for loop also nested loop and math
for (var Paw = 0; Paw < 5; Paw++) {
		for (var PawPrint = 0; PawPrint < 4; PawPrint++) {
			console.log( " Paws " + Paw + " Paw prints " + PawPrint );
		};
};
		
		// array
	var catfriends = { 
		friend: "max", 
		friendTwo: "buddy", 
		interests: [
		"food", 
		"catToys"
		],
		numberOfToy: 10
	}	

	console.log(catfriends);
	
	
	
	