//alert("JavaScript works!");

//Nicholas vanarsdale

//assignment 3

//SDI 1309

var MyCat = "Jim";
var CatFood = "\"Kitten\"mix";
var NumOfMix = 67;
var HasFood = true;
var arr = [true, false, "", [], function(){}, 80];


console.log("My cats name is " + MyCat);
console.log("My cat will eat " + CatFood + " tonight. ");
console.log("I will feed him " + NumOfMix + " Bits of cat food");
console.log("It is " + HasFood + " that he will eat tonight");

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
		return;1
	}
	wholeGallon = Math.floor(ForCat / amountGiven);
	return wholeGallon;
};

var cathas = milk(3);
console.log("He is " + cathas + " happy cat with milk" );

	var countDown = function(NumOf){
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
	
	var returnedNumOf = countDown(NumOfMix);
	
	console.log("The returned value is : " + returnedNumOf);
	
	var catfriends = { 
		friend: "max", 
		friendTwo: "buddy", 
		interests: [
		"food", 
		"catToys"
		],
		numberOfToy: 10
	};
	
	console.log(catfriends);