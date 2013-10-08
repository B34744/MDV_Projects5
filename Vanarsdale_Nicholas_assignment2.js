//alert("JavaScript works!");

// Nicholas Vanarsdale 

// SDI-1310

// Assignment 2

var MyDuck = "Jeff";
var Eat = "\"Duck\"Food";
var NumOfseeds = 10;
var HasFood = true;
var HasFriends = false;
//outputs
 
console.log(MyDuck + " will swim across the pond for" + Eat + ". ");
console.log(MyDuck + " will eat " + NumOfseeds + " seeds.");
console.log("It is " + HasFood + " that " + MyDuck + " has food."); 
console.log(MyDuck + " will only eat one type of " + Eat + "!");

HasFriends = confirm(MyDuck + " Is hungry for food right now.");

if (HasFood === false){
	if (NumOfseeds < 100){
		NumOfseeds = NumOfseeds * 50;
		console.log("If " + MyDuck + " eat's " + NumOfseeds + " seeds he will be happy. ");
	} else { 
		console.log(MyDuck + " will be sad! ");
	}
} else { 
	if (HasFriends === true){
		console.log(MyDuck + " Is a Happy duck");
	} else {
		console.log(MyDuck + " will eat his " + Eat );
	}
	
}