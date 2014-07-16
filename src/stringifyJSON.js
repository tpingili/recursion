// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	//handling all cases except object
	switch(typeof obj){
		case "number":
		case "boolean": return obj.toString();
		case "function":
		case "undefined": return undefined;
		case "string": obj = "\"" + obj + "\"";
						return obj.toString();
		default: break;
	}
	if(obj === null)
		return "null";
	var resultArray = [];
	if(Array.isArray(obj)){
		for(var i = 0; i < obj.length; i++){
			if(!(typeof obj[i] === "function" || typeof obj[i] === "undefined"))
				resultArray.push(stringifyJSON(obj[i]));
			else
				//JSON.stringify returns null for a function and undefined within an array
				resultArray.push("null");	
		}	
		return '[' + resultArray + ']';
	}
	else{
		for(var key in obj){
			if(!(typeof obj[key] === "function" || typeof obj[key] === "undefined"))
			resultArray.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
		}
		return '{' + resultArray + '}';
	}
};
