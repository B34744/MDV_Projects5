//alert("JavaScript works!");

// Nicholas Vanarsdale 

// SDI-1310

// Assignment 3

//global variables
var MyDuck = "Jeff";
var Eat = "\"Duck\"Food";
var NumOfseeds = 10;        
var HasMoreFood = 40;
var HasFood = true;
var HasFriends = false;
   var friends=["Tim","Jack","Ben"];
// just a pop up box
alert(MyDuck + " is hungry");

//procedure
        var division = function(){HasMoreFood/NumOfseeds;
        console.log( MyDuck + " eat's a lot of " + Eat);
};division();



 
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
        
        
        // number function        

var Quacks = function(type){ 
var TotalSeeds = 5
var        Seeds;
        if (type < Seeds) {
                
                return;
}
Seeds = Math.floor(type / Seeds);
return Seeds;
};
var GetQuacks = Quacks(9);
console.log("little Quacks");{


for ( i = 1; i < NumOfseeds; i++)
console.log(HasMoreFood + " swim's across the pond");

};

//String Function
var CheckString = function(val) {
        var Strlen = val.length;
        for (var i = 0; i < Strlen; i++) {
                if (val.substring(i, i+1) === "-") {
                        return i;
                };
        };
};
console.log("How many fish is " + MyDuck + " eating " + CheckString('123456-7890'));

//Boolean Function
var Fish = function(type){ 
var TotalFish = 10
var        fishes;
        if (type < fishes) {
                
return;                
}
fishes = Math.floor(type / fishes);
return fishes;
};


// Can not figure out why while loop is not working ?

var i=0;
while (friends[i])
{
console.log(friends[i] );
i++;
};                           


