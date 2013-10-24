// alert("JavaScript works!");

// Number Function

//The number of days in between two dates.
var oneDay = 24*60*60*1000; 
var firstDate = new Date(2013,01,20);
var secondDate = new Date(2013,02,30);

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));



// string Function

//Does the string follow a pattern like a phone number?
var Phone = function(val) {
		if (val.substring  === "-") {
			return true
		} else {
			return false
		}
	
	};


//does the string follow a pattern like an email address?
var Email = function(val) {
	if (val.IndexOf === "aaa@bbb.ccc") {
		return true
	} else {
		return false 
	}
	
};






// array Function












//functioon calls
console.log(diffDays);
console.log("Does a string follow an email " + Email("aaa@bbb.ccc"));
console.log("Does a string follow a phone number " + Phone("123-456-7890"));
console.log();